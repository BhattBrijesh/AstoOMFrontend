import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import img1 from "../assets/images/banner4.jpeg";
import { motion } from "framer-motion";

const WelcomeAstro = () => {
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
        ease: "easeOut",
      },
    },
  };
  return (
    <Box
      className="ast_about_wrapper"
      sx={{ padding: "10px 0", background: "#1a2a4487" }}
    >
      <Box className="container-fluid">
        <Box>
          <Box
            className="ast_heading"
            sx={{ textAlign: "center", marginBottom: "40px" }}
          >
            <Typography variant="h4" component="h1">
              <span style={{ color: "#FFF" }}>स्वागत </span>
              <span style={{ color: "#ff9800" }}>पृष्ठ परिचय</span>
            </Typography>
            {/* <Typography variant="body1" sx={{ color: "#FFF" }}>
              Unlocking the Mysteries of the Cosmos with Astro Om Solution
            </Typography> */}
          </Box>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: { xs: "wrap", md: "nowrap" },
              padding: "0", // Remove extra padding to avoid white space
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
              <Grid
                item
                sx={{
                  width: { xs: "100%", md: "30rem" },
                  maxWidth: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <motion.div variants={cardVariants} whileHover="hover">
                  <Card
                    sx={{
                      borderRadius: "10px",
                      overflow: "hidden",
                      boxShadow: "none",
                      width: "300px", // Adjusted to match the image width in the provided design
                      height: "520px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={img1}
                      alt="About"
                      sx={{
                        borderRadius: "10px 10px 0 0",
                        width: "100%", // Stretch to full card width
                        height: "400px", // Fixed height to fill image area
                        objectFit: "cover", // Crop to fill, removing white borders
                      }}
                    />
                    <CardContent
                      sx={{
                        background:
                          "linear-gradient(to bottom, #26a69a 0%, #ffca28 100%)",
                        color: "#fff",
                        textAlign: "center",
                        padding: "5px",
                        borderRadius: "0 0 10px 10px",
                        height: "120px", // Adjusted to fit content snugly
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{ color: "#fff", marginBottom: "5px" }}
                      >
                        Consult{" "}
                        <span style={{ fontStyle: "italic" }}>
                          Astro Om Solution
                        </span>
                      </Typography>
                      <Box
                        sx={{
                          background: "#ffca28",
                          color: "#26a69a",
                          padding: "5px",
                          borderRadius: "5px",
                          display: "inline-block",
                        }}
                      >
                        <Typography variant="h6" component="div">
                          Call Now <br /> +91 9417339708
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            </motion.div>
            <Grid
              item
              sx={{
                width: { xs: "100%", md: "40rem" }, // Adjusted for better balance
                padding: { xs: "0 10px", md: "20px 0" },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                className="ast_about_info"
                sx={{
                  paddingLeft: "0",
                  textAlign: "center",
                  maxWidth: "500px", // Limit width for centered text
                }}
              >
                <Typography variant="body1" paragraph sx={{ color: "#FFF" }}>
                  <span style={{ color: "#ff9800" }}>
                    नमस्ते और स्वागत है पंडित ओम प्रकाश
                  </span>
                  , की आधिकारिक वेबसाइट पर! भारत के शीर्ष ज्योतिषियों में से एक,
                  पंडित ओम प्रकाश, जिनके पास 20 वर्षों से अधिक का अनुभव है,
                  वैदिक ज्योतिष के क्षेत्र में अपनी विशेषज्ञता के लिए प्रसिद्ध
                  हैं। उत्तराखंड के पवित्र गंगोत्री से ताल्लुक रखने वाले और
                  हरिद्वार व ऋषिकेश से शिक्षा प्राप्त पंडित ओम प्रकाश ने ज्योतिष
                  और आध्यात्मिक मार्गदर्शन के माध्यम से लाखों लोगों के जीवन को
                  रोशन किया है।
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: "#FFF" }}>
                  वह न केवल एक प्रख्यात ज्योतिषी हैं, बल्कि चंडीगढ़ के सेक्टर 37
                  में देवालया परिषद संगठन के वित्तीय सलाहकार के रूप में भी
                  कार्यरत हैं। इसके अतिरिक्त, वह चंडीगढ़ के विभिन्न मंदिर
                  समितियों के साथ मिलकर सामाजिक और आध्यात्मिक कार्यों में योगदान
                  दे रहे हैं। उनकी सेवाएँ प्रेम, विवाह, दांपत्य जीवन, पारिवारिक
                  समस्याओं, और दैनिक जीवन की चुनौतियों के समाधान के लिए जानी
                  जाती हैं, जो अत्यंत सटीक और विश्वसनीय हैं।
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: "#FFF" }}>
                  वर्तमान में, पंडित ओम प्रकाश चंडीगढ़ के सेक्टर 11 और सेक्टर 43
                  में दो कार्यालयों के माध्यम से अपनी सेवाएँ प्रदान कर रहे हैं।
                  उनकी वैदिक ज्योतिष पर गहरी पकड़ और आध्यात्मिक दृष्टिकोण ने
                  उन्हें देश-विदेश में विश्वास और सम्मान दिलाया है। लोग दूर-दूर
                  से, विभिन्न शहरों, राज्यों, और यहाँ तक कि देशों से, उनके
                  मार्गदर्शन के लिए आते हैं।
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: "#FFF" }}>
                  <span style={{ color: "#ff9800" }}>पंडित ओम प्रकाश </span> का
                  उद्देश्य आपके जीवन को ग्रहों की शक्ति और वैदिक ज्योतिष के
                  प्राचीन ज्ञान के माध्यम से सकारात्मक दिशा प्रदान करना है। चाहे
                  आप प्रेम संबंधी समस्याओं, वैवाहिक मुद्दों, पारिवारिक विवादों,
                  या भविष्य के बारे में जानना चाहते हों, हमारी सेवाएँ आपके लिए
                  एक उज्ज्वल और सुखमय भविष्य सुनिश्चित करने के लिए समर्पित हैं।
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: "#FFF" }}>
                  आज ही संपर्क करें और अपने जीवन की चुनौतियों का समाधान प्राप्त
                  करें। वैदिक ज्योतिष के इस अनुभवी विशेषज्ञ के साथ अपने भविष्य
                  को नई दिशा दें!
                </Typography>
                <Button variant="contained" color="warning" href="/aboutus">
                  Read More
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  href="/contactus"
                  sx={{ marginLeft: "30px" }}
                >
                  Contact Us Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default WelcomeAstro;
