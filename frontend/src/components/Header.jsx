import React from "react";
import User from "../assets/images/user.jpg";
import Menu from "../assets/images/icons/menu.svg";
import LogOut from "../assets/images/icons/log-out.svg";
import { useNavigate } from "react-router-dom";

const Header = ({ openSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <header className="py-3 px-md-5 px-2">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h3 className="ms-0 fw-bold">Tweet App</h3>
          </div>
          <div className="d-flex">
            <div>
              <img
                className="header_user ms-auto d-block"
                src={User}
                alt="User"
              />
            </div>
            <div>
              <img
                className="ms-3 pointer"
                src={LogOut}
                alt="LogOut"
                onClick={handleLogout}
              />
            </div>
            <div className="d-block d-md-none ms-2">
              <img onClick={openSidebar} src={Menu} alt="Menu" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
