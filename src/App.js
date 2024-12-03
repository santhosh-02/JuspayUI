import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // import react-router-dom for routing pages
import Home from "./pages/Home";   //import to render home and order page 
import Order from "./pages/Order";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [mode, setMode] = useState ("light"); // Theme state

  const theme = createTheme({
    palette: {
      mode, // Dynamically update the theme
    },
  });

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));  //to change dark and light theme dynamically
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Pass toggleTheme and mode to Home */}
          <Route
            path="/"
            element={<Home toggleTheme={toggleTheme} mode={mode} />}  //route to homepage and orderpage
          />
          <Route path="/order" element={<Order  toggleTheme={toggleTheme} mode={mode}  />} />  
        </Routes>   
      </Router>
    </ThemeProvider>
  );
}

export default App;
