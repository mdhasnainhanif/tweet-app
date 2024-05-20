import React from "react";
import { Link } from "react-router-dom";
import User from "../assets/images/user.png";

const Sidebar = ({ isOpen }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <aside className={`${isOpen ? 'open ' : ''}sidebar py-4`}>
        <h2 className="text-center fw-bold">Tweet App</h2>
        <div className="mt-4">
          <Link to="/">
            <img className="user_profile" src={User} alt="User Profile" />
          </Link>
        </div>
        <div>
          <p className="mt-3">Welcome <br /> <strong>{user ? `${user.firstName} ${user.lastName}` : 'User'}</strong></p>
          <ul className="list-unstyled p-0 text-start mt-5">
            <li>
              <Link to="/tweets" className="tweet_icon d-block w-100 px-3 py-3">
                All Tweets
              </Link>
            </li>
            <li>
              <Link to="/add-tweet" className="addtweet_icon d-block w-100 px-3 py-3">
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
