import React from "react";
import User from "../assets/images/user.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-3 px-5">
      <div className="header_dropdown">
        <li class="header_li">
          <div>
            <img className="header_user ms-auto d-block" src={User} alt="User" />
          </div>

          <ul class="submenu-wrapper p-0">
            <li>
              <Link href="">Show All</Link>
            </li>
            <li>
              <Link href="">Economy Cars for Rent</Link>
            </li>
            <li>
              <Link href="">Midsize Rental</Link>
            </li>
            <li>
              <Link href="">Suv</Link>
            </li>
          </ul>
        </li>
      </div>
    </header>
  );
};

export default Header;
