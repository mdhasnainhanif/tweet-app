import React from "react";
import TweetCard from "../components/TweetCard";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";


const Tweets = () => {

  return (
    <>
      <div className="main-wraperr">
        <Header />
        <Sidebar />
        <div className="main-content">
          <div className="container">
            <h2 className="mb-3 text-start">Tweets</h2>
            <div className="row mt-5">
              <div className="col-8">
                <TweetCard />
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Tweets;
