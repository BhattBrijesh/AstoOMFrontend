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
import loveBanner from "../assets/images/3.png";

const LoveProblemSolution = () => {
  useEffect(() => {
    document.title = "Love Marriage Problem Solution | Astro Om Solution";
  }, []);

  return (
    <Box sx={{ bgcolor: "transparent", minHeight: "100vh" }}>
      {/* Breadcrumb */}

      <Breadcrumb title="Love Marriage Problem Solution" />


      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          bgcolor: "linear-gradient(135deg, #fff8e1 0%, #fef3ec 100%)",
          borderBottom: "1px solid",
          borderColor: "grey.200",
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
                    Love Marriage Problem Solution by Astro Om Solution
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
                    Need help with love marriage issues over the phone? Love
                    marriage Problems are becoming more common. If you're in a
                    similar situation and want a quick solution, contact the top
                    love marriage astrologer in India, Om Astro Service. They've
                    successfully helped many couples turn their relationships
                    into marriages.
                  </Typography>
                </Box>
              </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grow in timeout={1000}>
                <Box
                  component="img"
                  src={loveBanner}
                  alt="Love and Relationship Solutions"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 3,
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                    objectFit: "cover",
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
      <Container maxWidth="xxl" sx={{ py: { xs: 6, md: 8 } }}>
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
                    Today, many young people are facing issues in their love
                    relationships and marriages, which can lead to sadness, lack
                    of self-confidence, reduced job performance, and overall
                    unhappiness. As a result, the demand for astrologers who can
                    solve love marriage problems fast and instant which has
                    increased significantly.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Are you having trouble marrying the person you love because
                    your parents don't agree? Or, are differences in money and
                    lifestyle getting in the way? Maybe your partner is
                    uncertain? Don't worry, there's a love marriage problem
                    solution. Try love marriage solution astrology for answers.
                    A skilled astrologer can help you achieve your dream
                    marriage smoothly.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Om Astro Service, a highly skilled love marriage astrologer,
                    possesses a unique expertise in the realm of love astrology.
                    With an impressive track record of two decades in the field,
                    he has risen to become India's foremost authority in
                    resolving love marriage issues. His remarkable abilities
                    have successfully guided over 20,000 clients, enabling them
                    to unite in matrimony with the partners of their dreams.
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
                    Find Your Love Marriage Problem Solution with the Famous Om
                    Astro Solution
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    In recent times, people's high expectations and strong
                    desire for material things have caused a lot of problems in
                    their relationships. Marriages are breaking apart, and love
                    relationships are not lasting, which makes life more
                    difficult for many. While society is becoming more accepting
                    of love marriages, our families are often hesitant to
                    support them. That's where a love marriage problem solution
                    astrologer can help.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Om Astro Service is renowned as a specialist in resolving
                    love marriage problems. With a wealth of experience, he has
                    successfully guided numerous clients through the complex
                    issues that often arise in love marriages. These challenges
                    may stem from various factors, including parental
                    disapproval, financial instability on the groom's side,
                    interfaith marriage dilemmas, or doubts and uncertainties
                    from both the bride and groom. Om Astro Service's expertise
                    and guidance have been instrumental in helping couples
                    navigate these obstacles and achieve their desired love
                    marriages.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Many couples worldwide have found happiness and received
                    blessings for their marriages thanks to his horoscope
                    predictions and simple remedies. Our love marriage problem
                    expert is highly knowledgeable in all aspects of astrology,
                    especially love astrology. He's widely recognized as one of
                    India's top love marriage solution experts.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Anyone around the world looking for a solution to love
                    marriage issues can contact Om Astro Service. Our expert,
                    Baba Ji, is known for solving intercaste love marriage
                    problems, and no one has left disappointed. He's dedicated
                    to bringing happiness and contentment into people's lives,
                    which happens when you have the right partner by your side
                    on life's journey.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    If you think you've met the perfect person for you, but your
                    relationship isn't progressing as you'd like, just reach out
                    to our love problem solution expert, Om Astro Service. You
                    can find their contact information on our 'Contact Us' page.
                    You can either call, whatsapp them or send them an email.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Sometimes, your friends and family may give you advice about
                    your partner, but they only know a little. Astrology is a
                    special kind of science that can see things that others
                    can't. It can even tell you about the past, present, and
                    future. If you talk to a Love Astrologer who really knows
                    their stuff, they can be a great guide and give you helpful
                    advice for your marriage based on astrology.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Om Astro Service is a top astrologer specializing in solving
                    marriage problems and various other aspects of astrology.
                    They can help with issues like husband-wife conflicts,
                    divorce problems, love marriage challenges, horoscope
                    readings, and family troubles. They take a comprehensive
                    approach to understand your love marriage issues and provide
                    effective solutions to solve them.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Om Astro Service is a well-known astrologer who helps people
                    with love marriage issues. He's respected for his honesty
                    and sincerity by his clients. He doesn't make false promises
                    or mislead anyone by guaranteeing marriage or solutions
                    without first analyzing their birth charts, preferably both
                    partners' charts.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    He has a popular solution for love marriage issues in India,
                    which many people appreciate both in India and around the
                    world. His approach has become a standard for others in the
                    astrology field. Reach out to us today to get help with your
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

export default LoveProblemSolution;
