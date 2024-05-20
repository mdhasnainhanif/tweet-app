import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import AddIcon from "../assets/images/icons/plus-white.svg";
import axios from "axios";

const AddTweet = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [tweetContent, setTweetContent] = useState("");
  const [error, setError] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const userId = localStorage.getItem('userid');
  const token = localStorage.getItem('access_token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/tweets",
        { description: tweetContent, userId: userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      console.log("Tweet added successfully:", response.data);
      setTweetContent("");
    } catch (error) {
      console.error("Error adding tweet:", error.response ? error.response.data : error.message);
      setError("An unexpected error occurred.");
    }
  };

  return (
    <div className="main-wrapper">
      <Header openSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <div className="main-content">
        <div className="container">
          <h2 className="mb-3 text-start">Add Tweets</h2>
          <div className="row mt-5">
            <div className="col-md-6 col-12">
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
                    placeholder="Enter Tweet"
                    value={tweetContent}
                    onChange={(e) => setTweetContent(e.target.value)}
                  ></textarea>
                  <Button
                    className="btn btn-primary d-flex mt-3"
                    name="Add"
                    imgClass="filter_invert"
                    imgSrc={AddIcon}
                    imgAlt="add"
                    type="submit"
                  />
                </div>
              </form>
              {error && <p className="text-danger">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTweet;
