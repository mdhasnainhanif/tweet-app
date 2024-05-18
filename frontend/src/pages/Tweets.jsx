import React from "react";
import TweetCard from "../components/TweetCard";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import AddIcon from "../assets/images/icons/plus-white.svg";

const Tweets = () => {
  return (
    <>
      <div className="main-wraperr">
        <Header />
        <Sidebar />
        <div className="main-content">
          <div className="container">
            <div className="row align-items-center mb-3">
              <div className="col-8 d-flex align-items-center justify-content-between">
                <h2 className="text-start mb-0">Tweets</h2>
                <Link to="/add-tweet">
                  <Button name="Add Tweet" className="btn btn-primary" imgClass="filter_invert" imgSrc={AddIcon} imgAlt="add"/>
                </Link>
              </div>
            </div>
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
