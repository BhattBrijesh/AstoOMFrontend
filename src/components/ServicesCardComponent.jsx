import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import num0Video from "../assets/images/services/best astrology.mp4";
import loveMarriageVideo from "../assets/images/services/loveMarriageVideo.mp4";
import intercastemarriage from "../assets/images/services/intercastemarriage.mp4";
import maritalIssuesVideo from "../assets/images/services/maritalIssuesVideo.mp4";
import delayInMarriageVideo from "../assets/images/services/delay in marriage.mp4";
import divorceVideo from "../assets/images/services/diveroce.mp4";
import "../components/css/Home.css";
import { Link } from "react-router-dom";

const services = [
  {
    title: "World's Trusted Astrology Expert",
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
  return (
    <div
      style={{
        padding: "16px 10px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontSize: { xs: "2rem", md: "2.4rem" },
            fontWeight: "bold",
            color: "#FFF",
          }}
        >
          <span style={{ color: "#FFF" }}>Solutions</span>{" "}
          <span style={{ color: "#ff9800" }}>That Truly Work</span>
        </Typography>
        <Box
          className="bg-teal-900 text-white py-8"
          sx={{ background: "#1a2a4487" }}
        >
          <Typography
            variant="h6"
            component="h2"
            sx={{
              lineHeight: 1.6,
              color: "#FFF",
              fontSize: { xs: "1rem", md: "1.1rem" },
              maxWidth: "750px",
              margin: "8px auto 0",
              padding: { xs: "0 8px", md: 0 },
            }}
          >
            Facing love, marriage, or life problems? Get trusted solutions from
            a renowned astrologer in India and move forward with clarity, peace,
            and confidence.
          </Typography>
        </Box>
      </div>

      {/* ✅ CSS ANIMATION: Replace motion.div */}
      <div
        className="services-grid-v2 animate-fade-in"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card-v2 animate-slide-up"
            style={{
              flex: "1 1 260px",
              maxWidth: "340px",
              minWidth: "260px",
              animationDelay: `${index * 0.1}s`, // Stagger effect
            }}
          >
            <Card
              className="service-card-inner-v2"
              style={{
                width: "100%",
                textAlign: "center",
                overflow: "hidden",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              {/* ✅ OPTIMIZED VIDEO: preload="metadata" + poster fallback */}
              <div className="video-container">
                <video
                  autoPlay
                  // preload="metadata" // ✅ DON'T preload full video
                  src={service.video}
                  poster="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" // ✅ Tiny poster
                  muted
                  // playsInline
                  className="service-video"
                  // onMouseEnter={(e) => e.target.play()} // ✅ Play on hover
                  // onMouseLeave={(e) => e.target.pause()} // ✅ Pause on leave
                  loop
                />
                {/* ✅ FALLBACK IMAGE for poor connections */}
                <div className="video-fallback">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmOGY4Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmc8L3RleHQ+PC9zdmc+"
                    alt="Service preview"
                    loading="lazy"
                  />
                </div>
              </div>

              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: { xs: "14px 10px", md: "16px 14px" },
                }}
              >
                <div>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      mb: 1,
                      fontSize: { xs: "1.05rem", md: "1.15rem" },
                      fontWeight: 600,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 1.5,
                      fontSize: { xs: "0.9rem", md: "0.95rem" },
                      lineHeight: 1.5,
                    }}
                  >
                    {service.description}
                  </Typography>
                </div>

                {/* ✅ CSS HOVER BUTTON */}
                <div className="whatsapp-button-container">
                  <Button
                    variant="contained"
                    // className="whatsapp-btn"
                    color="warning"
                    component={Link}
                    to="/contactus"
                    sx={{
                      width: "100%",
                      backgroundColor: "#e67c22",
                      transition: "all 0.3s ease",
                      marginBottom: "10px",
                      "&:hover": {
                        transform: "translateX(8px)",
                        backgroundColor: "#e67c22",
                      },
                    }}
                  >
                    Contact Us
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    href={service.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<WhatsAppIcon />}
                    className="whatsapp-btn"
                  >
                    Whatsapp Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCardComponent;
