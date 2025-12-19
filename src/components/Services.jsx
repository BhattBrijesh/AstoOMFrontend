import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import img1 from "../assets/images/1.1.jpg";
import img2 from "../assets/images/2.1.jpg";
import img3 from "../assets/images/3.1.jpg";
import img4 from "../assets/images/4.1.jpg";
import img5 from "../assets/images/5.1.jpg";
import img6 from "../assets/images/7.1.jpg";
import "../components/css/Home.css";

const Services = () => {
  const services = [
    {
      image: img1,
      title: "Love & Relationship Guidance",
      description:
        "Facing challenges in your love life? Get personalized guidance to overcome misunderstandings, rebuild trust, and bring harmony back into your relationship.",
      link: "/love-problem-solution",
    },
    {
      image: img2,
      title: "Marriage Harmony Solutions",
      description:
        "Whether before or after marriage, receive expert astrological support to resolve delays, conflicts, and compatibility concerns for a peaceful married life.",
      link: "/marriage-problem-solution",
    },
    {
      image: img3,
      title: "Love Marriage Support",
      description:
        "Struggling to make your love marriage successful? Get trusted guidance to overcome family opposition, delays, and emotional challenges with confidence.",
      link: "/love-marriage-problem-solution",
    },
    {
      image: img4,
      title: "Couple & Marital Conflict Resolution",
      description:
        "Resolve ongoing disputes between husband and wife with compassionate guidance that helps restore understanding, balance, and emotional connection.",
      link: "/husband-wife-dispute-solution",
    },
    {
      image: img5,
      title: "Family Peace & Harmony",
      description:
        "Family conflicts can be stressful and overwhelming. Receive thoughtful solutions to restore peace, understanding, and emotional balance at home.",
      link: "/family-problem-solution",
    },
    {
      image: img6,
      title: "Reunite With Your Loved One",
      description:
        "Lost someone you still care about? Discover practical guidance and proven remedies to reconnect, heal emotional gaps, and rebuild your relationship.",
      link: "/horoscope-reading",
    },
  ];

  // Animation variants
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
    <div style={{ padding: "7px ", background: "#1a2a4487" }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <Typography
          sx={{
            fontSize: "3rem",
            fontWeight: "bold",
          }}
          className="header-why"
        >
          <span style={{ color: "#FFF" }}>How We</span>{" "}
          <span style={{ color: "#f28c38" }}>Help</span>
        </Typography>
        <Typography variant="body1" sx={{ color: "#FFF" }}>
          Unlock solutions to your love life with personalized guidance from our
          pool of expert and certified astrologers.
        </Typography>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={cardVariants} whileHover="hover">
            <Card
              style={{
                width: "500px", // Preserving original width
                textAlign: "center",
                cursor: "pointer",
                overflow: "hidden",
                position: "relative",
              }}
              component={motion.div}
            >
              <motion.div variants={imageHover}>
                <CardMedia
                  sx={{ height: "38vh" }}
                  component="img"
                  image={service.image}
                  alt={service.title}
                  // style={{ objectFit: "cover" }}
                />
              </motion.div>
              <CardContent sx={{ height: "24vh" }}>
                <Typography variant="h6" component="div">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {service.description}
                </Typography>
                <Button
                  variant="contained"
                  color="warning"
                  href={service.link}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateX(5px)",
                      backgroundColor: "#e67c22",
                    },
                  }}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
