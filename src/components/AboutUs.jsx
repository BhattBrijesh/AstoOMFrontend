import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Breadcrumb from "../components/Breadcrumb";

const About = () => {
  const [language, setLanguage] = useState("en");
  const navigate = useNavigate();

  useEffect(() => {
    document.title =
      "About Us | Om Astro Soultions - Expert Vedic Astrology Services";
  }, []);

  const englishContent = {
    title: "About Om Astro Soultions",
    subtitle: "Your Trusted Partner in Vedic Astrology for Life Guidance",
    intro: `Welcome to Om Astro Soultions, India's premier destination for authentic Vedic astrology services. We are dedicated to helping thousands of individuals and families navigate life's challenges through the ancient wisdom of Jyotish Shastra (Vedic Astrology). With over 20 years of experience, our certified astrologers have transformed countless lives by providing accurate predictions, practical remedies, and spiritual guidance aligned with planetary influences.`,

    mission: `Our mission is simple: to empower you with cosmic knowledge so you can make informed decisions about your future, overcome obstacles, and build a life of harmony, prosperity, and fulfillment.`,

    section1Title: "Why Choose Om Astro Soultions?",
    section1Content: `In today's complex world, many people feel lost, confused, or stuck in life. They struggle with unexplained delays, recurring failures, or emotional turmoil without understanding the root cause. This is where Vedic astrology comes in. Unlike modern psychology or self-help, Vedic astrology looks at your birth chart (Kundali), which acts like a cosmic blueprint of your life.`,

    section1List: [
      "Detailed horoscope analysis and interpretation",
      "Personalized remedies (Gemstones, Mantras, Rituals)",
      "Compatibility matching for marriage (Kundali Milan)",
      "Career and business guidance aligned with your planets",
      "Health astrology and wellness recommendations",
      "Financial planning based on your prosperity timings",
      "Legal case guidance with favorable timing",
    ],

    section2Title: "Our Comprehensive Services",
    section2Intro: `We offer expert astrological solutions across all major life areas:`,

    section3Title: "The Vedic Astrology Advantage",
    section3Content: `Vedic astrology is not superstition—it is a 5,000-year-old science that understands the relationship between celestial bodies and human affairs.`,

    section4Title: "Meet Our Expert Astrologers",
    section4Content: `Our team consists of certified Vedic astrologers trained at prestigious Sanskrit universities and with decades of practical experience.`,

    section5Title: "Thousands of Success Stories",
    section5Content: `Over two decades, we have guided thousands of people through life's most challenging moments and transformed their lives.`,

    section6Title: "Why Now is the Time to Consult",
    section6Content: `Life is not random. Planetary positions are moving, and certain periods bring specific opportunities or challenges.`,

    cta: "Begin Your Journey to Clarity and Success Today",
  };

  const hindiContent = {
    title: "अस्त्रो ओम सॉल्यूशंस के बारे में",
    subtitle: "जीवन मार्गदर्शन के लिए आपका विश्वसनीय वैदिक ज्योतिष साथी",
    intro: `अस्त्रो ओम सॉल्यूशंस में आपका स्वागत है, भारत का सबसे विश्वसनीय वैदिक ज्योतिष सेवा केंद्र।`,
    mission: `हमारा मिशन सरल है: आपको ब्रह्मांडीय ज्ञान से सशक्त करना।`,
    section1Title: "अस्त्रो ओम सॉल्यूशंस को क्यों चुनें?",
    section1Content: `आज की जटिल दुनिया में कई लोग खोया हुआ महसूस करते हैं।`,
    section1List: [
      "विस्तृत कुंडली विश्लेषण और व्याख्या",
      "व्यक्तिगत उपाय (रत्न, मंत्र, अनुष्ठान)",
      "विवाह के लिए अनुकूलता मिलान",
      "करियर और व्यवसाय मार्गदर्शन",
      "स्वास्थ्य ज्योतिष और सिफारिशें",
      "वित्तीय योजना",
      "कानूनी मामलों का मार्गदर्शन",
    ],
    section2Title: "हमारी व्यापक सेवाएँ",
    section2Intro: `हम जीवन के सभी प्रमुख क्षेत्रों में विशेषज्ञ समाधान प्रदान करते हैं:`,
    section3Title: "वैदिक ज्योतिष का लाभ",
    section3Content: `वैदिक ज्योतिष एक 5,000 साल पुरानी विज्ञान है।`,
    section4Title: "हमारे विशेषज्ञ ज्योतिषी",
    section4Content: `हमारी टीम प्रतिष्ठित विश्वविद्यालयों से प्रशिक्षित है।`,
    section5Title: "हजारों सफलता की कहानियाँ",
    section5Content: `हमने हजारों लोगों को उनके जीवन में बदलाव लाने में मदद की है।`,
    section6Title: "अब परामर्श लेने का सही समय क्यों है?",
    section6Content: `जीवन यादृच्छिक नहीं है। ग्रहों की स्थिति बदल रही है।`,
    cta: "आज ही स्पष्टता और सफलता की ओर अपनी यात्रा शुरू करें",
  };

  const content = language === "en" ? englishContent : hindiContent;

  const handleBack = () => navigate(-1);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello, I would like to know more about your astrology services. Please contact me.`
    );
    window.open(
      `https://api.whatsapp.com/send?phone=919417339708&text=${message}`
    );
  };

  return (
    <Box sx={{ minHeight: "100vh", position: "relative" }}>
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      >
        <source src="/assets/videos/astro-background.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(26, 42, 68, 0.75)", // 75% dark overlay
          zIndex: -1,
        }}
      />

      {/* Breadcrumb */}
      <Breadcrumb title="About Us" />

      {/* Language Toggle + Back Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, md: 4 },
          py: 2,
          bgcolor: "rgba(26, 42, 68, 0.9)",
          backdropFilter: "blur(10px)",
          position: "relative",
          zIndex: 10,
        }}
      >
        <Button
          variant="outlined"
          size="small"
          onClick={handleBack}
          sx={{
            color: "#fff",
            borderColor: "#ff9800",
            "&:hover": {
              borderColor: "#fff",
              bgcolor: "rgba(255, 152, 0, 0.1)",
            },
          }}
        >
          ← {language === "en" ? "Back" : "वापस जाएँ"}
        </Button>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant={language === "en" ? "contained" : "outlined"}
            size="small"
            onClick={() => setLanguage("en")}
            sx={{
              textTransform: "none",
              bgcolor: language === "en" ? "#ff9800" : "transparent",
              color: language === "en" ? "#fff" : "#ff9800",
              borderColor: "#ff9800",
            }}
          >
            English
          </Button>
          <Button
            variant={language === "hi" ? "contained" : "outlined"}
            size="small"
            onClick={() => setLanguage("hi")}
            sx={{
              textTransform: "none",
              bgcolor: language === "hi" ? "#ff9800" : "transparent",
              color: language === "hi" ? "#fff" : "#ff9800",
              borderColor: "#ff9800",
            }}
          >
            हिन्दी
          </Button>
        </Box>
      </Box>

      {/* Hero Section - with transparent content */}
      <Box
        sx={{
          py: { xs: 4, md: 6 },
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              color: "#ff9800",
              fontWeight: 700,
              mb: 1,
              textAlign: "center",
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
            }}
          >
            {content.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              textAlign: "center",
              mb: 2,
              fontSize: { xs: "1rem", md: "1.2rem" },
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            {content.subtitle}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#ddd",
              textAlign: "center",
              lineHeight: 1.7,
              maxWidth: "900px",
              mx: "auto",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
              fontSize: { xs: "0.95rem", md: "1rem" },
            }}
          >
            {content.intro}
          </Typography>
        </Container>
      </Box>

      {/* Mission */}
      <Container maxWidth="lg" sx={{ py: 3, position: "relative", zIndex: 1 }}>
        <Card
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            borderLeft: "5px solid #ff9800",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              sx={{ color: "#ff9800", fontWeight: 600, mb: 2 }}
            >
              {language === "en" ? "Our Mission" : "हमारा मिशन"}
            </Typography>
            <Typography variant="body1" sx={{ color: "#333", lineHeight: 1.7 }}>
              {content.mission}
            </Typography>
          </CardContent>
        </Card>
      </Container>

      {/* Main Content Sections */}
      <Container maxWidth="lg" sx={{ py: 3, position: "relative", zIndex: 1 }}>
        {/* Section 1 */}
        <Card
          sx={{
            mb: 3,
            bgcolor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              sx={{ color: "#ff9800", fontWeight: 600, mb: 2 }}
            >
              {content.section1Title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#333",
                lineHeight: 1.8,
                mb: 2,
              }}
            >
              {content.section1Content}
            </Typography>
            <Box sx={{ ml: 2 }}>
              {content.section1List.map((item, idx) => (
                <Typography
                  key={idx}
                  variant="body2"
                  sx={{
                    color: "#555",
                    mb: 0.8,
                    fontSize: "0.95rem",
                    fontWeight: 500,
                  }}
                >
                  ✓ {item}
                </Typography>
              ))}
            </Box>
          </CardContent>
        </Card>

        {/* Services Grid */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              color: "#ff9800",
              fontWeight: 600,
              mb: 2,
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
            }}
          >
            {content.section2Title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#ddd",
              mb: 2,
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
            }}
          >
            {content.section2Intro}
          </Typography>
          <Grid container spacing={2}>
            {[
              "Education & Foreign Study",
              "Health & Wellness",
              "Police Cases & Court Matters",
              "Finance & Property",
              "Career & Business",
              "Marriage & Relationships",
            ].map((service, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card
                  sx={{
                    height: "100%",
                    bgcolor: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 152, 0, 0.2)",
                    transition: "all 0.3s",
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 8px 24px rgba(255, 152, 0, 0.3)",
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "#ff9800",
                        fontWeight: 600,
                        fontSize: "0.95rem",
                      }}
                    >
                      ✓ {service}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Section 3 */}
        <Card
          sx={{
            mb: 3,
            bgcolor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              sx={{ color: "#ff9800", fontWeight: 600, mb: 2 }}
            >
              {content.section3Title}
            </Typography>
            <Typography variant="body1" sx={{ color: "#333", lineHeight: 1.8 }}>
              {content.section3Content}
            </Typography>
          </CardContent>
        </Card>

        {/* Section 4 */}
        <Card
          sx={{
            mb: 3,
            bgcolor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              sx={{ color: "#ff9800", fontWeight: 600, mb: 2 }}
            >
              {content.section4Title}
            </Typography>
            <Typography variant="body1" sx={{ color: "#333", lineHeight: 1.8 }}>
              {content.section4Content}
            </Typography>
          </CardContent>
        </Card>

        {/* Section 5 */}
        <Card
          sx={{
            mb: 3,
            bgcolor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              sx={{ color: "#ff9800", fontWeight: 600, mb: 2 }}
            >
              {content.section5Title}
            </Typography>
            <Typography variant="body1" sx={{ color: "#333", lineHeight: 1.8 }}>
              {content.section5Content}
            </Typography>
          </CardContent>
        </Card>

        {/* Section 6 */}
        <Card
          sx={{
            mb: 4,
            bgcolor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              sx={{ color: "#ff9800", fontWeight: 600, mb: 2 }}
            >
              {content.section6Title}
            </Typography>
            <Typography variant="body1" sx={{ color: "#333", lineHeight: 1.8 }}>
              {content.section6Content}
            </Typography>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card
          sx={{
            background:
              "linear-gradient(135deg, rgba(255, 152, 0, 0.9) 0%, rgba(242, 140, 56, 0.9) 100%)",
            backdropFilter: "blur(10px)",
            py: 4,
            textAlign: "center",
            boxShadow: "0 8px 32px rgba(255, 152, 0, 0.3)",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              sx={{
                color: "#fff",
                fontWeight: 600,
                mb: 3,
                fontSize: { xs: "1.2rem", md: "1.4rem" },
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              }}
            >
              {content.cta}
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="contained"
                size="large"
                href="/contactus"
                sx={{
                  fontWeight: 600,
                  px: { xs: 2, md: 4 },
                  bgcolor: "#fff",
                  color: "#ff9800",
                  textTransform: "none",
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                  "&:hover": {
                    bgcolor: "#f0f0f0",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {language === "en" ? "Contact Us" : "हमसे संपर्क करें"}
              </Button>

              <Button
                variant="contained"
                size="large"
                startIcon={<WhatsAppIcon />}
                onClick={handleWhatsApp}
                sx={{
                  fontWeight: 600,
                  px: { xs: 2, md: 4 },
                  bgcolor: "#25D366",
                  color: "#fff",
                  textTransform: "none",
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                  "&:hover": {
                    bgcolor: "#1ebe5a",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {language === "en" ? "WhatsApp Now" : "व्हाट्सऐप करें"}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>

      {/* Extra spacing at bottom */}
      <Box sx={{ py: 3 }} />
    </Box>
  );
};

export default About;
