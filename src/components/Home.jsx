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
      {/* If Header is fixed, ensure Carousel has enough top margin in your CSS */}
      {/* <Carousel /> */}

      <Box mt={{ xs: 1, sm: 2 }}>
        <WelcomeAstro />
      </Box>

      <Box mt={{ xs: 2, sm: 3 }}>
        <Services />
      </Box>

      {/* <Awards /> */}
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
        <Typography
          sx={{
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
            fontWeight: "bold",
            textAlign: "center",
            width: "100%",
            mb: { xs: 1.5, sm: 2 },
          }}
          className="header-why"
        >
          <span style={{ color: "#FFF" }}>why</span>{" "}
          <span style={{ color: "#f28c38" }}>choose us</span>
        </Typography>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            width: "100%",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Card 1 */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div variants={cardVariants} whileHover="hover">
                <Box
                  sx={{
                    display: "flex",
                    borderRadius: "20px",
                    padding: { xs: "8px", sm: "10px" },
                    alignItems: "center",
                    justifyContent: { xs: "flex-start", sm: "flex-start" },
                    maxWidth: { xs: "100%", sm: "100%" },
                  }}
                >
                  <Avatar
                    sx={{
                      width: { xs: "4.5rem", sm: "5.5rem", md: "7rem" },
                      height: { xs: "4.5rem", sm: "5.5rem", md: "7rem" },
                      backgroundColor: "#f28c38",
                      flexShrink: 0,
                    }}
                  >
                    <video
                      src={employee}
                      autoPlay
                      muted
                      loop
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Avatar>
                  <Box
                    sx={{
                      alignContent: "center",
                      backgroundColor: "#fff",
                      minHeight: { xs: "3.2rem", sm: "3.5rem" },
                      width: { xs: "100%", sm: "auto", md: "15rem" },
                      borderTopRightRadius: 10,
                      borderBottomRightRadius: 10,
                      ml: { xs: 1.5, sm: -2 },
                      mt: { xs: 0, sm: 0 },
                      px: { xs: 1.5, sm: 2 },
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#1a1a1a",
                        fontSize: { xs: "13px", sm: "15px" },
                      }}
                    >
                      90+ Expert Astrologers
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            {/* Card 2 */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div variants={cardVariants} whileHover="hover">
                <Box
                  sx={{
                    display: "flex",
                    borderRadius: "20px",
                    padding: { xs: "8px", sm: "10px" },
                    alignItems: "center",
                    justifyContent: { xs: "flex-start", sm: "flex-start" },
                    maxWidth: { xs: "100%", sm: "100%" },
                  }}
                >
                  <Avatar
                    sx={{
                      width: { xs: "4.5rem", sm: "5.5rem", md: "7rem" },
                      height: { xs: "4.5rem", sm: "5.5rem", md: "7rem" },
                      backgroundColor: "#f28c38",
                      flexShrink: 0,
                    }}
                  >
                    <video
                      src={time24}
                      autoPlay
                      muted
                      loop
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Avatar>
                  <Box
                    sx={{
                      alignContent: "center",
                      backgroundColor: "#fff",
                      minHeight: { xs: "3.2rem", sm: "3.5rem" },
                      width: { xs: "100%", sm: "auto", md: "16rem" },
                      borderTopRightRadius: 10,
                      borderBottomRightRadius: 10,
                      ml: { xs: 1.5, sm: -2 },
                      mt: { xs: 0, sm: 0 },
                      px: { xs: 1.5, sm: 2 },
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#1a1a1a",
                        fontSize: { xs: "13px", sm: "15px" },
                      }}
                    >
                      24x7, 365 Days Availability
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            {/* Card 3 */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div variants={cardVariants} whileHover="hover">
                <Box
                  sx={{
                    display: "flex",
                    borderRadius: "20px",
                    padding: { xs: "8px", sm: "10px" },
                    alignItems: "center",
                    justifyContent: { xs: "flex-start", sm: "flex-start" },
                    maxWidth: { xs: "100%", sm: "100%" },
                  }}
                >
                  <Avatar
                    sx={{
                      width: { xs: "4.5rem", sm: "5.5rem", md: "7rem" },
                      height: { xs: "4.5rem", sm: "5.5rem", md: "7rem" },
                      backgroundColor: "#f28c38",
                      flexShrink: 0,
                    }}
                  >
                    <video
                      src={team_building}
                      autoPlay
                      muted
                      loop
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Avatar>
                  <Box
                    sx={{
                      alignContent: "center",
                      backgroundColor: "#fff",
                      minHeight: { xs: "3.2rem", sm: "3.5rem" },
                      width: { xs: "100%", sm: "auto", md: "17rem" },
                      borderTopRightRadius: 10,
                      borderBottomRightRadius: 10,
                      ml: { xs: 1.5, sm: -2 },
                      mt: { xs: 0, sm: 0 },
                      px: { xs: 1.5, sm: 2 },
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#1a1a1a",
                        fontSize: { xs: "13px", sm: "15px" },
                      }}
                    >
                      Accurate Remedial Solutions
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Grid>

      <Counter />
      <ServicesCardComponent />
      {/* <Testimonials /> */}
    </div>
  );
};

export default Home;
