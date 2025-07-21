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
} from "@mui/material";
import Breadcrumb from "../components/Breadcrumb";
import img1 from "../assets/images/inquiry.jpg";
import { handleSubmitInquiryForm } from "../api";
import toast from "react-hot-toast";

const Inquiry = () => {
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
    document.title = "Inquiry | OM Astro Solution";
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Valid email is required";
    if (!formData.phone.match(/^\d{0,10}$/))
      newErrors.phone = "Exactly 10 digits are required";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      if (value.match(/^\d{0,10}$/)) {
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
    const toastId = toast.loading("Loading...");
    try {
      const reqBody = {
        name: formData?.name,
        email: formData?.email,
        phone: formData?.phone,
        subject: formData?.subject,
        message: formData?.message,
      };
      const res = await handleSubmitInquiryForm(reqBody);
      if (res?.data) {
        toast.success(
          "Thank you for reaching out! We've received your message and will connect with you shortly.",
          {
            duration: 5000,
          }
        );
      }

      setFormData({ name: "", email: "", message: "", phone: "", subject: "" });
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
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
          <Grid item xs={12} lg={6}>
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
              aria-label="Inquiry image"
            >
              <CardMedia
                component="img"
                image={img1}
                alt="About"
                sx={{ borderRadius: "10px 10px 0 0", height: "100%" }}
              />
            </Card>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Box
              className="ast_about_info"
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
            >
              <Typography
                variant="h5"
                component="h1"
                sx={{ color: "#ff9800", mb: 3, textAlign: "center" }}
              >
                Send us your Inquiry
              </Typography>
              <Grid container spacing={2}>
                {/* Pair 1: Name and Email */}
                <Grid item xs={12} sm={6}>
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    error={!!errors.email}
                    helperText={errors.email}
                    InputProps={{ sx: { borderRadius: 1 } }}
                    aria-required="true"
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                </Grid>
                {/* Pair 2: Phone and Subject */}
                <Grid item xs={12} sm={6}>
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
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ minWidth: "100%", maxWidth: "100%" }}
                >
                  <Select
                    fullWidth
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    displayEmpty
                    error={!!errors.subject}
                    sx={{ borderRadius: 1 }}
                    aria-required="true"
                    aria-invalid={errors.subject ? "true" : "false"}
                  >
                    <MenuItem value="" disabled>
                      Select Subject *
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
              {/* Message Field */}
              <Grid item xs={12} sx={{ marginTop: "20px" }}>
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
              {/* Submit Button and Status */}
              <Grid item xs={12} sx={{ textAlign: "center", mt: 2 }}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  onClick={handleSubmit}
                  disabled={loading}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 1,
                    textTransform: "none",
                    fontWeight: "medium",
                    bgcolor: "inquiry.jsx",
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
                    {errors.submit}
                  </Typography>
                )}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Inquiry;
