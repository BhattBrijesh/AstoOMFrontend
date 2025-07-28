import React, { useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import Breadcrumb from "../components/Breadcrumb";

const About = () => {
  useEffect(() => {
    document.title = "About Us | Astro Om Solution";
  }, []);

  return (
    <Box sx={{ bgcolor: "transparent", minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <Breadcrumb title="About Us" />


      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 2, md: 4 },
        }}
      >
        <Container maxWidth="xxl">
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.4, fontSize: { xs: "2rem", md: "2.1rem" }, color: "#ff9800", fontWeight: 500, boxShadow: 1 }}
            >
              Unlocking the Mysteries of the Cosmos with Astro Om Solution
            </Typography>
          </Box>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "nowrap",
              mt: 1,
            }}
          >
            <Box
              sx={{
                pl: { md: 2 },
                textAlign: "left",
                bgcolor: "#FFF",
                p: 1.5,
                borderRadius: 2,
                color: "black",
                border: "1px solid rgba(255, 152, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 6px 16px rgba(255, 152, 0, 0.2)",
                },
              }}
            >
              <Typography
                variant="h5"
                component="h1"
                sx={{ color: "#ff9800", fontWeight: "medium", mb: 1 }}
              >
                Astro Om Solution: Your Premier Destination for Expert Vedic Astrology in India
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ lineHeight: 1.4, mb: 1, color: "black", fontWeight: 500 }}
              >
                Are you in search of profound astrological insights and guidance to navigate life's challenges? Look no further than Astro Om Solution, your trusted partner in Vedic astrology based in India. Our mission is to provide you with top-notch astrological solutions and help you find answers to your deepest questions.
              </Typography>
              <Typography
                variant="h5"
                component="h1"
                sx={{ color: "#ff9800", fontWeight: "medium", mb: 1 }}
              >
                Discover the World of Vedic Astrology:
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ lineHeight: 1.4, mb: 1, color: "black", fontWeight: 500 }}
              >
                We pride ourselves as pioneers in the field of Vedic astrology, with a rich heritage of wisdom and knowledge. Vedic astrology, also known as Jyotish Shastra, is a time-tested and ancient system that delves into the cosmic influences on your life. Our dedicated team of astrologers is well-versed in the art of Vedic astrology and can offer you invaluable insights into your life's journey.
              </Typography>
              <Typography
                variant="h5"
                component="h1"
                sx={{ color: "#ff9800", fontWeight: "medium", mb: 1 }}
              >
                Access Astrological Solutions Worldwide:
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ lineHeight: 1.4, color: "black", fontWeight: 500 }}
              >
                No matter where you are in the world, you can benefit from our expertise. We are honored to be recognized as one of the world's top astrology services, and our astrologers are available to serve you regardless of your location. With Om Astro Service, distance is no barrier to receiving the best astrological guidance.
              </Typography>
            </Box>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="xxl" sx={{ py: { xs: 2, md: 4 } }}>
        <Box
          sx={{
            borderRadius: 2,
            p: 1.5,
            bgcolor: "#FFF",
            border: "1px solid rgba(255, 152, 0, 0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-6px)",
              boxShadow: "0 8px 20px rgba(255, 152, 0, 0.3)",
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#ff9800", fontWeight: "medium", mb: 1 }}
            gutterBottom
          >
            Comprehensive Astrological Services at Your Fingertips:
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: 1.4, mb: 1, color: "black", fontWeight: 500 }}
            paragraph
          >
            At Astro Om Solution, we understand that every individual is unique. That's why we offer a wide range of services tailored to your specific needs. Our team of top astrologers is skilled in deciphering the intricate details of your birth chart, including your zodiac sign, moon sign, and the positions of planets and modalities. With this information, we can provide you with personalized guidance and expert advice to address various aspects of your life.
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: "#ff9800", fontWeight: "medium", mb: 1 }}
            gutterBottom
          >
            Harness the Power of Planetary Transitions:
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: 1.4, mb: 1, color: "black", fontWeight: 500 }}
            paragraph
          >
            One of the key benefits of consulting with Astro Om Solution is gaining insight into the influence of planetary transitions on your life. Our expert astrologers will help you understand how planetary movements impact your experiences. Whether it's navigating challenging times during planetary retrogrades or capitalizing on favourable celestial alignments, our guidance will empower you to make informed decisions and lead a more harmonious life.
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: "#ff9800", fontWeight: "medium", mb: 1 }}
            gutterBottom
          >
            A Solution for Every Concern:
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: 1.4, mb: 1, color: "black", fontWeight: 500 }}
          >
            No matter the nature of your concerns, our team of expert Vedic astrologers is here to assist you. Our comprehensive services cover a wide spectrum of life's challenges, including:
          </Typography>
          <Box sx={{ ml: 2, mt: 0.5 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.4, color: "black", fontWeight: 500, mb: 0.5 }}
            >
              • Numerology
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.4, color: "black", fontWeight: 500, mb: 0.5 }}
            >
              • Face-Reading
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.4, color: "black", fontWeight: 500, mb: 0.5 }}
            >
              • Kundali-Milan (Matchmaking)
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.4, color: "black", fontWeight: 500, mb: 0.5 }}
            >
              • Family Astrology
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.4, color: "black", fontWeight: 500, mb: 0.5 }}
            >
              • Health Astrology
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.4, color: "black", fontWeight: 500, mb: 0.5 }}
            >
              • Education & Career Astrology
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.4, color: "black", fontWeight: 500, mb: 0.5 }}
            >
              • Job & Business Astrology
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.4, color: "black", fontWeight: 500, mb: 0.5 }}
            >
              • Finance & Investment Astrology
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.4, color: "black", fontWeight: 500, mb: 0.5 }}
            >
              • Marriage Astrology
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.4, color: "black", fontWeight: 500, mb: 0.5 }}
            >
              • Legal Dispute Astrology
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.4, color: "black", fontWeight: 500 }}
            >
              • Relationship Astrology
            </Typography>
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: 1.4, mb: 1, color: "black", fontWeight: 500 }}
            paragraph
          >
            Count on us for dependable and effective astrology solutions that cater to the specific issues you're facing in your life.
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: "#ff9800", fontWeight: "medium", mb: 1 }}
            gutterBottom
          >
            Connect with the Best Astrologer in India:
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: 1.4, mb: 1, color: "black", fontWeight: 500 }}
            paragraph
          >
            When you require assistance in decoding planetary positions and seeking solutions for your life's challenges, don't hesitate to reach out to Astro Om Solution. Our experienced astrologers in India are committed to providing you with reliable and insightful astrological guidance.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: 1.4, mb: 1, color: "black", fontWeight: 500 }}
            paragraph
          >
            Take the first step toward a more fulfilling life by contacting the best astrologer in India today. Whether you're seeking answers about your personal relationships, career prospects, financial decisions, or any other aspect of your life, our dedicated team is here to guide you towards a brighter future. Embrace the wisdom of Vedic astrology and unlock the secrets to a more balanced and harmonious life with Astro Om Solution.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              mt: 1,
              px: 3,
              py: 0.5,
              borderRadius: 1,
              textTransform: "none",
              fontWeight: "medium",
              bgcolor: "#ff9800",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "#e68900",
                transform: "scale(1.05)",
                boxShadow: "0 4px 12px rgba(255, 152, 0, 0.3)",
              },
            }}
            href="/contactus"
          >
            Contact Us Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About;