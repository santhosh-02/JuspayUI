import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from '@mui/material';
import Notification1 from "./NotificationPanel.jsx";
import Activity from "./Activity.jsx";
import Contact from "./Contact.jsx";

// Styled components
const Wrapper = styled.div`
  width: ${(props) => (props.isCollapsed ? "50px" : "300px")};
  height: 1206px;
  padding: ${(props) => (props.isCollapsed ? "20px 8px" : "20px 16px")};
  gap: 16px;
  border-left: 1px solid ${(props) => (props.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(28, 28, 28, 0.1)")};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isCollapsed ? "center" : "left")};
  background-color: ${(props) =>
    props.mode === "dark" ? "#1C1C1C" : "#fff"}; /* Dynamic background */
  color: ${(props) => (props.mode === "dark" ? "#fff" : "black")}; /* Dynamic text color */
  transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition */
  position: absolute;
  right: 0;
  transition: all 0.3s ease-in-out;
`;
//style for title
const NotificationTitle = styled.span`
  margin-left: ${(props) => (props.isCollapsed ? "0" : "var(--8)")};
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.mode === "dark" ? "#e0e0e0" : "#333")}; /* Dynamic text color */
  display: ${(props) => (props.isCollapsed ? "none" : "block")};
`;

const Notification = () => {
  const [isCollapsed] = useState(false); // useState hook is used to define state of collapsing notification

  const theme = useTheme(); // For accessing the current theme (light or dark)

  

  return (
    <Wrapper isCollapsed={isCollapsed} mode={theme.palette.mode}>
     
      <NotificationTitle isCollapsed={isCollapsed} mode={theme.palette.mode}>
        Notification
      </NotificationTitle>

     {/* Rendering of notification Components to notification */}
      {!isCollapsed && (
        <>
          <Notification1 />
          <Activity />
          <Contact />
        </>
      )}
    </Wrapper>
  );
};

export default Notification;
