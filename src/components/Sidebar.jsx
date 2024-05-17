import React from "react";
import { Link } from "react-router-dom";
import User from "../assets/images/user.png";

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar py-4">
        <h2 className="text-center fw-bold">Tweet App</h2>
        <div className="mt-4">
          <Link to="/">
            <img className="user_profile" src={User} alt="" />
          </Link>
        </div>
        <div>
          <ul className="list-unstyled p-0 text-start mt-5">
            <li className="px-3 py-3">
              <Link to="/tweets" className="tweet_icon">
                All Tweets
              </Link>
            </li>
            <li className="px-3 py-3">
              <Link to="/add-tweet" className="addtweet_icon">
                Add Tweet
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
