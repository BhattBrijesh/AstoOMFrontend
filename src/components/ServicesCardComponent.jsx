import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import num0 from "../assets/images/8.1.png";
import loveMarriage from "../assets/images/ghibli/loveMarriage.jpeg";
import Marriage from "../assets/images/ghibli/Marriage.jpeg";
import Marital_Issues from "../assets/images/ghibli/Marital_Issues.png";
import Delay_In_Marriage from "../assets/images/ghibli/Delay_In_Marriage.png";
import divorce from "../assets/images/ghibli/divorce.jpg";

const services = [
  {
    title: "World Famous Astrologer",
    description:
      "Looking for guidance in your life? Consult a World Famous Astrologer for expert advice. These astrologers are renowned worldwide for their accurate predictions and insights. Get answers to your questions about love, career, and more today.",
    image: num0,
    whatsappLink: "https://api.whatsapp.com/send?phone=919417339708&text=I",
  },
  {
    title: "Love Marriage Specialist",
    description:
      'Are you looking for a "Love Marriage Specialist"? You\'re in the right place! A love marriage specialist is someone who helps couples facing challenges in their love marriage. They offer advice and solutions to make your love marriage successful.',
    image: loveMarriage,
    whatsappLink: "https://api.whatsapp.com/send?phone=919417339708&text=I",
  },
  {
    title: "Intercast Love Marriage",
    description:
      "Intercast Love Marriage is when people from different castes choose love over social norms. It's a journey filled with emotions and trials. This article will provide insights into the world of Intercast Love Marriage and how to make it work.",
    image: Marriage,
    whatsappLink: "https://api.whatsapp.com/send?phone=919417339708&text=I",
  },
  {
    title: "Marital Issues And Solutions",
    description:
      "Marital issues can be tough, but there are simple solutions. Communication is key. Make time to talk and listen to each other. Be open about your feelings and concerns. Remember, it's okay to ask for help from a trusted friend or counselor.",
    image: Marital_Issues,
    whatsappLink: "https://api.whatsapp.com/send?phone=919417339708&text=I",
  },
  {
    title: "Delay In Marriage",
    description:
      "A delayed marriage isn't unusual. There are myriad reasons, like career focus, self-improvement, or waiting for the right match. It's your individual journey. This article simplifies why marriages may take time, providing comfort and a roadmap to a more enriching union.",
    image: Delay_In_Marriage,
    whatsappLink: "https://api.whatsapp.com/send?phone=919417339708&text=I",
  },
  {
    title: "Divorce Problem Solution",
    description:
      "Dealing with divorce problems can be hard, but there are ways to resolve them. Talk openly with your partner and consider marriage counseling. Sometimes, simple changes in communication can make a big difference. If the situation doesn't improve, consult a divorce attorney for guidance.",
    image: divorce,
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
        ease: "easeOut"
      }
    }
  };

  const buttonHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      }
    }
  };

  return (
    <div style={{ padding: "10px" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Typography variant="h4" component="h1">
          <span style={{ color: "#FFF" }}>What</span>  <span style={{ color: "#ff9800" }}>we Offer</span>
        </Typography>
        <Typography variant="body1" sx={{ color: "#FFF" }}>
          Explore our range of services to get rid of your problem. Get in Touch
          with best and renowned Astrologer in India.
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
            <Card style={{
              width: "500px",
              textAlign: "center",
              overflow: "hidden",
              cursor: "pointer"
            }}>
              <motion.div
                variants={imageHover}
                whileHover="hover"
                style={{ overflow: "hidden" }}
              >
                <img
                  src={service.image}
                  style={{
                    height: "24rem",
                    width: "100%",
                    // objectFit: "cover",
                  }}
                  alt={service.title}
                />
              </motion.div>
              <CardContent>
                <Typography variant="h6" component="div" sx={{ mb: 2 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {service.description}
                </Typography>
                <motion.div
                  variants={buttonHover}
                  whileHover="hover"
                >
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