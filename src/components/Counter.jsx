import React, { useState, useEffect, useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import img1 from "../assets/images/ser-icon1.png";
import img2 from "../assets/images/ser-icon2.png";
import img3 from "../assets/images/ser-icon3.png";
import img4 from "../assets/images/ser-icon4.png";

import { motion } from "framer-motion";

const CounterItem = ({ target, label, icon }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    if (isVisible) {
      const duration = 2000;
      const stepTime = 50;
      const steps = duration / stepTime;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }

    return () => observer.disconnect();
  }, [isVisible, target]);

  return (
    <Box ref={ref} className="flex flex-col items-center text-center">
      <Box
        component="img"
        src={icon}
        alt="counter"
        className="w-16 h-16 mb-2"
      />
      <Typography variant="h4" className="text-orange-500 font-bold">
        {count}
      </Typography>
      <Typography variant="body2" className="text-white">
        {label}
      </Typography>
    </Box>
  );
};

const Counter = () => {
  const counterData = [
    {
      target: 20,
      label: "Years of Experience",
      icon: img1,
    },
    {
      target: 75,
      label: "Type of Horoscope",
      icon: img2,
    },
    {
      target: 200,
      label: "Expert Team",
      icon: img3,
    },
    {
      target: 5000,
      label: "Satisfied Clients in Globally",
      icon: img4,
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
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const imageHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };
  return (

    <Box
      className="bg-teal-900 text-white py-8"
      sx={{ background: "#1a2a4487" }}
    >
      <Box className="container mx-auto text-center">
        <Typography variant="h4" component="h1">
          Now {"  "}
          <span style={{ color: "#ff9800" }}>We Have</span>
        </Typography>

        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <motion.div variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
            }}>
            {counterData.map((item, index) => (
              <motion.div
                variants={cardVariants}
                whileHover="hover">

                <Grid item key={index}>
                  <CounterItem
                    target={item.target}
                    label={item.label}
                    icon={item.icon}
                  />
                </Grid>
              </motion.div>
            ))}
          </motion.div >
        </Grid>
      </Box>
    </Box>
  );
};

export default Counter;
