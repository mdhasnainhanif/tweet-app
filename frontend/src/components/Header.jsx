import React from "react";
import User from "../assets/images/user.png";
import LogOut from "../assets/images/icons/log-out.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-3 px-md-5 px-2">
      <div className="header_dropdown">
        {/* <li class="header_li"> */}
        <div className="d-flex">
          <img className="header_user ms-auto d-block" src={User} alt="User" />
          <Link to="/login">
            <img className="ms-3 pointer" src={LogOut} alt="LogOut" />
          </Link>
        </div>

        {/* <ul class="submenu-wrapper p-0">
            <li>
              <Link href="">Show All</Link>
            </li>
            <li>
              <Link href="">Economy</Link>
            </li>
          </ul> */}
        {/* </li> */}
      </div>
    </header>
  );
};

export default Header;
