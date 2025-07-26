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
import familyProblem from "../assets/images/services/family.mp4";

const FamilyProblemSolution = () => {
  useEffect(() => {
    document.title = "Family Problem Solution | Astro Om Solution";
  }, []);

  return (
    <Box sx={{ bgcolor: "transparent", minHeight: "100vh" }}>
      {/* Breadcrumb */}

      <Breadcrumb title="Family Problem Solution" />


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
                    Family Problem Solution by Astro Om Solution
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
                    Family conflicts are quite common, and even in the best of
                    families, disagreements can occur. This is a normal part of
                    life, but when disputes become a recurring problem, they can
                    significantly affect the overall well-being of the family.
                    Sometimes, these disputes remain unresolved, leading to
                    frustration and isolation among family members. If you find
                    that arguments are frequently causing tension and no one
                    seems to find a solution, it might be time to seek
                    assistance and explore ways to improve the harmony within
                    your family.
                  </Typography>
                </Box>
              </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grow in timeout={1000}>
                <Box
                  component="video"
                  src={familyProblem}
                  autoPlay
                  loop
                  muted
                  playsInline
                  alt="Love and Relationship Solutions"
                  sx={{
                    width: "100vw",    // Full viewport width
                    height: "90vh",    // 30% of viewport height
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
      <Container maxWidth="xxl" sx={{ py: { xs: 2, md: 4 } }}>
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
                    In today's world, as fashion trends evolve and families
                    become more private, different family members have their own
                    needs and desires. This can lead to conflicts and boredom
                    within the family. On the other hand, various issues like
                    financial problems, trust issues, lack of communication, and
                    difficulties in having children can also strain family
                    relationships. Additionally, issues related to joint
                    families, love marriages, favoritism, addictions, and
                    intolerance towards differences can further contribute to
                    family problems.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Family is important for everyone. We all want a happy family
                    without fights. Your family supports you when life is tough.
                    But each family member has their own way of acting.
                    Sometimes, families face hard times. When everyone
                    understands each other, the family stays strong. But not
                    everyone is lucky. If you have family problems, you can talk
                    to a Family Problem Solution Astrologer anytime.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    A Family Problem Solver Astrologer has assisted numerous
                    individuals in resolving their family issues. Families often
                    go through ups and downs, but sometimes, small disagreements
                    can turn into big problems without us realizing it. If these
                    issues aren't addressed promptly, there's a risk of family
                    members drifting apart. Fortunately, our renowned Family
                    Problem Solver Astrologer specializes in resolving various
                    family problems.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    The bond between a husband and wife is vital for every
                    family. This relationship is built on love and plays a
                    special role in family life. In a family, various
                    individuals come together as one unit. In this relationship,
                    people share their thoughts, emotions, and feelings with
                    each other. However, sometimes issues arise, leading to
                    family disputes involving father, mother, brothers, sisters,
                    husbands, and wives.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    To avoid such problems, it's essential for a man and a woman
                    to build a strong relationship. Family Problem Solution
                    Astrologers can provide effective solutions to resolve
                    family disputes.
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
                <CardContent sx={{ p: { xs: 2, md: 2 } }}>
                  <Typography
                    variant="h4"
                    sx={{ color: "#ff9800", fontWeight: "medium", mb: 3 }}
                    gutterBottom
                  >
                    Online Family Problem Solution through Astrology
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    In every family, there are good times and bad times. But
                    within the family, there's usually one person who plays a
                    very important role, and that's the father. He's like the
                    leader of the family and makes decisions for the family's
                    well-being. Families often face various issues, especially
                    related to their children, and solving these problems can be
                    tough. Sometimes, these problems don't go away on their own.
                    That's when you can seek help from a Family Problem Solution
                    Astrologer. These astrologers are experts in resolving
                    family disputes and can provide accurate and quick
                    solutions.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Family disputes can also find solutions through astrology.
                    Astrology is a fascinating discipline that can be used to
                    resolve issues between people, including family members.
                    Astrology has the unique ability to closely examine and
                    understand the problems that can arise within families due
                    to various reasons, such as financial difficulties or
                    misunderstandings. It possesses the power to transform
                    undesirable situations into more favorable ones.
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

export default FamilyProblemSolution;
