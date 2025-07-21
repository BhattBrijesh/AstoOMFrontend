import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Grid,
} from "@mui/material"
import img1 from '../assets/images/banner4.jpeg';
import { motion } from "framer-motion";

const WelcomeAstro = () => {
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
    <Box
      className="ast_about_wrapper"
      sx={{ padding: "10px 0", background: "#1a2a4487" }}
    >
      <Box className="container-fluid">
        <Box>
          <Box
            className="ast_heading"
            sx={{ textAlign: "center", marginBottom: "40px" }}
          >
            <Typography variant="h4" component="h1">
              <span style={{ color: "#FFF" }}>Welcome to </span>
              <span style={{ color: "#ff9800" }}>Astro Om Solution</span>
            </Typography>
            <Typography variant="body1" sx={{ color: "#FFF" }}>
              Unlocking the Mysteries of the Cosmos with Astro Om Solution
            </Typography>
          </Box>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: { xs: "wrap", md: "nowrap" },
              padding: "0", // Remove extra padding to avoid white space
            }}
          >
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

              <Grid
                item
                sx={{
                  width: { xs: "100%", md: "30rem" },
                  maxWidth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <motion.div
                  variants={cardVariants}
                  whileHover="hover">

                  <Card
                    sx={{
                      borderRadius: "10px",
                      overflow: "hidden",
                      boxShadow: "none",
                      width: "300px", // Adjusted to match the image width in the provided design
                      height: "520px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={img1}
                      alt="About"
                      sx={{
                        borderRadius: "10px 10px 0 0",
                        width: "100%", // Stretch to full card width
                        height: "400px", // Fixed height to fill image area
                        objectFit: "cover", // Crop to fill, removing white borders
                      }}
                    />
                    <CardContent
                      sx={{
                        background:
                          "linear-gradient(to bottom, #26a69a 0%, #ffca28 100%)",
                        color: "#fff",
                        textAlign: "center",
                        padding: "5px",
                        borderRadius: "0 0 10px 10px",
                        height: "120px", // Adjusted to fit content snugly
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{ color: "#fff", marginBottom: "5px" }}
                      >
                        Consult{" "}
                        <span style={{ fontStyle: "italic" }}>
                          Astro Om Solution
                        </span>
                      </Typography>
                      <Box
                        sx={{
                          background: "#ffca28",
                          color: "#26a69a",
                          padding: "5px",
                          borderRadius: "5px",
                          display: "inline-block",
                        }}
                      >
                        <Typography variant="h6" component="div">
                          Call Now <br /> +91 9417339708
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            </motion.div>
            <Grid
              item
              sx={{
                width: { xs: "100%", md: "40rem" }, // Adjusted for better balance
                padding: { xs: "0 10px", md: "20px 0" },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                className="ast_about_info"
                sx={{
                  paddingLeft: "0",
                  textAlign: "center",
                  maxWidth: "500px", // Limit width for centered text
                }}
              >
                <Typography variant="body1" paragraph sx={{ color: "#FFF" }}>
                  <b>Astro Om Solution a top astrologer in India</b>, with over
                  a decade of experience. He specializes in Vedic astrology and
                  offers solutions for things like love problem solution, love
                  marriage problem, marriage problem solution, husband wife
                  dispute, family problem solution, horoscopes reading and
                  helping with everyday life problems.
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: "#FFF" }}>
                  Astro Om Solution is dedicated to giving you genuine and
                  highly accurate astrology services. People from all over the
                  world trust his services because they are dependable and in
                  line with their beliefs. Many individuals travel from faraway
                  places, including different cities, states, and even
                  countries, to seek his guidance.
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: "#FFF" }}>
                  If you want to ensure a bright future for yourself, reach out
                  to the renowned astrologer Astro Om Solution today.
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: "#FFF" }}>
                  <b>Connect with the Best Astrologer in India:</b>
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: "#FFF" }}>
                  When you require assistance in decoding planetary positions
                  and seeking solutions for your life's challenges, don't
                  hesitate to reach out to Astro Om Solution. Our experienced
                  astrologers in India are committed to providing you with
                  reliable and insightful astrological guidance.
                </Typography>
                <Button variant="contained" color="warning" href="/aboutus">
                  Read More
                </Button>
                <Button variant="contained" color="warning" href="/contactus" sx={{ marginLeft: "30px" }}>
                  Contact Us Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default WelcomeAstro;
