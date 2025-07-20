import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid,
  Avatar,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import Facebook from "../assets/images/animation/icons8-facebook.gif";
import Instagram from "../assets/images/animation/icons8-instagram.gif";
import Whatsapp from "../assets/images/animation/icons8-whatsapp.gif";
import Contact from "../assets/images/animation/icons8-contact-us.gif";
import { motion } from "framer-motion";
import { blue } from "@mui/material/colors";

const Footer = () => {
  const logoStyle = {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    backgroundSize: "cover",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    animation: "float 3s ease-in-out infinite",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const [isHovered, setIsHovered] = React.useState(false);
  const hoverStyle = isHovered
    ? {
      transform: "scale(1.05)",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
    }
    : {};
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
      mt={1}
      className="bg-teal-900 text-white"
      sx={{
        background: "#1a2a4487",
        color: "#f0f4f8",
        objectFit: "cover",
      }}
      p={1}
    >
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid>
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

            <Box sx={{ display: "flex" }}>
              <motion.div
                variants={cardVariants}
                whileHover="hover">
                <IconButton
                  id="facebook-icon"
                  href="https://www.facebook.com/omastroservice/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-300"
                >
                  <Avatar>
                    <img
                      src={Facebook} // assuming Facebook is imported .gif
                      alt="Facebook icon"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "none",
                        background: "none",
                      }}
                    />
                  </Avatar>
                </IconButton>
              </motion.div>
              <motion.div
                variants={cardVariants}
                whileHover="hover">
                <IconButton
                  href="https://www.instagram.com/omastroservice/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-300"
                >
                  <Avatar>
                    <img
                      src={Instagram} // assuming Facebook is imported .gif
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
              <motion.div
                variants={cardVariants}
                whileHover="hover">
                <IconButton
                  href="https://api.whatsapp.com/send?phone=919417339708&text=I'd%20like%20to%20know%20more%20about%20your%20services.%20Please%20contact%20me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-300"
                >
                  <Avatar>
                    <img
                      src={Whatsapp} // assuming Facebook is imported .gif
                      alt="Facebook icon"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "none",
                      }}
                    />
                  </Avatar>
                </IconButton>
              </motion.div>
              <motion.div
                variants={cardVariants}
                whileHover="hover">
                <IconButton
                  href="tel:+919417339708"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-300"
                >
                  <Avatar>
                    <img
                      src={Contact} // assuming Facebook is imported .gif
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
            </Box>
          </motion.div>
        </Grid>
      </Grid>
      <Grid sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "60rem",
          }}
        >
          <Box id="Quick_Links">
            <Typography variant="h6" className="text-orange-500 mb-0" sx={{ marginLeft: "15px" }}>
              Quick Links
            </Typography>
            <List sx={{
              textDecoration: "none", color: "#ff9800",
            }}>
              <ListItem sx={{
                '&.MuiListItem-root': {
                  paddingBottom: 0
                }
              }}>
                <Link
                  to="/"
                  className="text-white relative transition-colors duration-200 ease-in-out"
                  style={{ textDecoration: "none", position: "relative" }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#ffd54f";
                    e.target.querySelector('::after').style.width = "100%";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.querySelector('::after').style.width = "0";
                  }}
                >
                  Home
                  <span
                    style={{
                      content: '""',
                      position: "absolute",
                      bottom: "-2px",
                      left: "0",
                      width: "0",
                      height: "2px",
                      backgroundColor: "#ffd54f",
                      transition: "width 0.3s ease-in-out",
                    }}
                  />
                </Link>
              </ListItem>
              <ListItem sx={{
                '&.MuiListItem-root': {
                  paddingBottom: 0
                }
              }}>
                <Link
                  to="/aboutus"
                  className="text-white relative transition-colors duration-200 ease-in-out"
                  style={{ textDecoration: "none", position: "relative" }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#ffd54f";
                    e.target.querySelector('::after').style.width = "100%";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.querySelector('::after').style.width = "0";
                  }}
                >
                  About Us
                  <span
                    style={{
                      content: '""',
                      position: "absolute",
                      bottom: "-2px",
                      left: "0",
                      width: "0",
                      height: "2px",
                      backgroundColor: "#ffd54f",
                      transition: "width 0.3s ease-in-out",
                    }}
                  />
                </Link>
              </ListItem>
              <ListItem sx={{
                '&.MuiListItem-root': {
                  paddingBottom: 0
                }
              }}>
                <Link
                  to="/photo-gallery"
                  className="text-white relative transition-colors duration-200 ease-in-out"
                  style={{ textDecoration: "none", position: "relative" }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#ffd54f";
                    e.target.querySelector('::after').style.width = "100%";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.querySelector('::after').style.width = "0";
                  }}
                >
                  Photo Gallery
                  <span
                    style={{
                      content: '""',
                      position: "absolute",
                      bottom: "-2px",
                      left: "0",
                      width: "0",
                      height: "2px",
                      backgroundColor: "#ffd54f",
                      transition: "width 0.3s ease-in-out",
                    }}
                  />
                </Link>
              </ListItem>
              <ListItem sx={{
                '&.MuiListItem-root': {
                  paddingBottom: 0
                }
              }}>
                <Link
                  to="/video-gallery"
                  className="text-white relative transition-colors duration-200 ease-in-out"
                  style={{ textDecoration: "none", position: "relative" }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#ffd54f";
                    e.target.querySelector('::after').style.width = "100%";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.querySelector('::after').style.width = "0";
                  }}
                >
                  Video Gallery
                  <span
                    style={{
                      content: '""',
                      position: "absolute",
                      bottom: "-2px",
                      left: "0",
                      width: "0",
                      height: "2px",
                      backgroundColor: "#ffd54f",
                      transition: "width 0.3s ease-in-out",
                    }}
                  />
                </Link>
              </ListItem>
              <ListItem sx={{
                '&.MuiListItem-root': {
                  paddingBottom: 0
                }
              }}>
                <Link
                  to="/inquiry"
                  className="text-white relative transition-colors duration-200 ease-in-out"
                  style={{ textDecoration: "none", position: "relative" }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#ffd54f";
                    e.target.querySelector('::after').style.width = "100%";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.querySelector('::after').style.width = "0";
                  }}
                >
                  Inquiry
                  <span
                    style={{
                      content: '""',
                      position: "absolute",
                      bottom: "-2px",
                      left: "0",
                      width: "0",
                      height: "2px",
                      backgroundColor: "#ffd54f",
                      transition: "width 0.3s ease-in-out",
                    }}
                  />
                </Link>
              </ListItem>
              <ListItem sx={{
                '&.MuiListItem-root': {
                  paddingBottom: 0
                }
              }}>
                <Link
                  to="/contactus"
                  className="text-white relative transition-colors duration-200 ease-in-out"
                  style={{ textDecoration: "none", position: "relative" }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#ffd54f";
                    e.target.querySelector('::after').style.width = "100%";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.querySelector('::after').style.width = "0";
                  }}
                >
                  Contact Us
                  <span
                    style={{
                      content: '""',
                      position: "absolute",
                      bottom: "-2px",
                      left: "0",
                      width: "0",
                      height: "2px",
                      backgroundColor: "#ffd54f",
                      transition: "width 0.3s ease-in-out",
                    }}
                  />
                </Link>
              </ListItem>
            </List>
          </Box>
          <Box id="Our_Services">
            <Typography variant="h6" className="text-orange-500" sx={{ marginLeft: "15px" }}>
              Our Services
            </Typography>
            <List sx={{ textDecoration: "none", color: "#ff9800" }}>
              <ListItem sx={{
                '&.MuiListItem-root': {
                  paddingBottom: 0
                }
              }}>
                <Link
                  to="/love-problem-solution"
                  className="text-white relative transition-colors duration-200 ease-in-out"
                  style={{ textDecoration: "none", position: "relative" }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#ffd54f";
                    e.target.querySelector('::after').style.width = "100%";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.querySelector('::after').style.width = "0";
                  }}
                >
                  Love Problem Solution
                  <span
                    style={{
                      content: '""',
                      position: "absolute",
                      bottom: "-2px",
                      left: "0",
                      width: "0",
                      height: "2px",
                      backgroundColor: "#ffd54f",
                      transition: "width 0.3s ease-in-out",
                    }}
                  />
                </Link>
              </ListItem>
              <ListItem sx={{
                '&.MuiListItem-root': {
                  paddingBottom: 0
                }
              }}>
                <Link
                  to="/marriage-problem-solution"
                  className="text-white relative transition-colors duration-200 ease-in-out"
                  style={{ textDecoration: "none", position: "relative" }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#ffd54f";
                    e.target.querySelector('::after').style.width = "100%";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.querySelector('::after').style.width = "0";
                  }}
                >
                  Marriage Problem Solution
                  <span
                    style={{
                      content: '""',
                      position: "absolute",
                      bottom: "-2px",
                      left: "0",
                      width: "0",
                      height: "2px",
                      backgroundColor: "#ffd54f",
                      transition: "width 0.3s ease-in-out",
                    }}
                  />
                </Link>
              </ListItem>
              <ListItem sx={{
                '&.MuiListItem-root': {
                  paddingBottom: 0
                }
              }}>
                <Link
                  to="/love-marriage-problem-solution"
                  className="text-white relative transition-colors duration-200 ease-in-out"
                  style={{ textDecoration: "none", position: "relative" }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#ffd54f";
                    e.target.querySelector('::after').style.width = "100%";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.querySelector('::after').style.width = "0";
                  }}
                >
                  Love Marriage Problem Solution
                  <span
                    style={{
                      content: '""',
                      position: "absolute",
                      bottom: "-2px",
                      left: "0",
                      width: "0",
                      height: "2px",
                      backgroundColor: "#ffd54f",
                      transition: "width 0.3s ease-in-out",
                    }}
                  />
                </Link>
              </ListItem>
              <ListItem sx={{
                '&.MuiListItem-root': {
                  paddingBottom: 0
                }
              }}>
                <Link
                  to="/family-problem-solution"
                  className="text-white relative transition-colors duration-200 ease-in-out"
                  style={{ textDecoration: "none", position: "relative" }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#ffd54f";
                    e.target.querySelector('::after').style.width = "100%";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.querySelector('::after').style.width = "0";
                  }}
                >
                  Family Problem Solution
                  <span
                    style={{
                      content: '""',
                      position: "absolute",
                      bottom: "-2px",
                      left: "0",
                      width: "0",
                      height: "2px",
                      backgroundColor: "#ffd54f",
                      transition: "width 0.3s ease-in-out",
                    }}
                  />
                </Link>
              </ListItem>
              <ListItem sx={{
                '&.MuiListItem-root': {
                  paddingBottom: 0
                }
              }}>
                <Link
                  to="/husband-wife-dispute-solution"
                  className="text-white relative transition-colors duration-200 ease-in-out"
                  style={{ textDecoration: "none", position: "relative" }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#ffd54f";
                    e.target.querySelector('::after').style.width = "100%";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.querySelector('::after').style.width = "0";
                  }}
                >
                  Husband Wife Dispute Solution
                  <span
                    style={{
                      content: '""',
                      position: "absolute",
                      bottom: "-2px",
                      left: "0",
                      width: "0",
                      height: "2px",
                      backgroundColor: "#ffd54f",
                      transition: "width 0.3s ease-in-out",
                    }}
                  />
                </Link>
              </ListItem>
              <ListItem sx={{
                '&.MuiListItem-root': {
                  paddingBottom: 0
                }
              }}>
                <Link
                  to="/horoscope-reading"
                  className="text-white relative transition-colors duration-200 ease-in-out"
                  style={{ textDecoration: "none", position: "relative" }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#ffd54f";
                    e.target.querySelector('::after').style.width = "100%";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.querySelector('::after').style.width = "0";
                  }}
                >
                  Horoscope Reading
                  <span
                    style={{
                      content: '""',
                      position: "absolute",
                      bottom: "-2px",
                      left: "0",
                      width: "0",
                      height: "2px",
                      backgroundColor: "#ffd54f",
                      transition: "width 0.3s ease-in-out",
                    }}
                  />
                </Link>
              </ListItem>
            </List>
          </Box>
          <Box id="Get_In_Touch">
            <Typography variant="h6" className="text-orange-500 mb-0" sx={{ marginLeft: "15px" }}>
              Get In Touch
            </Typography>
            <List sx={{ textDecoration: "none" }}>
              <ListItem sx={{
                '&.MuiListItem-root': {
                  paddingBottom: 0
                }
              }}>
                <Typography variant="body2">
                  <span className="mr-2">🏠</span>
                  <a
                    href="mailto:astroomsolution@gmail.com"
                    className="text-white relative transition-colors duration-200 ease-in-out"
                    style={{ textDecoration: "none", position: "relative" }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#ffd54f";
                      e.target.querySelector('::after').style.width = "100%";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#ffffff";
                      e.target.querySelector('::after').style.width = "0";
                    }}
                  >
                    House Number 20 Sector 11 Chandigarh
                    <span
                      style={{
                        content: '""',
                        position: "absolute",
                        bottom: "-2px",
                        left: "0",
                        width: "0",
                        height: "2px",
                        backgroundColor: "#ffd54f",
                        transition: "width 0.3s ease-in-out",
                      }}
                    />
                  </a>
                </Typography>
              </ListItem>
              <ListItem sx={{
                '&.MuiListItem-root': {
                  paddingBottom: 0
                }
              }}>
                <Typography variant="body2">
                  <span className="mr-2">📧</span>
                  <a
                    href="mailto:astroomsolution@gmail.com"
                    className="text-white relative transition-colors duration-200 ease-in-out"
                    style={{ textDecoration: "none", position: "relative" }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#ffd54f";
                      e.target.querySelector('::after').style.width = "100%";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#ffffff";
                      e.target.querySelector('::after').style.width = "0";
                    }}
                  >
                    astroomsolution@gmail.com
                    <span
                      style={{
                        content: '""',
                        position: "absolute",
                        bottom: "-2px",
                        left: "0",
                        width: "0",
                        height: "2px",
                        backgroundColor: "#ffd54f",
                        transition: "width 0.3s ease-in-out",
                      }}
                    />
                  </a>
                </Typography>
              </ListItem>
              <ListItem sx={{
                '&.MuiListItem-root': {
                  paddingBottom: 0
                }
              }}>
                <Typography variant="body2">
                  <span className="mr-2">📞</span>
                  <a
                    href="tel:+9999999999999"
                    className="text-white relative transition-colors duration-200 ease-in-out"
                    style={{ textDecoration: "none", position: "relative" }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#ffd54f";
                      e.target.querySelector('::after').style.width = "100%";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#ffffff";
                      e.target.querySelector('::after').style.width = "0";
                    }}
                  >
                    +91 9417339708
                    <span
                      style={{
                        content: '""',
                        position: "absolute",
                        bottom: "-2px",
                        left: "0",
                        width: "0",
                        height: "2px",
                        backgroundColor: "#ffd54f",
                        transition: "width 0.3s ease-in-out",
                      }}
                    />
                  </a>
                </Typography>
              </ListItem>

            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
