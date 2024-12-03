import React from "react";
import styled from "styled-components";
import Frame2 from "./Frame2";  //import for rendering sidebar components
import Frame3 from "./Frame3";
import { useNavigate } from "react-router-dom";


//styled components
const Wrapper = styled.div`
  width: 245px;
  height: 1206px;
  padding: 20px 16px 20px 16px;
  gap: 16px;
  border-right: 1px solid  ${(props) => (props.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(28, 28, 28, 0.1)")};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) =>
    props.mode === "dark" ? "#1C1C1C" : "#fff"}; /* Dynamic background */
  color: ${(props) => (props.mode === "dark" ? "#fff" : "#1C1C1C")}; /* Dynamic text color */
  transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition */
`;

const NameBadge = styled.div`
  width: 100%;
  min-width: 180px;
  height: auto;
  min-height: 32px;
  padding: var(--4);
  gap: var(--8);
  border-radius: var(--8);
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Frame1 = styled.div`
  width: 100%;
  min-width: 180px;
  height: auto;
  min-height: 104px;
  padding: 0px 0px var(--12) 0px;
  gap: var(--4);
  display: flex;
  flex-direction: column;
`;

const ProfilePic = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileName = styled.span`
  margin-left: var(--8);
  font-size: 14px;
  font-weight: 500;
  color: inherit; /* Inherit color from Wrapper */
`;

const Sidebar = ({ mode }) => {

    const navigate = useNavigate();

  return (
    <Wrapper mode={mode}>
      {/* Name Badge */}
      <NameBadge>
        <ProfilePic
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"   //admin profile picture
          alt="Profile"
        />
        <ProfileName>ByeWind</ProfileName>
      </NameBadge>

      {/* Frames */}
      <Frame1>
        <div
          className="textButtonContainer"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
         <div
      style={{
        color: mode === "dark" ? "white" : "#1C1C1C66",
        fontFamily: "'Space Mono', monospace",
        fontSize: "16px",
        background: "transparent",
        border: "2px solid", // Border to mimic button look
        cursor: "pointer",
        padding: "3px 6px",
        fontWeight: "bold",
        transition: "all 0.3s ease", // Smooth hover effect
        display: "inline-block", // Ensures it behaves like a button
        textAlign: "center", // Center the text
        borderRadius: "8px", // Rounded corners
      }}
      onClick={() => navigate("/")} // Navigate to the Order Page
    >
      HomePage
    </div>

          <div
      style={{
        color: mode === "dark" ? "white" : "#1C1C1C66",
        fontFamily: "'Space Mono', monospace",
        fontSize: "16px",
        background: "transparent",
        border: "2px solid", // Border to mimic button look
        cursor: "pointer",
        padding: "3px 6px",
        fontWeight: "bold",
        transition: "all 0.3s ease", // Smooth hover effect
        display: "inline-block", // Ensures it behaves like a button
        textAlign: "center", // Center the text
        borderRadius: "8px", // Rounded corners
      }}
      onClick={() => navigate("/order")} // Navigate to the Order Page
    >
      OrderPage
    </div>
        </div>
        <div style={{ marginLeft: "15px" }}>
          <p
            style={{
              fontSize: "12px",
              color: mode === "dark" ? "#ccc" : "black",
              fontWeight: "500",
            }}
          >
            <span
              style={{
                color: mode === "dark" ? "#777" : "black",
                fontSize: "15px",
              }}
            >
              •
            </span>{" "}
            Overview
          </p>
          <p
            style={{
              fontSize: "12px",
              color: mode === "dark" ? "#ccc" : "black",
              fontWeight: "500",
            }}
          >
            <span
              style={{
                color: mode === "dark" ? "#777" : "black",
                fontSize: "15px",
              }}
            >
              •
            </span>{" "}
            Projects
          </p>
        </div>
        
        {/* rendering sidebar components */}
      </Frame1>
      <Frame2 />
      <Frame3 />
    </Wrapper>
  );
};

export default Sidebar;
