import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline"; // To apply global theme styles
import Button from "@mui/material/Button";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";

const DarkLight = () => {
  const [mode, setMode] = useState("light"); // Theme mode: 'light' or 'dark'

  // Define light and dark themes
  const theme = createTheme({
    palette: {
      mode, // Dynamically set 'light' or 'dark' mode
    },
  });

  // Toggle between light and dark modes
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      {/* Apply baseline styles for dark/light modes */}
      <CssBaseline />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <h1>{mode === "light" ? "Light Mode" : "Dark Mode"}</h1>

        {/* Toggle Button */}
        <Button
          onClick={toggleTheme}
          variant="contained"
          startIcon={
            mode === "light" ? (
              <LightModeTwoToneIcon />
            ) : (
              <DarkModeTwoToneIcon />
            )
          }
          sx={{ marginTop: "16px" }}
        >
          Toggle Theme
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default DarkLight;
