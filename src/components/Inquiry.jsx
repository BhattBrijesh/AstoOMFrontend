import React, { useEffect, useState, useCallback } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import Breadcrumb from "../components/Breadcrumb";
// Import your video file here
import ganesh from "../assets/images/ganeshji.mp4"; // Update path as needed
import { handleSubmitInquiryForm } from "../api";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Inquiry = () => {
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    document.title = "Inquiry | Astro Om Solution";
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Valid email is required";
    if (!formData.phone.match(/^\d{10}$/))
      newErrors.phone = "Exactly 10 digits are required";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      // Allow only digits and max 10 characters
      if (/^\d{0,10}$/.test(value)) {
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: null }));
      } else {
        setErrors((prev) => ({
          ...prev,
          phone: "Only digits are allowed (max 10)",
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.phone ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill out all fields.");
      return;
    }
    if (!validateForm()) {
      toast.error("Please correct the errors in the form.");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Loading...");
    try {
      const reqBody = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };
      const res = await handleSubmitInquiryForm(reqBody);
      if (res?.data) {
        toast.success(
          "Thank you for reaching out! We've received your message and will connect with you shortly.",
          {
            duration: 5000,
          }
        );
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Submission failed");
      setSubmitStatus("error");
    } finally {
      setLoading(false);
      toast.dismiss(toastId);
    }
  };

  return (
    <Box>
      <Breadcrumb title="Inquiry" />
      <Container maxWidth="lg" sx={{ padding: "30px 0px 50px 0px" }}>
        <Grid
          container
          spacing={3}
          sx={{
            display: "flex",
            alignItems: "stretch",
            flexWrap: { xs: "wrap", lg: "nowrap" },
          }}
        >
          {/* Video Card */}
          <Grid size={12}>
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
                height: "100%",
              }}
            >
              <motion.div variants={cardVariants} whileHover="hover">
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                  role="img"
                  aria-label="Inquiry video"
                >
                  <CardMedia
                    component="video"
                    src={ganesh}
                    alt="Inquiry Video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    sx={{
                      borderRadius: "10px 10px 0 0",
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Card>
              </motion.div>
            </motion.div>
          </Grid>

          {/* Inquiry Form */}
          <Grid size={12}>
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
              <motion.div variants={cardVariants} whileHover="hover">
                <Box
                  className="ast_about_info"
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{
                    height: "100%",
                    p: { xs: 2, md: 4 },
                    textAlign: "left",
                    boxShadow: 2,
                    bgcolor: "#f5f5f5",
                    borderRadius: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                  noValidate
                  aria-label="Inquiry form"
                >
                  <Typography
                    variant="h5"
                    component="h1"
                    sx={{ color: "#ff9800", mb: 3, textAlign: "center" }}
                  >
                    Send us your Inquiry
                  </Typography>
                  <Grid container spacing={2}>
                    {/* First Row: Name and Email */}
                    <Grid size={6}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        error={!!errors.name}
                        helperText={errors.name}
                        InputProps={{ sx: { borderRadius: 1 } }}
                        aria-required="true"
                        aria-invalid={errors.name ? "true" : "false"}
                      />
                    </Grid>
                    <Grid size={6}>
                      <TextField
                        fullWidth
                        label="Your Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="outlined"
                        error={!!errors.email}
                        helperText={errors.email}
                        InputProps={{ sx: { borderRadius: 1 } }}
                        aria-required="false"
                        aria-invalid={errors.email ? "true" : "false"}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} sx={{ mt: 2 }}>
                    {/* Second Row: Phone and Subject */}
                    <Grid size={6} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        error={!!errors.phone}
                        helperText={errors.phone}
                        InputProps={{
                          sx: { borderRadius: 1 },
                          inputProps: {
                            pattern: "\\d*",
                            maxLength: 10,
                            inputMode: "numeric",
                          },
                        }}
                        aria-required="true"
                        aria-invalid={errors.phone ? "true" : "false"}
                      />
                    </Grid>
                    <Grid size={6} sm={6}>
                      <FormControl
                        fullWidth
                        variant="outlined"
                        error={!!errors.subject}
                        sx={{ borderRadius: 1 }}
                      >
                        <InputLabel id="subject-select-label">
                          Select Subject *
                        </InputLabel>
                        <Select
                          labelId="subject-select-label"
                          id="subject-select"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          label="Select Subject *"
                          required
                          aria-required="true"
                          aria-invalid={errors.subject ? "true" : "false"}
                        >
                          <MenuItem value="">
                            <em>Select Subject</em>
                          </MenuItem>
                          <MenuItem value="Love Problem Solution">
                            Love Problem Solution
                          </MenuItem>
                          <MenuItem value="Marriage Problem Solution">
                            Marriage Problem Solution
                          </MenuItem>
                          <MenuItem value="Family Problem Solution">
                            Family Problem Solution
                          </MenuItem>
                          <MenuItem value="Horoscope Reading">
                            Horoscope Reading
                          </MenuItem>
                          <MenuItem value="Other">Other</MenuItem>
                        </Select>
                      </FormControl>
                      {errors.subject && (
                        <Typography
                          color="error"
                          sx={{ fontSize: "0.75rem", mt: 0.5 }}
                        >
                          {errors.subject}
                        </Typography>
                      )}
                    </Grid>
                  </Grid>

                  {/* Third Row: Message */}
                  <Grid item xs={12} sm={12} lg={12} sx={{ mt: 2 }}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      multiline
                      rows={4}
                      error={!!errors.message}
                      helperText={errors.message}
                      InputProps={{ sx: { borderRadius: 1 } }}
                      aria-required="true"
                      aria-invalid={errors.message ? "true" : "false"}
                    />
                  </Grid>

                  {/* Fourth Row: Button */}
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={12}
                    sx={{ textAlign: "center", mt: 2 }}
                  >
                    <Button
                      fullWidth
                      type="submit"
                      variant="contained"
                      disabled={loading}
                      sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: 1,
                        textTransform: "none",
                        fontWeight: "medium",
                        bgcolor: "#ff9800",
                        "&:hover": { bgcolor: "#e68900" },
                      }}
                      aria-label="Submit inquiry form"
                    >
                      {loading ? "Sending..." : "Send Inquiry"}
                    </Button>
                    {submitStatus === "success" && (
                      <Typography sx={{ mt: 2, color: "green" }}>
                        Thank you! We'll get back to you soon.
                      </Typography>
                    )}
                    {submitStatus === "error" && (
                      <Typography sx={{ mt: 2, color: "error.main" }}>
                        An error occurred. Please try again.
                      </Typography>
                    )}
                  </Grid>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Inquiry;
