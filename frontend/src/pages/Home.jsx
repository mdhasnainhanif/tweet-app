import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Home = () => {

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
          <div className="row">
            <div className="col-md-4">
              <div className="count_card bg-primary px-4 py-3 rounded ">
                <h4 className="text-light text-start">Tweets Count</h4>
                <h5 className="text-light text-start mt-3">01</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
