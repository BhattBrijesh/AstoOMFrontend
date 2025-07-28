import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  IconButton,
  List,
  ListItem,
  Avatar,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import Facebook from "../assets/images/animation/icons8-facebook.gif";
import Instagram from "../assets/images/animation/icons8-instagram.gif";
import Whatsapp from "../assets/images/animation/icons8-whatsapp.gif";
import Contact from "../assets/images/animation/icons8-contact-us.gif";

const Footer = () => {
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
      y: -10,
      boxShadow: "0 15px 30px -12px rgba(0, 0, 0, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      mt={1}
      sx={{
        background: "#1a2a4487",
        color: "#f0f4f8",
        p: { xs: 2, sm: 3 },
      }}
    >
      <Container maxWidth="lg">
        {/* Social Media Icons */}
        <Grid container justifyContent="center" mb={3}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <motion.div variants={cardVariants} whileHover="hover">
              <IconButton
                href="https://www.facebook.com/profile.php?id=100069020956273"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ p: 0 }}
                aria-label="Facebook link"
              >
                <Avatar
                  sx={{
                    width: { xs: 40, sm: 50 },
                    height: { xs: 40, sm: 50 },
                    background: "transparent",
                  }}
                >
                  <img
                    src={Facebook}
                    alt="Facebook icon"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Avatar>
              </IconButton>
            </motion.div>
            <motion.div variants={cardVariants} whileHover="hover">
              <IconButton
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ p: 0 }}
                aria-label="Instagram link"
              >
                <Avatar
                  sx={{
                    width: { xs: 40, sm: 50 },
                    height: { xs: 40, sm: 50 },
                    background: "transparent",
                  }}
                >
                  <img
                    src={Instagram}
                    alt="Instagram icon"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Avatar>
              </IconButton>
            </motion.div>
            <motion.div variants={cardVariants} whileHover="hover">
              <IconButton
                href="https://api.whatsapp.com/send?phone=919417339708&text=I'd%20like%20to%20know%20more%20about%20your%20services.%20Please%20contact%20me"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ p: 0 }}
                aria-label="WhatsApp link"
              >
                <Avatar
                  sx={{
                    width: { xs: 40, sm: 50 },
                    height: { xs: 40, sm: 50 },
                    background: "transparent",
                  }}
                >
                  <img
                    src={Whatsapp}
                    alt="WhatsApp icon"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Avatar>
              </IconButton>
            </motion.div>
            <motion.div variants={cardVariants} whileHover="hover">
              <IconButton
                href="tel:+919417339708"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ p: 0 }}
                aria-label="Contact phone link"
              >
                <Avatar
                  sx={{
                    width: { xs: 40, sm: 50 },
                    height: { xs: 40, sm: 50 },
                    background: "transparent",
                  }}
                >
                  <img
                    src={Contact}
                    alt="Contact icon"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Avatar>
              </IconButton>
            </motion.div>
          </motion.div>
        </Grid>

        {/* Footer Links */}
        <Grid
          container
          spacing={3}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "left", sm: "flex-start" },
            textAlign: { xs: "left", sm: "left" },
          }}
        >
          {/* Quick Links */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{
                color: "#ff9800",
                mb: 1,
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
              }}
            >
              Quick Links
            </Typography>
            <List>
              {[
                { to: "/", text: "Home" },
                { to: "/aboutus", text: "About Us" },
                { to: "/photo-gallery", text: "Photo Gallery" },
                { to: "/video-gallery", text: "Video Gallery" },
                { to: "/inquiry", text: "Inquiry" },
                { to: "/contactus", text: "Contact Us" },
              ].map((link) => (
                <ListItem key={link.to} disablePadding sx={{ mb: 0.5 }}>
                  <Link
                    to={link.to}
                    onClick={scrollToTop} // Add scrollToTop handler
                    style={{
                      textDecoration: "none",
                      color: "#ffffff",
                      position: "relative",
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                    }}
                    className="hover:text-yellow-300"
                  >
                    {link.text}
                    <span
                      style={{
                        content: '""',
                        position: "absolute",
                        bottom: "-2px",
                        left: 0,
                        width: 0,
                        height: "2px",
                        backgroundColor: "#ffd54f",
                        transition: "width 0.3s ease-in-out",
                      }}
                    />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Our Services */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{
                color: "#ff9800",
                mb: 1,
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
              }}
            >
              Our Services
            </Typography>
            <List>
              {[
                { to: "/love-problem-solution", text: "Love Problem Solution" },
                {
                  to: "/marriage-problem-solution",
                  text: "Marriage Problem Solution",
                },
                {
                  to: "/love-marriage-problem-solution",
                  text: "Love Marriage Problem Solution",
                },
                {
                  to: "/family-problem-solution",
                  text: "Family Problem Solution",
                },
                {
                  to: "/husband-wife-dispute-solution",
                  text: "Husband Wife Dispute Solution",
                },
                { to: "/horoscope-reading", text: "Horoscope Reading" },
              ].map((link) => (
                <ListItem key={link.to} disablePadding sx={{ mb: 0.5 }}>
                  <Link
                    to={link.to}
                    onClick={scrollToTop} // Add scrollToTop handler
                    style={{
                      textDecoration: "none",
                      color: "#ffffff",
                      position: "relative",
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                    }}
                    className="hover:text-yellow-300"
                  >
                    {link.text}
                    <span
                      style={{
                        content: '""',
                        position: "absolute",
                        bottom: "-2px",
                        left: 0,
                        width: 0,
                        height: "2px",
                        backgroundColor: "#ffd54f",
                        transition: "width 0.3s ease-in-out",
                      }}
                    />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Get In Touch */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{
                color: "#ff9800",
                mb: 1,
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
              }}
            >
              Get In Touch
            </Typography>
            <List>
              {[
                {
                  href: "mailto:astroomsolution@gmail.com",
                  text: "House Number 20 Sector 11 Chandigarh",
                  icon: "🏠",
                },
                {
                  href: "mailto:astroomsolution@gmail.com",
                  text: "astroomsolution@gmail.com",
                  icon: "📧",
                },
                {
                  href: "tel:+919417339708",
                  text: "+91 9417339708",
                  icon: "📞",
                },
              ].map((item) => (
                <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
                  >
                    <span style={{ marginRight: "8px" }}>{item.icon}</span>
                    <a
                      href={item.href}
                      style={{
                        textDecoration: "none",
                        color: "#ffffff",
                        position: "relative",
                      }}
                      className="hover:text-yellow-300"
                    >
                      {item.text}
                      <span
                        style={{
                          content: '""',
                          position: "absolute",
                          bottom: "-2px",
                          left: 0,
                          width: 0,
                          height: "2px",
                          backgroundColor: "#ffd54f",
                          transition: "width 0.3s ease-in-out",
                        }}
                      />
                    </a>
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
