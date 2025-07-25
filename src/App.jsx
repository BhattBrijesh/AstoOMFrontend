import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../src/router/index.jsx";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { ThemeProvider } from "@emotion/react";
import CustomTheme from "../CustomTheme.jsx";
import bgVideo from "./assets/images/bgImage3.mp4";
function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <Router>
        <div className="video-background">
          <video autoPlay muted loop>
            <source src={bgVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Header />
        <div className="App">
          <AppRoutes />
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
