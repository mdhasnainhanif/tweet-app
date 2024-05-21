import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import TweetCard from "../components/TweetCard";
import ProfileCover from "../components/ProfileCover";
import User from "../assets/images/user.jpg";
import RightPanel from "../components/RightPanel";
import ProfileStats from "../components/ProfileStats";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tweets, setTweets] = useState([]);
  const [tweetContent, setTweetContent] = useState("");

  const fetchTweets = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:8000/api/tweets/alltweets",
        { withCredentials: true }
      );
      console.log("All Tweets", response.data);
      setTweets(response.data.data || []);
    } catch (error) {
      console.error("Error fetching tweets:", error.message);
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/tweets",
        { content: tweetContent}
      );
      console.log("Tweet added successfully:", response.data);
      setTweetContent("");
      setTweets([response.data.data, ...tweets]);
    } catch (error) {
      console.error(
        "Error adding tweet:",
        error.response ? error.response.data : error.message
      );
      setError("An unexpected error occurred.");
    }
  };

  const handleDelete = async (tweetId) => {
    try {
      await axios.delete(`http://localhost:8000/api/tweets/${tweetId}`);
      setTweets(tweets.filter((tweet) => tweet._id !== tweetId));
    } catch (error) {
      console.error(
        "Error deleting tweet:",
        error.response ? error.response.data : error.message
      );
      setError("An unexpected error occurred.");
    }
  };

  return (
    <>
      <div className="main-wrapper mb-4">
        <Header />
        <ProfileCover />
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4 user_parent">
              <img className="userimg" src={User} alt="" />
              <h6 className="mt-1 text-primary">Hassan Zandani</h6>
            </div>
            <div className="col-md-8">
              <ProfileStats tweetCount={tweets}/>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 ">
              <div>
                <ul className="text-start mt-4 list-unstyled">
                  <li className="mt-1 fw-bold">@hassan</li>
                  <li className="mt-1 fw-bold">Perth, WA</li>
                  <li className="mt-1 fw-bold">123 123 123</li>
                  <li className="mt-1 text-primary">Joined November 2023</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="addtweet"
                    className="form-label text-start d-block fw-bold text-primary"
                  >
                    Add Tweet
                  </label>
                  <textarea
                    className="form-control"
                    id="addtweet"
                    placeholder="What's happening"
                    value={tweetContent}
                    onChange={(e) => setTweetContent(e.target.value)}
                  ></textarea>
                  <button
                    className="btn btn-primary d-flex mt-3"
                    alt="add"
                    type="submit"
                  >
                    Add
                  </button>
                </div>
              </form>
              <div className="mt-5">
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
                        <TweetCard
                          key={tweet._id}
                          tweet={tweet}
                          onDelete={handleDelete}
                        />
                      ))
                    ) : (
                      <p>No Tweets Found</p>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
              <RightPanel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
