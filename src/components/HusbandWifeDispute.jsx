import React, { useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Button,
  Fade,
  Grow,
} from "@mui/material";
import Breadcrumb from "../components/Breadcrumb";
import husbandWifeDispute from "../assets/images/services/husband and wife dispute.mp4";

const HusbandWifeDispute = () => {
  useEffect(() => {
    document.title = "Husband Wife Dispute Solution | Astro Om Solution";
  }, []);

  return (
    <Box sx={{ bgcolor: "transparent", minHeight: "100vh" }}>
      {/* Breadcrumb */}

      <Breadcrumb title="Husband Wife Dispute Solution" />


      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 4, md: 2, mt: 0, pt: 0 },
        }}
      >
        <Container maxWidth="xxl">
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
              <Fade in timeout={1200}>
                <Box>
                  <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                      color: "#ff9800",
                      fontWeight: "bold",
                      fontSize: { xs: "2.5rem", md: "3.5rem" },
                      mb: 1,
                    }}
                  >
                    Husband Wife Dispute Solution by Astro Om Solution
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.8,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      color: "#FFF"
                    }}
                    paragraph
                  >
                    Marriage is one of the most significant milestones in a
                    couple's life. A successful marriage is all about being
                    happy together without too many troubles. Unfortunately,
                    sometimes financial and work-related stress can creep in,
                    causing strain on the relationship. This stress can affect
                    how you and your partner communicate and connect with each
                    other.
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.8,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      color: "#FFFF"
                    }}
                    paragraph
                  >
                    If you find yourself facing challenges or disputes in your
                    married life, it's a good idea to seek help from our expert
                    astrologer. Our astrologer specializes in providing valuable
                    solutions for husband-wife relationship problems. They have
                    the expertise to offer guidance and advice to help you
                    overcome the issues that may be causing distress in your
                    marriage. So, don't hesitate to reach out to our astrologer
                    for the best husband-wife relationship problem solutions and
                    start working towards a happier and more harmonious married
                    life.
                  </Typography>
                </Box>
              </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grow in timeout={1000}>
                <Box
                  component="video"
                  src={husbandWifeDispute}
                  autoPlay
                  loop
                  muted
                  playsInline
                  alt="Love and Relationship Solutions"
                  sx={{
                    width: "100vw",    // Full viewport width
                    height: "70vh",    // 30% of viewport height
                    borderRadius: 3,
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                    objectFit: "cover",
                    mx: "auto",        // Centered display
                    display: "block",  // Remove inline spacing
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }}
                />
              </Grow>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="xxl" sx={{ py: { xs: 4, md: 4 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Grow in timeout={800}>
              <Card
                sx={{
                  borderRadius: 3,
                  bgcolor: "white",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography
                    variant="h4"
                    sx={{ color: "#ff9800", fontWeight: "medium", mb: 3 }}
                    gutterBottom
                  >
                    How To Get Solution Of Husband Wife Dispute Solution ?
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    The relationship between a husband and wife is built on
                    trust and love. Marriage is a special bond between two
                    people who promise to support and love each other for life.
                    However, sometimes, disagreements arise after marriage.
                    These disagreements can escalate into bigger problems,
                    leading to unhappiness. Most couples aim for a happy and
                    peaceful married life without fights, but disputes do
                    happen. Some couples work together to resolve these issues,
                    while others choose to end their relationship. If you're
                    facing such problems, there are solutions available to help
                    improve your husband-wife relationship.
                  </Typography>
                  <List sx={{ mb: 2 }}>
                    <ListItem>
                      <ListItemText
                        primary="Mutual understanding"
                        primaryTypographyProps={{
                          color: "text.secondary",
                          fontSize: "1rem",
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Lack of trust"
                        primaryTypographyProps={{
                          color: "text.secondary",
                          fontSize: "1rem",
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Lack of love"
                        primaryTypographyProps={{
                          color: "text.secondary",
                          fontSize: "1rem",
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Affair with other person"
                        primaryTypographyProps={{
                          color: "text.secondary",
                          fontSize: "1rem",
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Family issues"
                        primaryTypographyProps={{
                          color: "text.secondary",
                          fontSize: "1rem",
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Financial problems"
                        primaryTypographyProps={{
                          color: "text.secondary",
                          fontSize: "1rem",
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Different personalities"
                        primaryTypographyProps={{
                          color: "text.secondary",
                          fontSize: "1rem",
                        }}
                      />
                    </ListItem>
                  </List>
                  <Typography
                    variant="h4"
                    sx={{ color: "#ff9800", fontWeight: "medium", mb: 3 }}
                    gutterBottom
                  >
                    Get Cure Of Husband Wife Relationship Problem Solution
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    The bond between a husband and wife is incredibly special.
                    It's like they share one soul in two bodies. Trust and
                    understanding are crucial in this relationship. Sometimes,
                    issues can arise that can harm the relationship, and that's
                    when you might need help to solve husband-wife relationship
                    problems. Even small problems can grow into big ones. Both
                    the husband and wife have a vital role in maintaining a
                    happy marriage. When you express love for your partner, it
                    can create a lasting connection. However, if you enter a
                    marriage with misunderstandings and conflicts, it can lead
                    to many problems and disruptions in your life.
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ color: "#ff9800", fontWeight: "medium", mb: 3 }}
                    gutterBottom
                  >
                    Why You Will Choose Our Astrologer?
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Our astrologer possesses extensive expertise in the field of
                    astrology, making him the top choice for resolving love
                    marriage problems. With clients spanning the globe, our
                    astrologer is well-equipped to provide you with the most
                    effective marriage problem solutions, ensuring the
                    elimination of all issues in your marital life. His
                    husband-wife relationship problem solutions have a proven
                    track record of delivering successful results in a short
                    period. Don't hesitate to consult our world-famous
                    astrologer to effectively address and overcome all the
                    challenges in your husband-wife relationship.
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ color: "#ff9800", fontWeight: "medium", mb: 3 }}
                    gutterBottom
                  >
                    What Makes Our Astrologer Different From Others?
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    If you're looking for help with marriage issues, you've come
                    to the right place. Online Astrology Predictions focus on
                    the planets and stars that affect people's lives.
                    Astrologers study how these celestial bodies can have good
                    or bad effects on us. Our astrologer, who started learning
                    about this from a young age, has deep knowledge of the
                    universe. His passion is to help people overcome life's
                    challenges. Thanks to God's blessings, he's well-versed in
                    astrology and can offer effective solutions for husband-wife
                    relationship problems. Contact us now to solve all your
                    problems.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      mt: 3,
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: "none",
                      fontWeight: "medium",
                      bgcolor: "#ff9800",
                      "&:hover": {
                        bgcolor: "#e68900",
                        transform: "scale(1.05)",
                        transition: "all 0.3s ease-in-out",
                      },
                    }}
                    href="/contactus"
                  >
                    Contact Us Now
                  </Button>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HusbandWifeDispute;
