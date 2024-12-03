import React from "react";
import styled from "styled-components";
import BugReportIcon from "@mui/icons-material/BugReport";  // importing icons from mui
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SensorsIcon from "@mui/icons-material/Sensors";
import { useTheme } from "@mui/material";

// styled component
const NotificationItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 16px; /* Space between the icon and the text */
  justify-content: flex-start; /* Align items to the left */
  width: 100%; /* Ensure the items take up the full width */
  box-sizing: border-box; /* Include padding in the width */
`;

const ChannelIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%; /* Circular icon */
  background-color: #e3f5ff; /* Placeholder background color */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px; /* Adjusted to make the icon more visible */
  color:#555;
`;

const NotificationText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1; /* Make the text container take up remaining space */
`;

const ChannelName = styled.div`
  font-size: 12px;
  color: ${(props) => (props.mode === "dark" ? "#fff" : "black")}; /* Dynamic text color based on dark or light mode */
  font-weight: 500; /* Semi-bold font weight */
  text-align: left; /* Align text to the left */
`;

const LastSeen = styled.div`
  font-size: 10px;
  font-weight: 200;
  color: #888; /* Subtle color for the last seen text */
`;

const NotificationPanel = () => {
  const theme = useTheme(); // Get the theme object
  const mode = theme.palette.mode; // Get the current mode (light/dark)

  return (
    <div>
      {/* mentioned user as channel here */}
      <NotificationItem>
        <ChannelIcon >
          <BugReportIcon style={{ fontSize: "18px" }} />
        </ChannelIcon>
        <NotificationText>
          <ChannelName mode={mode}>You have a bug that needs...</ChannelName>
          <LastSeen>Just now</LastSeen>
        </NotificationText>
      </NotificationItem>

      <NotificationItem>
        <ChannelIcon >
          <PersonOutlineIcon style={{ fontSize: "18px" }} />
        </ChannelIcon>
        <NotificationText>
          <ChannelName mode={mode}>New user registered</ChannelName>
          <LastSeen>59 minutes ago</LastSeen>
        </NotificationText>
      </NotificationItem>

      <NotificationItem>
        <ChannelIcon >
          <BugReportIcon style={{ fontSize: "18px" }} />
        </ChannelIcon>
        <NotificationText>
          <ChannelName mode={mode}>You have a bug that needs...</ChannelName>
          <LastSeen>12 hours ago</LastSeen>
        </NotificationText>
      </NotificationItem>

      <NotificationItem>
        <ChannelIcon >
          <SensorsIcon style={{ fontSize: "18px" }} />
        </ChannelIcon>
        <NotificationText>
          <ChannelName mode={mode}>Andi Lane subscribed to you</ChannelName>
          <LastSeen>Today, 11:59AM</LastSeen>
        </NotificationText>
      </NotificationItem>
    </div>
  );
};

export default NotificationPanel;
