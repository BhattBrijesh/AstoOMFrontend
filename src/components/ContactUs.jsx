import React, { useEffect, useState, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import Breadcrumb from "../components/Breadcrumb";
import ContactIcon from "../assets/images/animation/icons8-contact-us.gif";
import mailIcon from "../assets/images/animation/mail.gif";
import addressIcon from "../assets/images/animation/map.gif";
import {
  Avatar,
  Box,
  Typography,
  Button,
  styled,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { handleSubmitContactUsForm } from "../api";
import toast from "react-hot-toast";

const ContactCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#ffffff",
  padding: theme.spacing(1.5),
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[3],
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: theme.shadows[6],
    transform: "translateY(-4px)",
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },
}));

const FormCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#ffffff",
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[3],
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: theme.shadows[6],
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1.5),
  },
}));

const MapCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#ffffff",
  padding: 0,
  borderRadius: theme.spacing(1),
  overflow: "hidden",
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

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

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null);

  useEffect(() => {
    document.title = "Contact Us | Astro Om Solution";
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Valid email is required";
    if (!formData.phone.match(/^\d{10}$/))
      newErrors.phone = "Exactly 10 digits are required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleInputChange = useCallback((e) => {
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
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error("Please fill out all required fields.");
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
        message: formData?.message,
      };
      const res = await handleSubmitContactUsForm(reqBody);
      if (res?.data) {
        toast.success(
          "Thank you for reaching out! We've received your message and will connect with you shortly.",
          {
            duration: 5000,
          }
        );
        setFormStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", phone: "" });
        setErrors({});
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred.");
      setFormStatus("Failed to send message. Please try again.");
    } finally {
      toast.dismiss(toastId);
    }
  };

  const contactInfo = useMemo(
    () => [
      {
        icon: ContactIcon,
        alt: "Phone icon",
        title: "Phone",
        content: (
          <a
            href="tel:+919417339708"
            className="hover:text-blue-500 transition-colors duration-200"
            aria-label="Call +91 9417339708"
          >
            +91 9417339708
          </a>
        ),
      },
      {
        icon: mailIcon,
        alt: "Email icon",
        title: "Email",
        content: (
          <a
            href="mailto:astroomsolution@gmail.com"
            className="hover:text-blue-500 transition-colors duration-200"
            aria-label="Email astroomsolution@gmail.com"
          >
            astroomsolution@gmail.com
          </a>
        ),
      },
      {
        icon: addressIcon,
        alt: "Address icon",
        title: "Address",
        content: "House number 20, Sector 11, Chandigarh",
      },
    ],
    []
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+919417339708",
        contactType: "Customer Service",
        email: "astroomsolution@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "House number 20, Sector 11",
          addressLocality: "Chandigarh",
          postalCode: "160011",
          addressCountry: "IN",
        },
      },
    ],
  };

  return (
    <Box
      component="section"
      aria-label="Contact Us"
      sx={{ background: "transparent", minHeight: "100vh" }}
    >
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <Breadcrumb title="Contact Us" />

      <Box
        component="section"
        aria-label="Contact Information"
        sx={{ py: { xs: 4, md: 6 } }}
      >
        <Box
          sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 2, sm: 3, lg: 4 } }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                gap: 2,
              }}
            >
              {contactInfo.map((item, index) => (
                <motion.div variants={cardVariants} whileHover="hover">
                  <ContactCard key={index}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: 1,
                        "&:hover": { transform: "scale(1.1)" },
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <Avatar
                        sx={{ width: 48, height: 48, bgcolor: "blue.100" }}
                      >
                        <img
                          src={item.icon}
                          alt={item.alt}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                          }}
                        />
                      </Avatar>
                    </Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "1.125rem",
                        fontWeight: "semibold",
                        color: theme.palette.text.primary,
                        textAlign: "center",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 0.5,
                        color: theme.palette.text.secondary,
                        textAlign: "center",
                        fontSize: "0.875rem",
                      }}
                    >
                      {item.content}
                    </Typography>
                  </ContactCard>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Box>

      <Box
        component="section"
        aria-label="Contact Form and Map"
        sx={{ py: { xs: 2, md: 4 }, bgcolor: "transparent" }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Box
            sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 2, sm: 3, lg: 4 } }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
                gap: 3,
                alignItems: "stretch",
              }}
            >
              <motion.div variants={cardVariants} whileHover="hover">
                <FormCard className="animate-fade-in">
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "1.5rem", md: "1.875rem" },
                      fontWeight: "bold",
                      color: theme.palette.primary.main,
                      mb: 2,
                      textAlign: "center",
                    }}
                  >
                    Send Us a Message
                  </Typography>
                  <Box
                    component="form"
                    role="form"
                    aria-label="Contact Form"
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    noValidate
                  >
                    <Box>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white"
                        placeholder="Your Name"
                        aria-required="true"
                        aria-invalid={errors.name ? "true" : "false"}
                      />
                      {errors.name && (
                        <Typography
                          sx={{
                            color: theme.palette.error.main,
                            fontSize: "0.75rem",
                            mt: 0.5,
                          }}
                        >
                          {errors.name}
                        </Typography>
                      )}
                    </Box>
                    <Box>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white"
                        placeholder="Your Phone Number"
                        aria-required="true"
                        aria-invalid={errors.phone ? "true" : "false"}
                        pattern="\d*"
                        inputMode="numeric"
                        maxLength="10"
                      />
                      {errors.phone && (
                        <Typography
                          sx={{
                            color: theme.palette.error.main,
                            fontSize: "0.75rem",
                            mt: 0.5,
                          }}
                        >
                          {errors.phone}
                        </Typography>
                      )}
                    </Box>
                    <Box>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white"
                        placeholder="Your Email"
                        aria-required="true"
                        aria-invalid={errors.email ? "true" : "false"}
                        pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                      />
                      {errors.email && (
                        <Typography
                          sx={{
                            color: theme.palette.error.main,
                            fontSize: "0.75rem",
                            mt: 0.5,
                          }}
                        >
                          {errors.email}
                        </Typography>
                      )}
                    </Box>
                    <Box>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white"
                        placeholder="Your Message"
                        aria-required="true"
                        aria-invalid={errors.message ? "true" : "false"}
                      />
                      {errors.message && (
                        <Typography
                          sx={{
                            color: theme.palette.error.main,
                            fontSize: "0.75rem",
                            mt: 0.5,
                          }}
                        >
                          {errors.message}
                        </Typography>
                      )}
                    </Box>
                    <Button
                      variant="contained"
                      onClick={handleSubmit}
                      sx={{
                        bgcolor: theme.palette.primary.main,
                        color: "#fff",
                        p: 1,
                        borderRadius: 1,
                        "&:hover": {
                          bgcolor: theme.palette.primary.dark,
                          transform: "scale(1.05)",
                        },
                        transition: "all 0.3s ease",
                      }}
                      aria-label="Submit contact form"
                    >
                      Send Message
                    </Button>
                    {formStatus && (
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontSize: "0.875rem",
                          color: formStatus.includes("successfully")
                            ? theme.palette.success.main
                            : theme.palette.error.main,
                          transition: "opacity 0.3s ease",
                        }}
                      >
                        {formStatus}
                      </Typography>
                    )}
                  </Box>
                </FormCard>
              </motion.div>
              <motion.div variants={cardVariants} whileHover="hover">
                <MapCard className="animate-fade-in">
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "1.5rem", md: "1.875rem" },
                      fontWeight: "bold",
                      color: theme.palette.primary.main,
                      mb: 2,
                      px: 2,
                      mt: 1,
                      textAlign: "center",
                    }}
                  >
                    Our Location
                  </Typography>
                  <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.164614139768!2d76.78373231508254!3d30.742157981627885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0a9f3b3b7b%3A0x4c3b3b7b3b7b3b7b!2sSector%2011%2C%20Chandigarh%2C%20160011%2C%20India!5e0!3m2!1sen!2sin!4v1696613223074!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{
                        border: 0,
                        minHeight: {
                          xs: "250px",
                          sm: "300px",
                          md: "350px",
                          lg: "400px",
                        },
                      }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Location Map - Sector 11, Chandigarh"
                      className="rounded-b-lg"
                    />
                  </Box>
                </MapCard>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Box>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 0.6s ease-out forwards;
          }
        `}
      </style>
    </Box>
  );
};

Contact.propTypes = {};

export default React.memo(Contact);
