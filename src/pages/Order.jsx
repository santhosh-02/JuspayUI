import React from "react";
import Sidebar from "./../components/Sidebar"; //import sidebar
// import Notification from "./../components/notificationpanel/Notification";
import OrderList from "../components/OrderList";
import OrderHead from "../components/Dashboardcomponents/OrderHead";

const Order = ({ toggleTheme, mode }) => {
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
      <OrderHead toggleTheme={toggleTheme} mode={mode} />
      <Sidebar mode={mode} />

      {/* <Notification /> */}
      <div style={contentStyle}>
        <p>Order List</p>
        {/* rendering whole orderlist components */}
        <OrderList />
      </div>
    </div>
  );
};

export default Order;
