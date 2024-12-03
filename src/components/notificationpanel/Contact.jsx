import React from "react";
import styled from "styled-components";
import Img6 from "./../../assets/contact/IconSet (1).png"; //importing local assets(image) 
import Img7 from "./../../assets/contact/IconSet (2).png";
import Img8 from "./../../assets/contact/IconSet (3).png";
import Img9 from "./../../assets/contact/IconSet (4).png";
import Img10 from "./../../assets/contact/IconSet (5).png";
import Img11 from "./../../assets/contact/IconSet (6).png";
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

const NotificationTitle = styled.span`
  margin-left: var(--8); /* Design token for margin */
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.mode === "dark" ? "white" : "black")}; /* Dynamic title text color */
`;

const Contact = () => {
  const theme = useTheme(); // Get the theme object
  const mode = theme.palette.mode; // Extract the current mode (light or dark)

  return (
    <div>
      <NotificationTitle mode={mode}>Contact</NotificationTitle>

      <NotificationItem>
        <ChannelIcon mode={mode}>
          <img src={Img6} alt="channel-icon" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> 
        </ChannelIcon>
        <NotificationText>
          <ChannelName mode={mode}>Natali Craig</ChannelName>
        </NotificationText>
      </NotificationItem>

      <NotificationItem>
        <ChannelIcon mode={mode}>
          <img src={Img7} alt="channel-icon" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </ChannelIcon>
        <NotificationText>
          <ChannelName mode={mode}>Drew Cano</ChannelName>
        </NotificationText>
      </NotificationItem>

      <NotificationItem>
        <ChannelIcon mode={mode}>
          <img src={Img8} alt="channel-icon" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </ChannelIcon>
        <NotificationText>
          <ChannelName mode={mode}>Orlando Diggs</ChannelName>
        </NotificationText>
      </NotificationItem>

      <NotificationItem>
        <ChannelIcon mode={mode}>
          <img src={Img9} alt="channel-icon" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </ChannelIcon>
        <NotificationText>
          <ChannelName mode={mode}>Andi Lane</ChannelName>
        </NotificationText>
      </NotificationItem>

      <NotificationItem>
        <ChannelIcon mode={mode}>
          <img src={Img10} alt="channel-icon" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </ChannelIcon>
        <NotificationText>
          <ChannelName mode={mode}>Kate Morrison</ChannelName>
        </NotificationText>
      </NotificationItem>

      <NotificationItem>
        <ChannelIcon mode={mode}>
          <img src={Img11} alt="channel-icon" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </ChannelIcon>
        <NotificationText>
          <ChannelName mode={mode}>Koray Okumus</ChannelName>
        </NotificationText>
      </NotificationItem>
    </div>
  );
};

export default Contact;
