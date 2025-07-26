import React, { useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Fade,
  Grow,
} from "@mui/material";
import Breadcrumb from "../components/Breadcrumb";
import marriageProblem from "../assets/images/services/marriage problem.mp4";

const MarriageProblemSolution = () => {
  useEffect(() => {
    document.title = "Marriage Problem Solution | Om Astro Service";
  }, []);

  return (
    <Box sx={{ bgcolor: "transparent", minHeight: "100vh" }}>
      {/* Breadcrumb */}

      <Breadcrumb title="Marriage Problem Solution" />


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
                      mb: 3,
                    }}
                  >
                    Marriage Problem Solution by Astro Om Solution
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
                    Are you facing problems in married life?
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
                    Om Astro Service is recognized as a leading best Marriage
                    Problem Solution Specialist. With a proven track record, he
                    offers effective solutions to help improve your marriage
                    life and guiding it towards a more harmonious and fulfilling
                    path.
                  </Typography>
                </Box>
              </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grow in timeout={1000}>
                <Box
                  component="video"
                  src={marriageProblem}
                  autoPlay
                  loop
                  muted
                  playsInline
                  alt="Love and Relationship Solutions"
                  sx={{
                    width: "100vw",    // Full viewport width
                    height: "80vh",    // 30% of viewport height
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
                <CardContent sx={{ p: { xs: 1, md: 2 } }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    We often hear that marriage is meant to be perfect, but in
                    reality, every marriage is unique. Every couple faces some
                    small issues, but when they work together to understand and
                    solve them, their marriage stays happy. If not, these
                    problems can turn a good marriage into a difficult one.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Problems can be harmful and can harm our relationships,
                    including marriages. Love marriages are often very
                    appealing, and many people want them. If your marriage is
                    facing difficulties, you can find solutions at Om Astro
                    Service, a specialist in solving marriage problems. We offer
                    marriage problem solutions to couples worldwide.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    According to statistics, whether it's an arranged marriage
                    or a love marriage, it's important to get advice from an
                    astrologer who looks at the stars and planets. The
                    astrologer checks if both people are a good match and gives
                    them advice to follow. This can make the marriage safer. Om
                    Astro Service has a track record of providing solutions for
                    marriage problems that really work. Contact our specialist
                    today for instant solutions to your marriage problems.
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid>

          <Grid item xs={12}>
            <Grow in timeout={900}>
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
                <CardContent sx={{ p: { xs: 1, md: 2 } }}>
                  <Typography
                    variant="h4"
                    sx={{ color: "#ff9800", fontWeight: "medium", mb: 3 }}
                    gutterBottom
                  >
                    Get Marriage Problem Solution through Astrology
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Marriage is when two people come together with love and
                    understanding. It's a special bond between a husband and
                    wife. In India, there are many different cultures and
                    religions, so people may have different beliefs. Sometimes,
                    your partner may hurt you, and your marriage may feel like
                    it's not working. But astrology can help solve marriage
                    problems by resolving conflicts and misunderstandings. It's
                    important to address these issues early to avoid bigger
                    problems later on.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Sometimes, when you're in a relationship, you might face
                    difficulties that make you think about marriage. You don't
                    want to be hurt anymore by your partner. These changes might
                    be because of planetary movements or astrological signs in
                    your birth chart. But don't worry, astrology can provide
                    positive solutions for marriage problems. It can help with
                    any issues you face in your relationship, whether before or
                    after getting married. It's important to approach this with
                    a calm mind, as a calm person is more likely to turn to
                    astrology for help, rather than getting angry.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    When our partner plays with our emotions, it can be very
                    painful. Some partners realize their mistake and try to make
                    amends, while others don't. Dealing with the ones who don't
                    can be confusing and frustrating. You might seek advice on
                    how to handle the situation, but figuring out the right
                    solution can be confusing. This is where marriage problem
                    solutions come in handy. Om Astro Service, a highly regarded
                    astrologer, can help you find a simple solution to your
                    problems. Don't hesitate to reach out for Free Astrology
                    Tips and make a decision to resolve your issues. Reach out
                    to us today to get help with your all problems.
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

export default MarriageProblemSolution;
