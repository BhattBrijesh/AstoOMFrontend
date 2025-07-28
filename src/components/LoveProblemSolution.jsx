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
import loveProblemSolution from "../assets/images/services/love problem solution.mp4";

const LoveProblemSolution = () => {
  useEffect(() => {
    document.title = "Love Problem Solution | Astro Om Solution";
  }, []);

  return (
    <Box sx={{ bgcolor: "transparent", minHeight: "100vh" }}>
      {/* Breadcrumb */}

      <Breadcrumb title="Love Problem Solution" />


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
                    Love Problem Solution by Astro Om Solution
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
                    Many people face love problems in their relationships due to
                    today's hectic lifestyles. If you're looking for a solution,
                    Om Astro Service is your best choice. Dissatisfaction often
                    creeps into your life when love issues are not resolved.
                  </Typography>
                </Box>
              </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grow in timeout={1000}>
                <Box
                  component="video"
                  src={loveProblemSolution}
                  autoPlay
                  loop
                  muted
                  playsInline
                  alt="Love and Relationship Solutions"
                  sx={{
                    width: "100vw",    // Full viewport width
                    height: "78vh",    // 30% of viewport height
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
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Although finding love problem solutions are common in
                    relationships, the key is finding an easy solution. You no
                    longer have to search elsewhere for a love problem
                    specialist. Astrologer Subhash Joshi is the best option for
                    resolving love issues.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Om Astro Service's love problem specialist has successfully
                    helped numerous clients across India with their love
                    problems. We also offer solutions for other life challenges,
                    such as Marriage Problem Solution, husband-wife disputes,
                    divorce problem solution, love marriage problem, horoscope
                    reading, family problem solution and more.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Our expert astrologer can use their knowledge and experience
                    in astrology to easily resolve these types of problems.
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
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography
                    variant="h4"
                    sx={{ color: "#ff9800", fontWeight: "medium", mb: 3 }}
                    gutterBottom
                  >
                    Love Problem Specialist
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Love problems happen when we don't understand our partner or
                    don't take our responsibilities seriously in life. Love is a
                    powerful and wonderful force that can help us overcome our
                    self-centeredness and create the right conditions for
                    healing our relationship.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    If you're facing love problems right now and want to find a
                    solution, meet our expert at Om Astro Service. They'll give
                    you precise advice to fix your love issues.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Our expert in solving love problems is well-known worldwide
                    for using astrology to provide effective and long-lasting
                    solutions to love problems.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    For nearly 20 years, he's been making a big difference in
                    the lives of people in many countries around the world. He's
                    really good at solving love problems using astrology, and
                    his solutions are top-notch. He can help with all sorts of
                    love problems, like slow-moving relationships or reuniting
                    with lost loves.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    True love, a precious gift from God, is invaluable. Losing
                    it can make life very difficult
                  </Typography>
                  <List sx={{ mb: 2 }}>
                    <ListItem>
                      <ListItemText
                        primary="Are you afraid of losing your one true love?"
                        primaryTypographyProps={{
                          color: "text.secondary",
                          fontSize: "1rem",
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Is your marriage causing you a lot of problems?"
                        primaryTypographyProps={{
                          color: "text.secondary",
                          fontSize: "1rem",
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Do you find it hard to live with your extended family?"
                        primaryTypographyProps={{
                          color: "text.secondary",
                          fontSize: "1rem",
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Is your partner not paying enough attention to you?"
                        primaryTypographyProps={{
                          color: "text.secondary",
                          fontSize: "1rem",
                        }}
                      />
                    </ListItem>
                  </List>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Many situations can lead to love problems. We offer
                    top-notch solutions using Vedic astrology. Our skilled
                    astrologer can give you tips and mantras to improve your
                    relationship, prevent breakups, and avoid divorce.
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid>

          <Grid item xs={12}>
            <Grow in timeout={1000}>
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
                    How to deal with love life issues?
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Love relationships, just like any other, have their highs
                    and lows. How a couple deals with these challenges
                    determines the fate of their love. Some couples manage to
                    overcome these love problems, while others struggle to do
                    so. When you're facing love problems, you can reach out to
                    Om
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Astro Service for guidance. Their love problem solution
                    specialist astrologer can quickly help you resolve your love
                    issues, so you can move past them swiftly.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Get your love back in your life, and you'll soon have a
                    joyful relationship with your partner.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Consulting an love problem solution astrologer can assist
                    you in resolving problems and removing things that cause
                    fights in your relationship.
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid>

          <Grid item xs={12}>
            <Grow in timeout={1100}>
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
                    Why do you need love problem solution?
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Our love problem expert astrologer for solving love problems
                    will always be available to help you improve your life. You
                    can easily reach out to him anytime. He's a genuine love
                    problem solving astrologer and his work doesn't harm anyone
                    since it's based on his prayers to the gods.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    If you're dealing with love troubles, don't worry. Reach out
                    to Om Astro Service, and they'll help you solve your love
                    problems. Our specialist astrologers have the perfect
                    solutions to make you happy with your true love again,
                    transforming your life forever. Contact us now to solve your
                    all problems.
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

export default LoveProblemSolution;
