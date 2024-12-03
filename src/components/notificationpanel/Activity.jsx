import React from "react";
import styled from "styled-components";
import Img1 from "./../../assets/3D05.png";
import Img2 from "./../../assets/3D08.png";
import Img3 from "./../../assets/Female05.png";
import Img4 from "./../../assets/Male07.png";
import Img5 from "./../../assets/Male11.png";
import { useTheme } from "@mui/material";


//styled components
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
  background-color: ${(props) => (props.mode === "dark" ? "#444" : "#E3F5FF")}; /* Dynamic background color */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px; /* Adjusted to make the icon more visible */
  color: ${(props) => (props.mode === "dark" ? "#fff" : "#555")}; /* Dynamic icon text color */
`;

const NotificationText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1; /* Make the text container take up remaining space */
`;

const ChannelName = styled.div`
  font-size: 12px;
  color: ${(props) => (props.mode === "dark" ? "#fff" : "black")}; /* Dynamic text color */
  font-weight: 500; /* Semi-bold font weight */
  text-align: left; /* Align text to the left */
`;

const LastSeen = styled.div`
  font-size: 10px;
  font-weight: 200;
  color: ${(props) => (props.mode === "dark" ? "#aaa" : "#888")}; /* Subtle color for the last seen text */
`;

const NotificationTitle = styled.span`
  margin-left: var(--8); /* Design token for margin */
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.mode === "dark" ? "#ddd" : "#333")}; /* Dynamic title text color */
`;

const Activity = () => {
  const theme = useTheme(); // Get the theme object
  const mode = theme.palette.mode; // Extract the current mode (light or dark)

  return (
    <div>
      <NotificationTitle mode={mode}>Activity</NotificationTitle>
      {/* using inline css for alignment */}
      <NotificationItem>
        <ChannelIcon mode={mode}>
          <img src={Img1} alt="channel-icon" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> 
        </ChannelIcon> 

        <NotificationText>
          <ChannelName mode={mode}>You have a bug that needs...</ChannelName>
          <LastSeen mode={mode}>Just now</LastSeen>
        </NotificationText>
      </NotificationItem>

      <NotificationItem>
        <ChannelIcon mode={mode}>
          <img src={Img2} alt="channel-icon" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </ChannelIcon>
        <NotificationText>
          <ChannelName mode={mode}>Released a new version</ChannelName>
          <LastSeen mode={mode}>59 minutes ago</LastSeen>
        </NotificationText>
      </NotificationItem>

      <NotificationItem>
        <ChannelIcon mode={mode}>
          <img src={Img3} alt="channel-icon" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </ChannelIcon>
        <NotificationText>
          <ChannelName mode={mode}>Submitted a bug</ChannelName>
          <LastSeen mode={mode}>12 hours ago</LastSeen>
        </NotificationText>
      </NotificationItem>

      <NotificationItem>
        <ChannelIcon mode={mode}>
          <img src={Img4} alt="channel-icon" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </ChannelIcon>
        <NotificationText>
          <ChannelName mode={mode}>Modified A data in Page</ChannelName>
          <LastSeen mode={mode}>Today, 11:59 AM</LastSeen>
        </NotificationText>
      </NotificationItem>

      <NotificationItem>
        <ChannelIcon mode={mode}>
          <img src={Img5} alt="channel-icon" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </ChannelIcon>
        <NotificationText>
          <ChannelName mode={mode}>Deleted a page in Project X</ChannelName>
          <LastSeen mode={mode}>Feb 2, 2023</LastSeen>
        </NotificationText>
      </NotificationItem>
    </div>
  );
};

export default Activity;
