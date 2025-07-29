import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import aries from "../assets/images/ZodiacSignsVideo/aries.mp4";
import Taurus from "../assets/images/ZodiacSignsVideo/Taurus.mp4";
import Gemini from "../assets/images/ZodiacSignsVideo/Gemini.mp4";
import Cancer from "../assets/images/ZodiacSignsVideo/Cancer.mp4";
import Leo from "../assets/images/ZodiacSignsVideo/lio.mp4";
import Virgo from "../assets/images/ZodiacSignsVideo/Virgo.mp4";
import Libra from "../assets/images/ZodiacSignsVideo/Libra.mp4";
import Aquarius from "../assets/images/ZodiacSignsVideo/Aquarius.mp4";
import Capricorn from "../assets/images/ZodiacSignsVideo/Capricorn.mp4";
import Pisces from "../assets/images/ZodiacSignsVideo/Pisces.mp4";
import Scorpio from "../assets/images/ZodiacSignsVideo/Scorpio.mp4";
import Sagittarius from "../assets/images/ZodiacSignsVideo/Sagittarius.mp4";
import { motion } from "framer-motion";
import { getZodiaDaily } from "../api";

const ZodiacSigns = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const zodiacSigns = [
    {
      name: "Aries",
      hindi: "मेष",
      animation: aries,
    },
    {
      name: "Taurus",
      hindi: "वृषभ",
      animation: Taurus,
    },
    {
      name: "Gemini",
      hindi: "मिथुन",
      animation: Gemini,
    },
    {
      name: "Cancer",
      hindi: "कर्क",
      animation: Cancer,
    },
    {
      name: "Leo",
      hindi: "सिंह",
      animation: Leo,
    },
    {
      name: "Virgo",
      hindi: "कन्या",
      animation: Virgo,
    },
    {
      name: "Libra",
      hindi: "तुला",
      animation: Libra,
    },
    {
      name: "Scorpio",
      hindi: "वृश्चिक",
      animation: Scorpio,
    },
    {
      name: "Sagittarius",
      hindi: "धनु",
      animation: Sagittarius,
    },
    {
      name: "Capricorn",
      hindi: "मकर",
      animation: Capricorn,
    },
    {
      name: "Aquarius",
      hindi: "कुम्भ",
      animation: Aquarius,
    },
    {
      name: "Pisces",
      hindi: "मीन",
      animation: Pisces,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    hover: {
      y: -15,
      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.4)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const handleZodiacClick = async (zodiac) => {
    setLoading(true);
    try {
      const response = await getZodiaDaily({
        sign: zodiac.name.toLowerCase(),
        period: "DAILY",
      });
      navigate(`/zodiac/${zodiac.name.toLowerCase()}`, {
        state: { zodiac, horoscope: response.data },
      });
    } catch (error) {
      console.error("Error fetching horoscope:", error);
      navigate(`/zodiac/${zodiac.name.toLowerCase()}`, {
        state: { zodiac, horoscope: null },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container spacing={2} sx={{ mt: 2, mb: 2, ml: 1 }}>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {zodiacSigns.map((item, index) => (
            <motion.div key={index} variants={cardVariants} whileHover="hover">
              <Grid item sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  onClick={() => handleZodiacClick(item)}
                  size="small"
                  sx={{ width: "18rem" }}
                  disabled={loading}
                >
                  <Card
                    sx={{
                      width: "15rem",
                      height: "16rem",
                      textAlign: "center",
                    }}
                  >
                    <CardMedia
                      component="video"
                      src={item.animation}
                      autoPlay
                      loop
                      muted
                      playsInline
                      sx={{
                        width: "100%",
                        height: "70%",
                        objectFit: "cover",
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" sx={{ color: "#ff9800" }}>
                        {item.name}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: "#ff9800" }}>
                        {item.hindi}
                      </Typography>
                    </CardContent>
                  </Card>
                </Button>
              </Grid>
            </motion.div>
          ))}
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default ZodiacSigns;
