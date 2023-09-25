import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import Router from "../Router/Router";
import "./layout.scss";
const Layout = () => {
  return (
    <>
      <div className="layout">
        <div className="content">
          <Navbar />
          <Router className="router" />
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Layout;
