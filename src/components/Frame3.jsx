import React, { useState } from "react";
import styled from "styled-components";
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone'; //import mui icons 
import RememberMeTwoToneIcon from '@mui/icons-material/RememberMeTwoTone';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';
import WebTwoToneIcon from '@mui/icons-material/WebTwoTone';
import QuestionAnswerTwoToneIcon from '@mui/icons-material/QuestionAnswerTwoTone';
import { useTheme } from '@mui/material/styles'; // Import the theme hook

//styled components
const Container = styled.div`
  display: flex;
  flex-direction: column; // Vertical layout
  width: 180px;
  padding: 8px 12px; // Adjust as needed
  gap: 4px; // Space between items
`;

const Item = styled.div`
  display: flex;
  align-items: center; // Vertically center content
  padding: 8px; // Padding inside the box
  gap: 8px; // Space between icon and text
  border-radius: 8px; // Rounded corners
  position: relative; // Required for bar positioning
  background: ${(props) => (props.isActive ? "rgba(28, 28, 28, 0.1)" : "none")}; // Highlight active item
  cursor: pointer;
  transition: background 0.2s ease-in-out; // Smooth transition for hover

  &:hover {
    background: rgba(28, 28, 28, 0.05); // Hover background color
  }

  &:hover::after {
    content: ""; // Black bar element
    position: absolute;
    top: 0;
    right: 100;
    left: 0; // Position the bar to the right
    height: 100%;
    width: 5px; // Width of the black bar
    background: black; // Black bar color
    border-radius: 8px 0 0 8px; // Rounded corners on the right
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Text = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => (props.theme.palette.mode === "dark" ? "white" : "black")}; // Dynamic text color
`;

const SubMenu = styled.div`
  padding-left: 20px; // Indent sub-menu
  display: ${(props) => (props.isOpen ? "block" : "none")}; // Show/hide submenu
`;

const SubItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  gap: 8px;
  cursor: pointer;
  background: ${(props) => (props.isActive ? "rgba(28, 28, 28, 0.1)" : "none")};
  border-radius: 8px;

  &:hover {
    background: rgba(28, 28, 28, 0.05);
  }
`;

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null); // Active main item
  const [submenuOpen, setSubmenuOpen] = useState(false); // Toggle submenu
  const theme = useTheme(); // Access the current theme

  const toggleSubMenu = () => setSubmenuOpen(!submenuOpen);

  return (
    <div>
      {/* Title above the menu */}
      <div
        className="textButton"
        style={{
          color: theme.palette.mode === "dark" ? "white" : "grey", // Title text color based on theme
          fontFamily: "'Space Mono', monospace", // Font family
          fontSize: "16px", // Font size
          background: "transparent", // Transparent background
          border: "none", // No border
          cursor: "pointer", // Pointer cursor for interaction
          padding: "5px 20px 10px 5px", // Padding around text
          fontWeight: "bold", // Bold font weight
        }}
        onClick={() => alert("Recently clicked!")}
      >
        Pages
      </div>

      {/* Sidebar items */}
      <Container>
        {/* Item with submenu */}
        <Item
          isActive={activeItem === "courses"}
          onClick={() => {
            setActiveItem("courses");
            toggleSubMenu(); // Toggle submenu visibility when clicked
          }}
        >
          <IconContainer>
            <KeyboardArrowRightTwoToneIcon style={{ fontSize: "20px" }} />
            <RememberMeTwoToneIcon style={{ fontSize: "20px" }} />
            <Text theme={theme}>User Profile</Text>
          </IconContainer>
        </Item>

        {/* Submenu items */}
        <SubMenu isOpen={submenuOpen}>
          <SubItem isActive={activeItem === "subitem1"} onClick={() => setActiveItem("subitem1")}>
            <Text theme={theme}>Overview</Text>
          </SubItem>
          <SubItem isActive={activeItem === "subitem2"} onClick={() => setActiveItem("subitem2")}>
            <Text theme={theme}>Projects</Text>
          </SubItem>
          <SubItem isActive={activeItem === "subitem3"} onClick={() => setActiveItem("subitem3")}>
            <Text theme={theme}>Campaigns</Text>
          </SubItem>
          <SubItem isActive={activeItem === "subitem4"} onClick={() => setActiveItem("subitem4")}>
            <Text theme={theme}>Documents</Text>
          </SubItem>
          <SubItem isActive={activeItem === "subitem5"} onClick={() => setActiveItem("subitem5")}>
            <Text theme={theme}>Followers</Text>
          </SubItem>
        </SubMenu>

        <Item isActive={activeItem === "default"} onClick={() => setActiveItem("default")}>
          <IconContainer>
            <KeyboardArrowRightTwoToneIcon style={{ fontSize: "20px" }} />
            <BadgeTwoToneIcon style={{ fontSize: "20px" }} />
            <Text theme={theme}>Account</Text>
          </IconContainer>
        </Item>

        <Item isActive={activeItem === "ecommerce"} onClick={() => setActiveItem("ecommerce")}>
          <IconContainer>
            <KeyboardArrowRightTwoToneIcon style={{ fontSize: "20px" }} />
            <GroupsTwoToneIcon style={{ fontSize: "20px" }} />
            <Text theme={theme}>Corporate</Text>
          </IconContainer>
        </Item>

        <Item isActive={activeItem === "project"} onClick={() => setActiveItem("project")}>
          <IconContainer>
            <KeyboardArrowRightTwoToneIcon style={{ fontSize: "20px" }} />
            <WebTwoToneIcon style={{ fontSize: "20px" }} />
            <Text theme={theme}>Blog</Text>
          </IconContainer>
        </Item>
        
        <Item isActive={activeItem === "social"} onClick={() => setActiveItem("social")}>
          <IconContainer>
            <KeyboardArrowRightTwoToneIcon style={{ fontSize: "20px" }} />
            <QuestionAnswerTwoToneIcon style={{ fontSize: "20px" }} />
            <Text theme={theme}>Social</Text>
          </IconContainer>
        </Item>
      </Container>
    </div>
  );
};

export default Sidebar;
