import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import img1 from "../assets/images/1.1.jpg";
import img2 from "../assets/images/2.1.png";
import img3 from "../assets/images/3.1.png";
import img4 from "../assets/images/4.1.png";
import img5 from "../assets/images/5.1.png";
import img6 from "../assets/images/6.1.png";
import "../components/css/Home.css";

const Services = () => {
  const [loadingKey, setLoadingKey] = useState(null); // which card is loading
  const navigate = useNavigate();

  const services = [
    {
      key: "education",
      image: img1,
      title: "Education & Foreign Study Guidance",
      description:
        "Confused about higher education, course selection, or studying abroad? Get clear astrological direction for choosing the right stream, country, and timing for your foreign studies.",
      buttonText: "Education & Study Abroad Help",
    },
    {
      key: "health",
      image: img2,
      title: "Health & Wellness Astrology",
      description:
        "Facing recurring health issues, low energy, or stress? Receive personalized remedies and guidance to support better health, faster recovery, and long‑term emotional balance.",
      buttonText: "Health Problem Solutions",
    },
    {
      key: "legal",
      image: img3,
      title: "Police Case & Court Matter Remedies",
      description:
        "Stuck in police matters, court cases, or legal disputes? Get astrological support to reduce obstacles, improve the timing of decisions, and seek relief in complex legal situations.",
      buttonText: "Legal & Court Case Guidance",
    },
    {
      key: "finance",
      image: img4,
      title: "Finance, Property & Investment Planning",
      description:
        "Worried about money loss, property disputes, or confused about investments? Gain clarity on wealth timing, risk areas, and practical remedies to stabilize and grow your finances.",
      buttonText: "Finance & Property Solutions",
    },
    {
      key: "career",
      image: img5,
      title: "Career, Business & Job Growth",
      description:
        "Unsure about job change, promotions, or business direction? Get in‑depth astrological analysis to choose the right field, avoid setbacks, and plan steady professional growth.",
      buttonText: "Career & Business Guidance",
    },
    {
      key: "marriage",
      image: img6,
      title: "Marriage, Matchmaking & Relationship Advice",
      description:
        "Confused about marriage decisions, partner compatibility, or delayed marriage? Receive trusted guidance for matchmaking, marriage timing, and building a stable relationship.",
      buttonText: "Marriage & Matchmaking Advice",
    },
  ];

  const handleViewDetails = (key) => {
    setLoadingKey(key); // show loader on this card
    navigate("/service-detail", { state: { key } });
    // React Router will unmount this component on navigation,
    // so no need to reset loadingKey here.
  };

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
          Unlock solutions for love, marriage, education, health, finance and
          more with personalized guidance from our expert and certified
          astrologers.
        </Typography>
      </div>

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
        {services.map((service, index) => {
          const isLoading = loadingKey === service.key;

          return (
            <div
              key={service.key}
              className="service-card animate-slide-up"
              style={{
                width: "100%",
                maxWidth: "420px",
                minWidth: "280px",
                animationDelay: `${index * 0.1}s`,
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
                <div className="image-container">
                  <CardMedia
                    sx={{
                      height: { xs: 200, sm: 220, md: 240 },
                      objectFit: "cover",
                    }}
                    component="img"
                    image={service.image}
                    alt={service.title}
                    loading="lazy"
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
                        fontSize: {
                          xs: "1.15rem",
                          sm: "1.2rem",
                          md: "1.3rem",
                        },
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
                    onClick={() => handleViewDetails(service.key)}
                    endIcon={isLoading ? null : <ArrowForwardIcon />}
                    disabled={isLoading}
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
                        transform: isLoading ? "none" : "translateX(8px)",
                        backgroundColor: "#e67c22",
                      },
                    }}
                  >
                    {isLoading ? (
                      <CircularProgress size={20} sx={{ color: "#fff" }} />
                    ) : (
                      service.buttonText
                    )}
                  </Button>

                  <Button
                    variant="contained"
                    color="warning"
                    component={Link}
                    to="/contactus"
                    sx={{
                      mt: 1.5,
                      width: { xs: "100%", sm: "auto" },
                      fontSize: { xs: "0.9rem", md: "0.95rem" },
                      px: { xs: 3, md: 4 },
                      py: 1,
                      borderRadius: "8px",
                      textTransform: "none",
                      borderWidth: 1.5,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateX(8px)",
                        backgroundColor: "#e67c22",
                      },
                    }}
                  >
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
