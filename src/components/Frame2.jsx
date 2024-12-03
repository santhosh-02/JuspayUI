import React from "react";
import styled from "styled-components";
import DonutSmallTwoToneIcon from "@mui/icons-material/DonutSmallTwoTone";  //import mui icons
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import ImportContactsTwoToneIcon from "@mui/icons-material/ImportContactsTwoTone";
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import { useTheme } from '@mui/material/styles'; // To access the current theme

//styled component
const Container = styled.div`
  display: flex;
  flex-direction: column; // Vertical layout
  width: 180px;
  padding: 8px 12px; // Adjust as needed
  gap: 4px; // Space between items
`;

// hovereffects
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
  justify-content: flex-start; // Align the icon and text to the left
  gap: 8px; // Space between bar and icon
`;

const Text = styled.span`
  font-size: 12px;
  font-weight: 500; // Semi-bold font weight
  text-align: center; // Center the text
  color: ${(props) => (props.theme.palette.mode === "dark" ? "white" : "black")}; // Dynamic text color based on theme
`;

const CustomComponent = () => {
  const theme = useTheme(); // Use of dark/light mode

  return (
    <div>
      {/* Title above the menu */}
      <div
      className="textButton"
      style={{
        color: theme.palette.mode === "dark" ? "white" : "grey", // Dynamic color based on theme
        fontFamily: "'Space Mono', monospace", // Font family
        fontSize: "16px", // Font size
        background: "transparent", // Transparent background
        border: "none", // No border
        cursor: "pointer", // Pointer cursor for interaction
        padding: "10px 20px 10px 5px", // Padding around text
        fontWeight: "bold", // Bold font weight
      }}
      onClick={() => alert("Recently clicked!")}
    >
      Dashboard
    </div>

      {/* Sidebar items */}
      <Container>
        {/* First item (Active) */}
        <Item isActive>
          <IconContainer>
            <DonutSmallTwoToneIcon style={{ fontSize: "20px" }} />
            <Text theme={theme}>Default</Text>
          </IconContainer>
        </Item>

        {/* Second item */}
        <Item>
          <IconContainer>
            <KeyboardArrowRightTwoToneIcon style={{ fontSize: "20px" }} />
            <LocalMallOutlinedIcon style={{ fontSize: "20px" }} />
            <Text theme={theme}>e-commerce</Text>
          </IconContainer>
        </Item>

        {/* Third item */}
        <Item>
          <IconContainer>
            <KeyboardArrowRightTwoToneIcon style={{ fontSize: "20px" }} />
            <FolderOpenOutlinedIcon style={{ fontSize: "20px" }} />
            <Text theme={theme}>Project</Text>
          </IconContainer>
        </Item>

        {/* Fourth item */}
        <Item>
          <IconContainer>
            <KeyboardArrowRightTwoToneIcon style={{ fontSize: "20px" }} />
            <ImportContactsTwoToneIcon style={{ fontSize: "20px" }} />
            <Text theme={theme}>Online course</Text>
          </IconContainer>
        </Item>
      </Container>
    </div>
  );
};

export default CustomComponent;
