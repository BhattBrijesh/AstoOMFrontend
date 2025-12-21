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
// ❌ REMOVED: import { motion } from "framer-motion";
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
      buttonText: "Love Problem Solutions",
    },
    {
      image: img2,
      title: "Marriage Harmony Solutions",
      description:
        "Whether before or after marriage, receive expert astrological support to resolve delays, conflicts, and compatibility concerns for a peaceful married life.",
      link: "/marriage-problem-solution",
      buttonText: "Marriage Problem Solutions",
    },
    {
      image: img3,
      title: "Love Marriage Support",
      description:
        "Struggling to make your love marriage successful? Get trusted guidance to overcome family opposition, delays, and emotional challenges with confidence.",
      link: "/love-marriage-problem-solution",
      buttonText: "Love Marriage Solutions",
    },
    {
      image: img4,
      title: "Couple & Marital Conflict Resolution",
      description:
        "Resolve ongoing disputes between husband and wife with compassionate guidance that helps restore understanding, balance, and emotional connection.",
      link: "/husband-wife-dispute-solution",
      buttonText: "Husband Wife Solutions",
    },
    {
      image: img5,
      title: "Family Peace & Harmony",
      description:
        "Family conflicts can be stressful and overwhelming. Receive thoughtful solutions to restore peace, understanding, and emotional balance at home.",
      link: "/family-problem-solution",
      buttonText: "Family Problem Solutions",
    },
    {
      image: img6,
      title: "Reunite With Your Loved One",
      description:
        "Lost someone you still care about? Discover practical guidance and proven remedies to reconnect, heal emotional gaps, and rebuild your relationship.",
      link: "/horoscope-reading",
      buttonText: "Horoscope Reading Services",
    },
  ];

  return (
    <div
      style={{
        padding: "32px 16px",
        background: "#1a2a4487",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Typography
          sx={{
            fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
            fontWeight: "bold",
            lineHeight: 1.2,
          }}
          className="header-why"
        >
          <span style={{ color: "#FFF" }}>How We</span>{" "}
          <span style={{ color: "#f28c38" }}>Help</span>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#FFF",
            fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
            maxWidth: "700px",
            margin: "16px auto 0",
            padding: { xs: "0 16px", md: 0 },
            lineHeight: 1.6,
          }}
        >
          Unlock solutions to your love life with personalized guidance from our
          pool of expert and certified astrologers.
        </Typography>
      </div>

      {/* ✅ CSS ANIMATION: Replace motion.div */}
      <div
        className="services-grid animate-fade-in"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          justifyContent: "center",
          justifyItems: "center",
          padding: "0 8px",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card animate-slide-up"
            style={{
              width: "100%",
              maxWidth: "420px",
              minWidth: "280px",
              animationDelay: `${index * 0.1}s`, // Stagger effect
            }}
          >
            <Card
              className="service-card-inner"
              style={{
                width: "100%",
                textAlign: "center",
                cursor: "pointer",
                overflow: "hidden",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                borderRadius: "12px",
              }}
            >
              {/* ✅ CSS HOVER: Replace motion.div */}
              <div className="image-container">
                <CardMedia
                  sx={{
                    height: { xs: 200, sm: 220, md: 240 },
                    objectFit: "cover",
                  }}
                  component="img"
                  image={service.image}
                  alt={service.title}
                  loading="lazy" // ✅ LAZY LOADING
                />
              </div>

              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: {
                    xs: "16px 14px",
                    sm: "20px 18px",
                    md: "24px 20px",
                  },
                  textAlign: { xs: "center", sm: "center" },
                }}
              >
                <div>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontSize: { xs: "1.15rem", sm: "1.2rem", md: "1.3rem" },
                      fontWeight: 600,
                      mb: 1.5,
                      lineHeight: 1.3,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: "0.9rem", sm: "0.95rem" },
                      lineHeight: 1.6,
                      mb: 2,
                    }}
                  >
                    {service.description}
                  </Typography>
                </div>

                <Button
                  variant="contained"
                  color="warning"
                  component={Link}
                  to={service.link}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    mt: "auto",
                    width: { xs: "100%", sm: "auto" },
                    fontSize: { xs: "0.9rem", md: "0.95rem" },
                    px: { xs: 3, md: 4 },
                    py: 1.2,
                    borderRadius: "8px",
                    textTransform: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateX(8px)",
                      backgroundColor: "#e67c22",
                    },
                  }}
                >
                  {service.buttonText}
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
