import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import ProfileCover from "../components/ProfileCover";

const Home = () => {


  const [tweetsCount, setTweetsCount] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTweets = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8000/api/tweets/alltweets", { withCredentials: true });
        console.log("All Tweets", response.data);
        setTweetsCount(response.data.data);
      } catch (error) {
        console.error("Error fetching tweets:", error.message);
        setError("An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchTweets();
  }, []);


  // const [isSidebarOpen, setSidebarOpen] = useState(true);

  // const toggleSidebar = () => {
  //   setSidebarOpen(!isSidebarOpen);
  // };

  return (
    <>
      <div className="main-wraperr">
        <Header />
        <ProfileCover/>
        {/* openSidebar={toggleSidebar} */}
        {/* <Sidebar isOpen={isSidebarOpen} /> */}
        <div className="main-content"> 
          <div className="row">
            <div className="col-md-4">
              {/* <div className="count_card bg-primary px-4 py-3 rounded ">
                <h4 className="text-light text-start">Tweets Count</h4>
                {
                  loading ? (
                    <div className="text-center text-light">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
                  ) : (
                    <h5 className="text-light text-start mt-3">{tweetsCount?.length}</h5>
                  )
                }
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
