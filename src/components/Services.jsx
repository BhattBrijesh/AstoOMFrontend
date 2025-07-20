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
      title: "Love Problem Solution",
      description:
        "OM Astro Solution is your top love problem solution Astrologer, specializing in love marriages. Love is a precious gift but can come with challenges like communication issues and relationship troubles.",
      link: "/love-problem-solution",
    },
    {
      image: img2,
      title: "Marriage Problem Solution",
      description:
        "When navigating hurdles on the path to marriage, astrology offers solutions. Whether due to planetary changes or chart discrepancies, it can address pre- and post-marriage issues.",
      link: "/marriage-problem-solution",
    },
    {
      image: img3,
      title: "Love Marriage Problem Solution",
      description:
        "Increasingly, couples are turning to phone-based solutions for love marriage challenges. OM Astro Solution, India's leading astrologer with over a decade of experience, provides immediate answers.",
      link: "/love-marriage-problem-solution",
    },
    {
      image: img4,
      title: "Husband Wife Dispute Solution",
      description:
        "Marriage, a sacred bond, faces modern life's trials, testing resilience. When challenges strain relationships, individuals turn to astrologers like OM Astro Solution for guidance.",
      link: "/husband-wife-dispute-solution",
    },
    {
      image: img5,
      title: "Family Problem Solution",
      description:
        "At times, we encounter family conflicts that disrupt harmony and strain relationships among relatives. These issues can cause emotional turmoil as family matters deeply to us.",
      link: "/family-problem-solution",
    },
    {
      image: img6,
      title: "Get Your Love Back",
      description:
        "If you want to reunite with your loved one, it's possible. Begin by having an honest chat with your partner. Listen to their concerns and express your feelings as well.",
      link: "#",
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
        ease: "easeOut"
      }
    }
  };

  return (
    <div style={{ padding: "10px ", background: "#1a2a4487" }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <Typography
          sx={{
            fontSize: "3rem",
            fontWeight: "bold",
          }}
          className="header-why"
        >
          <span style={{ color: "#FFF" }}>Our</span>{" "}
          <span style={{ color: "#f28c38" }}>Services</span>
        </Typography>
        <Typography variant="body1" sx={{ color: "#FFF" }}>
          Connect with our team to get remedies for your love life. We have pool
          of expert and qualified astrologer
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
          gap: "20px",
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
          >
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
              <motion.div
                variants={imageHover}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                // style={{ objectFit: "cover" }}
                />
              </motion.div>
              <CardContent>
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
                      backgroundColor: "#e67c22"
                    }
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