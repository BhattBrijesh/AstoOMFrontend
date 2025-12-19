import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// Import your video files here
import num0Video from "../assets/images/services/best astrology.mp4";
import loveMarriageVideo from "../assets/images/services/loveMarriageVideo.mp4";
import intercastemarriage from "../assets/images/services/intercastemarriage.mp4";
import maritalIssuesVideo from "../assets/images/services/maritalIssuesVideo.mp4";
import delayInMarriageVideo from "../assets/images/services/delay in marriage.mp4";
import divorceVideo from "../assets/images/services/diveroce.mp4";

const services = [
  {
    title: "World’s Trusted Astrology Expert",
    description:
      "Feeling confused about love, career, or life decisions? Connect with a world-renowned astrology expert known for accurate predictions and deep insights. Get clear answers and practical guidance to move forward with confidence.",
    video: num0Video,
    whatsappLink: "https://api.whatsapp.com/send?phone=919417339708&text=I",
  },
  {
    title: "Expert Love Marriage Guidance",
    description:
      "Facing challenges in your love marriage? Our love marriage specialist helps couples overcome obstacles, family issues, and misunderstandings. Receive trusted guidance to build a happy and successful love marriage.",
    video: loveMarriageVideo,
    whatsappLink: "https://api.whatsapp.com/send?phone=919417339708&text=I",
  },
  {
    title: "Inter-Caste Love Marriage Solutions",
    description:
      "Inter-caste love marriages often face social and family pressure. Get expert support and proven solutions to handle challenges, gain family acceptance, and build a strong future together with confidence.",
    video: intercastemarriage,
    whatsappLink: "https://api.whatsapp.com/send?phone=919417339708&text=I",
  },
  {
    title: "Marital Problems & Relationship Healing",
    description:
      "Struggling with misunderstandings or conflicts in your marriage? Discover effective solutions to improve communication, rebuild trust, and restore peace and harmony in your relationship.",
    video: maritalIssuesVideo,
    whatsappLink: "https://api.whatsapp.com/send?phone=919417339708&text=I",
  },
  {
    title: "Solutions for Delay in Marriage",
    description:
      "Worried about marriage delays? Whether due to career, compatibility, or planetary influences, get clear insights and personalized guidance to remove obstacles and move closer to a happy marriage.",
    video: delayInMarriageVideo,
    whatsappLink: "https://api.whatsapp.com/send?phone=919417339708&text=I",
  },
  {
    title: "Divorce Issues & Marriage Protection",
    description:
      "Going through serious relationship problems or divorce situations? Receive expert guidance to resolve conflicts, save your marriage when possible, or find peace and clarity for the next step in life.",
    video: divorceVideo,
    whatsappLink: "https://api.whatsapp.com/send?phone=919417339708&text=I",
  },
];

const ServicesCardComponent = () => {
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

  const buttonHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div style={{ padding: "5px" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Typography variant="h4" component="h1">
          <span style={{ color: "#FFF" }}>Solutions</span>{" "}
          <span style={{ color: "#ff9800" }}>That Truly Work</span>
        </Typography>

        <Typography variant="h6" component="h1" sx={{ lineHeight: 1.6 }}>
          <span style={{ color: "#FFF" }}>
            Facing love, marriage, or life problems? Get trusted solutions from{" "}
            <br />
            a renowned astrologer in India and move forward with clarity, peace,
            <br /> and confidence.
          </span>{" "}
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
                width: "300px",
                textAlign: "center",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <motion.div
                variants={imageHover}
                whileHover="hover"
                style={{ overflow: "hidden" }}
              >
                <video
                  src={service.video}
                  style={{
                    height: "12rem",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  autoPlay
                  loop
                  muted
                  playsInline
                  alt={service.title}
                />
              </motion.div>
              <CardContent>
                <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {service.description}
                </Typography>
                <motion.div variants={buttonHover} whileHover="hover">
                  <Button
                    variant="contained"
                    color="primary"
                    href={service.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<WhatsAppIcon />}
                    style={{
                      backgroundColor: "#25D366",
                      color: "#fff",
                    }}
                  >
                    Whatsapp Now
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesCardComponent;
