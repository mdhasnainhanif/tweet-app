import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import AddIcon from "../assets/images/icons/plus-white.svg";

const AddTweet = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className="main-wraperr">
      <Header openSidebar={toggleSidebar}/>
        <Sidebar isOpen={isSidebarOpen} />
        <div className="main-content">
          <div className="container">
            <h2 className="mb-3 text-start">Add Tweets</h2>
            <div className="row mt-5">
              <div className="col-md-6 col-12">
                <form>
                  <div class="mb-3">
                    <label
                      for="addtweet"
                      class="form-label text-start d-block fw-bold text-primary"
                    >
                      Add Tweet
                    </label>
                    <textarea
                      class="form-control"
                      id="addtweet"
                      placeholder="Enter Tweet"></textarea>
                    <Button
                      className="btn btn-primary d-flex mt-3"
                      name="Add"
                      imgClass="filter_invert"
                      imgSrc={AddIcon}
                      imgAlt="add"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTweet;
