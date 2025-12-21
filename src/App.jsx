import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../src/router/index.jsx";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { ThemeProvider } from "@emotion/react";
import CustomTheme from "../CustomTheme.jsx";
import bgVideo from "./assets/images/bgImage3.mp4";
import { Provider } from "react-redux";
import store from "../src/components/Admin/Redux/Store.js";

// Lazy-load non-critical parts if possible (e.g., Footer if heavy)
const LazyFooter = lazy(() => import("./components/Footer.jsx"));

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={CustomTheme}>
        <Router>
          <div className="video-background">
            <video
              autoPlay
              muted
              loop
              preload="none" // Delay loading until visible
              playsInline // Better for mobile
            >
              <source src={bgVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <Header />
          <div className="App">
            <Suspense fallback={<div>Loading...</div>}>
              <AppRoutes />
            </Suspense>
          </div>
          <Suspense fallback={<div>Loading Footer...</div>}>
            <LazyFooter />
          </Suspense>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
