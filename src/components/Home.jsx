import React, { useEffect } from "react";
import Carousel from "../components/Carousel";
import ZodiacSigns from "../components/ZodiacSigns";
import Services from "../components/Services";
import Counter from "../components/Counter";
import Awards from "../components/Awards";
import Testimonials from "../components/Testimonials";
import Header from "./Header";
import Footer from "./Footer";
import ServicesCardComponent from "./ServicesCardComponent";
import WelcomeAstro from "./WelcomeAstro";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import employee from "../assets/images/animation/success.mp4";
import team_building from "../assets/images/animation/team-building.mp4";
import time24 from "../assets/images/animation/24-hours.mp4";
import "../components/css/Home.css";
import { motion } from "framer-motion";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Home = () => {
  useEffect(() => {
    document.title = "Astro Om Solution";
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    hover: {
      y: -15,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const imageHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      {/* Your existing content */}

      <WelcomeAstro />

      <Services />

      <ZodiacSigns />

      {/* WHY CHOOSE US SECTION */}
      <Grid
        container
        mt={{ xs: 2, sm: 3 }}
        mb={{ xs: 2, sm: 3 }}
        px={{ xs: 1, sm: 2 }}
        py={{ xs: 2, sm: 3 }}
        sx={{ background: "#1a2a4487" }}
        justifyContent="center"
      >
        {/* ... your existing Why Choose Us content ... */}
      </Grid>

      <Counter />
      <ServicesCardComponent />

      {/* === STICKY PHONE BUTTON (Bottom Center) === */}
      <Box
        sx={{
          position: "fixed",
          bottom: { xs: 16, sm: 24 },
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1300,
        }}
      >
        <a href="tel:+9417339708" style={{ textDecoration: "none" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#28a745", // Green
              color: "white",
              px: { xs: 2, sm: 3 },
              py: { xs: 1.2, sm: 1.5 },
              borderRadius: 50,
              boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#218838",
                transform: "scale(1.05)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <PhoneIcon sx={{ mr: 1, fontSize: { xs: 20, sm: 24 } }} />
            +91 9417339708
          </Box>
        </a>
      </Box>

      {/* === STICKY WHATSAPP ICON (Bottom Right) === */}
      <Box
        sx={{
          position: "fixed",
          bottom: { xs: 16, sm: 24 },
          right: { xs: 16, sm: 24 },
          zIndex: 1300,
        }}
      >
        <a
          href="https://wa.me/9417339708"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Box
            sx={{
              width: { xs: 56, sm: 64 },
              height: { xs: 56, sm: 64 },
              backgroundColor: "#25D366",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
              "&:hover": {
                backgroundColor: "#128C7E",
                transform: "scale(1.1)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <WhatsAppIcon
              sx={{ fontSize: { xs: 32, sm: 36 }, color: "white" }}
            />
          </Box>
        </a>
      </Box>
    </div>
  );
};

export default Home;
