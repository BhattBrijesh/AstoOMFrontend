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
import loveBanner from "../assets/images/6.png";

const HoroscopeReading = () => {
  useEffect(() => {
    document.title = "Horoscope Reading | Astro Om Solution";
  }, []);

  return (
    <Box sx={{ bgcolor: "transparent", minHeight: "100vh" }}>

      <Breadcrumb title="Horoscope Reading" />


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
                    Horoscope Reading by Astro Om Solution
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
                    A horoscope is like a special report that you get when
                    you're born. It's created using your birth date, time, and
                    where you were born. It's not something made up randomly;
                    it's like a message from your past life. Your horoscope
                    can't be changed, not even by Brahma, who made it. So, how
                    do astrologers help us understand it? And what's the correct
                    way to read a horoscope?
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
                    Horoscopes are like a special report that tells you about
                    your past, what's happening now, and what might happen in
                    the future. They can help you figure out problems, things
                    that might get in your way, good chances, and everything you
                    might experience in your life right now.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Discover the fascinating world of Vedic astrology and gain a
                    deeper understanding of how it impacts various aspects of
                    your life. At Om Astro Service, we provide comprehensive
                    horoscope analyses that offer predictions for your daily,
                    weekly, monthly, and yearly horoscopes. Explore the
                    intricate connections between celestial movements and your
                    life's journey with our expert astrological insights.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    A horoscope, also called a birth chart, can be known by
                    various names like natal chart, kundli, and Janam kundali,
                    depending on your language.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Regardless of the name, it's the basis of Vedic Astrology.
                    It shows where the planets and nakshatras were when you were
                    born.
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
                    Why Your Birth Chart Matters in Astrology?
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    What's the deal with horoscopes and why do people care about
                    them? Well, a horoscope is like a report card for your past
                    life and a preview of the good and bad stuff in your current
                    one. It helps you learn from your past mistakes and make
                    better choices now. Basically, it tells you why you're here
                    and what you should do to reach your goals. So, in a
                    nutshell, horoscopes help you understand your past, present,
                    and future.
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ color: "#ff9800", fontWeight: "medium", mb: 3 }}
                    gutterBottom
                  >
                    How to Understand a Birth Chart and Horoscope?
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Predictive Astrology is a scientific way to understand how
                    the positions of planets in the sky can affect a person. It
                    looks at both the good and bad influences of planets and
                    stars. When we read someone's horoscope, we study where the
                    planets were when they were born, and try to understand how
                    it might have an impact on their life. We also look at why
                    some planets and their combinations can bring both good and
                    bad things. We do a deep study to make predictions about
                    their future.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    There are 12 Zodiac Signs, and each person belongs to one of
                    them. These signs are grouped into four elements: Fire,
                    Water, Earth, and Air. In a horoscope, like the 12 Zodiac
                    Signs, there are 12 'bhavas.' Reading a horoscope means
                    figuring out how these three factors - Zodiac Signs,
                    elements, and bhavas - relate to each other and affect a
                    person's life. These twelve signs are sorted into four
                    groups based on their special traits. These groups are Fire,
                    Water, Earth, and Air.
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ color: "#ff9800", fontWeight: "medium", mb: 3 }}
                    gutterBottom
                  >
                    Exploring Astrology's 12 Houses: What They Mean and How They
                    Influence You
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    <b>The 1st house,</b> called Lagna Bhava or Ascendant in the
                    D-1 Chart, is associated with the person themselves, their
                    body, head, and ego. It's all about how you express
                    yourself, your personality, and your physical appearance.
                    This house is influenced by the Sun.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    <b>The 2nd house,</b> called Dhan Bhava, is linked to your
                    money and wealth. It's influenced by the planet Jupiter,
                    which signifies your financial situation connected to your
                    job, how you talk and express yourself, your profession, how
                    you make a living, and what you like.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    <b>The 3rd house,</b> called the Brother House. Mars is
                    linked to it and it stands for things like interest,
                    strength, drive, brothers, intentions, determination,
                    friends. It also symbolizes enthusiasm, quick decisions,
                    hobbies, goals, and your energy for life.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    <b>The 4th house,</b> called Sukha Bhava. In astrology, it's
                    associated with the mind, emotions, and happiness. It also
                    relates to things like education, owning property, buying
                    land, getting recognized, and taking it easy.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    <b>The 5th house,</b> called Putra Bhava, is all about
                    intelligence, learning, creativity, and kids. It's connected
                    to things like your past life, love, fun activities, taking
                    chances, and spiritual stuff. Jupiter is the planet that has
                    a special connection with this house.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    <b>The 6th house,</b> called Shatru Bhava, is associated
                    with Mars and Saturn. It relates to your ability to deal
                    with health problems, your overall well-being, and your
                    immune system. It also symbolizes your capacity to put in
                    effort, face challenges, and conquer adversaries.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    <b>The 7th house,</b> called Kalatra Bhava, is linked to
                    Venus. This house is all about your lasting connections with
                    people you care about, like your loved ones, business
                    partners, and friends. It's basically about how well you get
                    along and connect with others.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    <b>The 8th house,</b> called Ayur Bhava, is linked to
                    mysterious things. It's about hidden, deep aspects of life,
                    how long we live, and even death. It's connected to slow
                    changes and intense research. Saturn, the planet associated
                    with it, adds a mystical touch to these matters.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    <b>The 9th house,</b> called Bhagya Bhava or the luckiest
                    house, is ruled by Jupiter. It's all about your life's
                    purpose, your beliefs, and how you see the world. This house
                    covers religion, ethics, and life's principles.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    <b>The 10th house,</b> called Karma House. It's connected to
                    your job, how well you do in your job, your talents, how
                    people see you in public, politics, important roles, and
                    your reputation. Two planets, Mercury and Jupiter, have a
                    big influence on this house.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    <b>The 11th house,</b> called Labha Bhava, is linked to
                    Jupiter. It reveals how well someone can demonstrate their
                    value and shine in society. This house influences dreams,
                    achievements, money, possessions, friendships, and having
                    more than enough.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    <b>The 12th house,</b> called Vyaya Bhav, is linked to
                    Saturn and Ketu. It's all about your thoughts, freedom,
                    losses, spending energy and resources. It's like your inner
                    thoughts, trips to other countries, and times when you feel
                    sad or have problems.
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ color: "#ff9800", fontWeight: "medium", mb: 3 }}
                    gutterBottom
                  >
                    Let's break down these 12 houses to understand how they
                    affect someone's life.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    <b>The Quadrants ( Kendras) -</b> Houses number 1, 4, 7, and
                    10 hold a lot of importance.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    <b>The successful ( panapharas) –</b> Successful homes are
                    found at numbers 2, 5, 8, and 11.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    <b>The Cadent houses ( apoklimas) –</b> Here are the 3rd,
                    6th, 9th, and 12th houses
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    <b>The trines (Trikons) houses –</b> Houses 1, 5, and 9 in
                    astrology are really lucky and important. They can tell us a
                    lot about a person's money, health, reputation, and how they
                    fit into society. Astrologers need to pay extra attention to
                    these houses when they're reading horoscopes. And the first
                    house is super important because it's both special and lucky
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    <b>The upachayas house –</b> 3, 6, and 11 houses in
                    astrology symbolize hard work, rivalry, and success.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    <b>The Trika houses –</b> These houses, which we call
                    Duhsthanas Houses, are numbered 6, 8, and 12. These houses
                    show things like when you might have problems, sadness,
                    owing money, or even someone passing away.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    <b>The Longevity houses ( Ayu-sthanas) –</b> These houses
                    are all about lasting a long time, like a person's life, and
                    they can also symbolize the end of life. The third and
                    eighth houses are in this group.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    <b>The maraka-sthanas or the killer houses –</b> Houses 2
                    and 7 belong to this group.
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ color: "#ff9800", fontWeight: "medium", mb: 3 }}
                    gutterBottom
                  >
                    What does it mean to read a horoscope or birth chart
                    accurately?
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    How to correctly interpret a birth chart or horoscope: In my
                    view, the right approach to understanding a horoscope is to
                    connect the positions of planets with a person's past life.
                    Astrologers should try to figure out how a person's actions
                    in their previous life influenced the arrangement of planets
                    in their birth chart.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    Horoscopes have good and bad planet positions, but they
                    don't automatically bring good or bad luck. People have
                    their own choices, called free will, to do good or bad
                    things in life. There's also a chance to use the movements
                    of planets for help. Planets don't move much in our birth
                    charts, but they move in the sky, which we call 'transits.'
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8 }}
                    paragraph
                  >
                    An astrologer's job is to show people how to use these
                    planet movements to reduce the bad effects and make the most
                    of the good ones. Just finding the bad things in a horoscope
                    and suggesting rituals isn't the right way. Instead, the
                    right way is to help people make better choices in life,
                    correct their actions, and get the most out of their
                    horoscope. Contact us to solve your all problems related to
                    astrology.
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

export default HoroscopeReading;
