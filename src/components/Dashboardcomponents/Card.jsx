import React from "react";
import Card from "@mui/material/Card";  //import card component
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles"; // Import useTheme and styled component
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

// Custom styled card
const StyledCard = styled(Card)(() => ({
  width: "100%", // Fill available space
  maxWidth: "202px", // Fixed width for the card
  minWidth: "200px", // Minimum width
  height: "auto", // Height adjusts based on content
  minHeight: "112px", // Minimum height
  padding: "4px", // Padding inside the card
  gap: "2px", // Space between children
  borderRadius: "16px", // Rounded corners
  boxSizing: "border-box", // Include padding in total size
}));

// Container for the card grid
const GridContainer = styled("div")(() => ({
  display: "grid",  //using grid
  gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
  gap: "12px", // Space between rows and columns
  justifyContent: "center",
  alignItems: "center",
  "& > :nth-child(-n+2)": {
    marginRight: "10px",   //align items as 2rows and 2column
  },
}));

export default function CardGrid() {
  const theme = useTheme(); // Get the current theme

  // Dynamic text color for dark and light theme
  const textColor = theme.palette.mode === "dark" ? "#000" : "black";
  const textColor1 = theme.palette.mode === "dark" ? "white" : "#000";
 

  return (
    //using GridContainer
    <GridContainer>

      {/* Card 1 - Customers*/}
      <StyledCard style={{ backgroundColor: "#E3F5FF" }}>
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            style={{
              textAlign: "left",
              fontSize: "14px",
              fontWeight: "600",
              fontFamily: "Inter",
              marginBottom: "14px",
              color: textColor, // Dynamic text color
            }}
          >
            Customers
          </Typography>
          <Typography
            variant="h5"
            component="div"
            style={{
              textAlign: "left",
              fontSize: "24px",
              fontWeight: "600",
              fontFamily: "Inter",
              color: textColor, // Dynamic text color
            }}
          >
            3,781
            <span
              style={{
                textAlign: "right",
                fontSize: "12px",
                fontWeight: "400",
                fontFamily: "Inter",
                marginLeft: "48px",
                alignItems: "center",
                color: textColor, // Dynamic sub-text color
              }}
            >
              +11.01%
              <TrendingUpIcon
                style={{
                  fontSize: "12px",
                  alignItems: "baseline",
                  marginLeft: "4px",
                  fontWeight: "bold",
                }}
              />
            </span>
          </Typography>
        </CardContent>
      </StyledCard>

      {/* Card 2 - Orders */}
      <StyledCard
        style={{
          backgroundColor: theme.palette.mode === "dark" ? "#FFFFFF0D" : "#F7F9FB", // Dark theme for dark mode, light for light mode
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            style={{
              textAlign: "left",
              fontSize: "14px",
              fontWeight: "600",
              fontFamily: "Inter",
              marginBottom: "14px",
              color: textColor1, // Dynamic text color
            }}
          >
            Orders
          </Typography>
          <Typography
            variant="h5"
            component="div"
            style={{
              textAlign: "left",
              fontSize: "24px",
              fontWeight: "600",
              fontFamily: "Inter",
              color: textColor1, // Dynamic text color
            }}
          >
            1,219
            <span
              style={{
                textAlign: "right",
                fontSize: "12px",
                fontWeight: "400",
                fontFamily: "Inter",
                marginLeft: "48px",
                alignItems: "center",
                color: textColor1, // Dynamic sub-text color
              }}
            >
              -0.03%
              <TrendingUpIcon
                style={{
                  fontSize: "12px",
                  alignItems: "baseline",
                  marginLeft: "8px",
                  fontWeight: "bold",
                }}
              />
            </span>
          </Typography>
        </CardContent>
      </StyledCard>

      {/* Card 3 - Revenue  */}
      <StyledCard
        style={{
          backgroundColor: theme.palette.mode === "dark" ? "#FFFFFF0D" : "#F7F9FB", // Dark theme for dark mode, light for light mode
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            style={{
              textAlign: "left",
              fontSize: "14px",
              fontWeight: "600",
              fontFamily: "Inter",
              marginBottom: "14px",
              color: textColor1, // Dynamic text color
            }}
          >
            Revenue
          </Typography>
          <Typography
            variant="h5"
            component="div"
            style={{
              textAlign: "left",
              fontSize: "24px",
              fontWeight: "600",
              fontFamily: "Inter",
              color: textColor1, // Dynamic text color
            }}
          >
            $695
            <span
              style={{
                textAlign: "right",
                fontSize: "12px",
                fontWeight: "400",
                fontFamily: "Inter",
                marginLeft: "48px",
                alignItems: "center",
                color: textColor1, // Dynamic sub-text color
              }}
            >
              +15.03%
              <TrendingUpIcon
                style={{
                  fontSize: "12px",
                  alignItems: "baseline",
                  marginLeft: "8px",
                  fontWeight: "bold",
                }}
              />
            </span>
          </Typography>
        </CardContent>
      </StyledCard>

      {/* Card 4 - Growth  */}
      <StyledCard style={{ backgroundColor: "#E5ECF6" }}>
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            style={{
              textAlign: "left",
              fontSize: "14px",
              fontWeight: "600",
              fontFamily: "Inter",
              marginBottom: "14px",
              color: textColor, // Dynamic text color
            }}
          >
            Growth
          </Typography>
          <Typography
            variant="h5"
            component="div"
            style={{
              textAlign: "left",
              fontSize: "24px",
              fontWeight: "600",
              fontFamily: "Inter",
              color: textColor, // Dynamic text color
            }}
          >
            30%
            <span
              style={{
                textAlign: "right",
                fontSize: "12px",
                fontWeight: "400",
                fontFamily: "Inter",
                marginLeft: "48px",
                alignItems: "center",
                color: textColor, // Dynamic sub-text color
              }}
            >
              +6.08%
              <TrendingUpIcon
                style={{
                  fontSize: "12px",
                  alignItems: "baseline",
                  marginLeft: "8px",
                  fontWeight: "bold",
                }}
              />
            </span>
          </Typography>
        </CardContent>
      </StyledCard>

    </GridContainer>
  );
}
