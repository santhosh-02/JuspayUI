import React from "react";
import Header from "./../components/Header";  //importing all main components
import Sidebar from "./../components/Sidebar";
import Notification from "./../components/notificationpanel/Notification";
import Dashboard from "../components/Dashboardcomponents/Dashboard";

const Home = ({ toggleTheme, mode }) => {
  const pageStyle = {
    display: "flex",
    backgroundColor: mode === "dark" ? "#1C1C1C" : "#fff",
  };

  const contentStyle = {
    fontSize: "14px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    lineHeight: "20px",
    textAlign: "left",
    paddingTop: "80px",
    flex: 1,
    padding: "100px 8px 4px 40px",
    opacity: 1,
  };

  return (
    <div style={pageStyle}>
      {/* Pass toggleTheme and mode to Header */}
      <Header toggleTheme={toggleTheme} mode={mode} />
      <Sidebar mode={mode} />

      <Notification />
      <div style={contentStyle}>
        <p>eCommerce</p>
        {/* rendering whole dashboard components */}
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;
