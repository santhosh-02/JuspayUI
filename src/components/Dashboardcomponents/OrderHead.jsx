import React from "react";
import styled from "styled-components";
import ChromeReaderModeTwoToneIcon from "@mui/icons-material/ChromeReaderModeTwoTone"; // imported icons from mui icons
import GradeTwoToneIcon from "@mui/icons-material/GradeTwoTone";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import HistoryTwoToneIcon from "@mui/icons-material/HistoryTwoTone";
import NotificationsNoneTwoToneIcon from "@mui/icons-material/NotificationsNoneTwoTone";
import Breadcrumbs from "./../../utilities/Breadcrumps";
import PrimarySearchAppBar from "./../../utilities/searchbar";


//header layout
const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 245px; /* Sidebar width */
  right: 0px; /* Notification panel width */
  height: 60px;
   border-bottom: 1px solid
    ${(props) => (props.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(28, 28, 28, 0.1)")};
  padding: 10px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.mode === "dark" ? "#1C1C1C" : "#fff")};
  color: ${(props) => (props.mode === "dark" ? "#fff" : "#1C1C1C")};
  z-index: 1;
`;


const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const OrderHead = ({ toggleTheme, mode }) => {
  return (
    <HeaderWrapper mode={mode}>
      <IconWrapper>
        <ChromeReaderModeTwoToneIcon />
        <GradeTwoToneIcon />
      </IconWrapper>
      <div className="bread" style={{ marginRight: "250px" }}>
        <Breadcrumbs />
      </div>
      <PrimarySearchAppBar />
      <IconWrapper>


        {/* Toggle Button for Dark/Light Mode */}

        <div onClick={toggleTheme} style={{ cursor: "pointer" }}>
          {mode === "light" ? (
            <LightModeTwoToneIcon />
          ) : (
            <DarkModeTwoToneIcon />
          )}
        </div>
        <HistoryTwoToneIcon />
        <NotificationsNoneTwoToneIcon />
        <ChromeReaderModeTwoToneIcon style={{ marginRight: "8px" }} />
      </IconWrapper>
    </HeaderWrapper>
  );
};

export default OrderHead;
