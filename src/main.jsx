import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

// Create a custom theme
const theme = createTheme({
  palette: {
    // background: {
    //   default: "#0D0D1F", // Dark background
    // },
    // text: {
    //   primary: "#ffffff", // White text
    // },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline /> {/* Applies global styles */}
    <App />
  </ThemeProvider>
);
