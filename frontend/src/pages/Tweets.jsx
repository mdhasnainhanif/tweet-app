import React, { useEffect, useState } from "react";
import TweetCard from "../components/TweetCard";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import AddIcon from "../assets/images/icons/plus-white.svg";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

const Tweets = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const fetchTweets = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8000/api/tweets/alltweets", { withCredentials: true });
        console.log("All Tweets", response.data);
        setTweets(response.data.data);
      } catch (error) {
        console.error("Error fetching tweets:", error.message);
        setError("An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchTweets();
  }, []);

  const userId = localStorage.getItem('userid');
  const token = localStorage.getItem('access_token');

  const handleDelete = async (tweetId) => {
    // console.log(tweetId);
    try {
      await axios.delete(`http://localhost:8000/api/tweets/${tweetId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          userId: userId,
        },
      });
      setTweets(tweets.filter(tweet => tweet._id !== tweetId));
    } catch (error) {
      console.error("Error deleting tweet:", error.response ? error.response.data : error.message);
      if(error?.message === "Request failed with status code 400"){

        setError("You can delete only your own Tweets");
      }
    }
  };

  console.log(tweets.length);

  return (
    <div className="main-wrapper">
      <Header openSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <div className="main-content">
        <div className="container">
          <div className="row align-items-center mb-3">
            <div className="col-md-8 col-12 d-flex align-items-center justify-content-between">
              <h2 className="text-start mb-0">Tweets</h2>
              <Link to="/add-tweet">
                <Button name="Add Tweet" className="btn btn-primary" imgClass="filter_invert" imgSrc={AddIcon} imgAlt="add" />
              </Link>
            </div>
          </div>
          {error && <p className="text-danger">{error}</p>}
          <div className="row mt-5">
            <div className="col-md-8 col-12">
              {loading ? (
                <div className="text-center">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              ) : (
                <>
                  {tweets.length > 0 ? (
                    tweets.map((tweet) => (
                      <TweetCard key={tweet._id} tweet={tweet} onDelete={handleDelete} />
                    ))
                  ) : (
                    <p>No Tweets Found</p>
                  )}

                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweets;
