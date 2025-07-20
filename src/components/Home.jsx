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
    document.title = "OM Astro Solution";
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
        ease: "easeOut"
      }
    }
  };
  return (
    <div>

      <Carousel />
      <div style={{ marginTop: "12px" }}>
        <WelcomeAstro />
      </div>
      <div style={{ marginTop: "12px" }}>
        <Services />
      </div>
      {/* <Awards /> */}
      <ZodiacSigns />
      <Grid mt={2} mb={3} p={2} sx={{ background: "#1a2a4487" }}>
        <Typography
          sx={{
            fontSize: "3rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
          className="header-why"

        >
          <span style={{ color: "#FFF" }}>why</span>  <span style={{ color: "#f28c38" }}>choose us</span>
        </Typography>
        <motion.div variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}>

          <Grid sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <motion.div
              variants={cardVariants}
              whileHover="hover">

              <Grid sx={{ display: "flex", justifyContent: "space-evenly" }}>
                <Grid
                  sx={{
                    display: "flex",
                    // backgroundColor: "#f5f5f5",
                    borderRadius: "20px",
                    padding: "10px",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      width: "7rem",
                      height: "7rem",

                      backgroundColor: "#f28c38",
                    }}
                  >
                    <video
                      src={employee}
                      autoPlay
                      muted
                      loop
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </Avatar>
                  <Grid
                    sx={{
                      alignContent: "center",
                      backgroundColor: "#fff",
                      height: "4rem",
                      width: "15rem",
                      borderTopRightRadius: 10,
                      borderBottomRightRadius: 10,
                    }}
                    ml={-2}
                  >
                    <Typography
                      ml={3}
                      sx={{
                        alignContent: "center",
                        color: "#1a1a1a", // Dark text color from the image
                        fontSize: "16px", // Adjusted font size
                      }}
                    >
                      90+ Expert Astrologers
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </motion.div>
            <motion.div
              variants={cardVariants}
              whileHover="hover">
              <Grid sx={{ display: "flex", justifyContent: "space-evenly" }}>
                <Grid
                  sx={{
                    display: "flex",
                    // backgroundColor: "#f5f5f5",
                    borderRadius: "20px",
                    padding: "10px",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      width: "7rem",
                      height: "7rem",

                      backgroundColor: "#f28c38",
                    }}
                  >
                    <video
                      src={time24}
                      autoPlay
                      muted
                      loop
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </Avatar>
                  <Grid
                    sx={{
                      alignContent: "center",
                      backgroundColor: "#fff",
                      height: "4rem",
                      width: "16rem",
                      borderTopRightRadius: 10,
                      borderBottomRightRadius: 10,
                    }}
                    ml={-2}
                  >
                    <Typography
                      ml={3}
                      sx={{
                        alignContent: "center",
                        color: "#1a1a1a", // Dark text color from the image
                        fontSize: "16px", // Adjusted font size
                      }}
                    >
                      24x7, 365 Days Availability
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </motion.div>
            <motion.div
              variants={cardVariants}
              whileHover="hover">
              <Grid sx={{ display: "flex", justifyContent: "space-evenly" }}>
                <Grid
                  sx={{
                    display: "flex",
                    // backgroundColor: "#f5f5f5",
                    borderRadius: "20px",
                    padding: "10px",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      width: "7rem",
                      height: "7rem",

                      backgroundColor: "#f28c38",
                    }}
                  >
                    <video
                      src={team_building}
                      autoPlay
                      muted
                      loop
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </Avatar>
                  <Grid
                    sx={{
                      alignContent: "center",
                      backgroundColor: "#fff",
                      height: "4rem",
                      width: "17rem",
                      borderTopRightRadius: 10,
                      borderBottomRightRadius: 10,
                    }}
                    ml={-2}
                  >
                    <Typography
                      ml={3}
                      sx={{
                        alignContent: "center",
                        color: "#1a1a1a", // Dark text color from the image
                        fontSize: "16px", // Adjusted font size
                      }}
                    >
                      Accurate Remedial Solutions
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </motion.div>
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
