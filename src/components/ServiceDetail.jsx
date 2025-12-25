// ServiceDetail.jsx
import React, { useState, useMemo } from "react";
import { Box, Button, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useNavigate } from "react-router-dom";
import { SERVICE_CONTENT } from "../config/ServiceContentConfig.js";

const WHATSAPP_NUMBER = "919417339708";

const ServiceDetail = ({ titleKey }) => {
  const [language, setLanguage] = useState("en"); // 'en' | 'hi'
  const navigate = useNavigate();

  const content = useMemo(() => SERVICE_CONTENT[titleKey] || null, [titleKey]);

  if (!content) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" color="error">
          Service content not found.
        </Typography>
      </Box>
    );
  }

  const title = language === "en" ? content.titleEn : content.titleHi;
  const description =
    language === "en" ? content.descriptionEn : content.descriptionHi;

  const whatsappLink = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
    "Hello, I want guidance about: " +
      (language === "en" ? content.titleEn : content.titleHi)
  )}`;

  return (
    <Box
      sx={{
        maxWidth: 900,
        mx: "auto",
        px: { xs: 2, md: 3 },
        py: { xs: 2, md: 3 },
        bgcolor: "rgba(0,0,0,0.4)",
        borderRadius: 2,
      }}
    >
      {/* Top row: Back + Language Switch */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          gap: 1.5,
        }}
      >
        {/* Back button */}
        <Button
          variant="outlined"
          color="warning"
          onClick={() => navigate(-1)}
          sx={{
            textTransform: "none",
            fontSize: "0.85rem",
            px: 2,
            py: 0.6,
            borderRadius: 2,
          }}
        >
          {language === "en" ? "Back" : "वापस जाएँ"}
        </Button>

        {/* Language Switch */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            size="small"
            variant={language === "en" ? "contained" : "outlined"}
            onClick={() => setLanguage("en")}
            sx={{
              textTransform: "none",
              fontSize: "0.85rem",
              px: 2,
            }}
          >
            English
          </Button>
          <Button
            size="small"
            variant={language === "hi" ? "contained" : "outlined"}
            onClick={() => setLanguage("hi")}
            sx={{
              textTransform: "none",
              fontSize: "0.85rem",
              px: 2,
            }}
          >
            हिन्दी
          </Button>
        </Box>
      </Box>

      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "1.4rem", md: "1.8rem" },
          fontWeight: 600,
          color: "#ff9800",
          mb: 1.5,
          lineHeight: 1.3,
        }}
      >
        {title}
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          color: "#FFF",
          fontSize: { xs: "0.95rem", md: "1rem" },
          lineHeight: 1.7,
          whiteSpace: "pre-line",
        }}
      >
        {description}
      </Typography>

      {/* Bottom Buttons */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 1.5,
          mt: 3,
        }}
      >
        <Button
          variant="contained"
          color="warning"
          href="/contactus"
          sx={{
            flex: 1,
            textTransform: "none",
            fontWeight: 500,
            fontSize: { xs: "0.9rem", md: "0.95rem" },
            py: 1.1,
            borderRadius: 2,
          }}
        >
          {language === "en" ? "Contact Us" : "हमसे संपर्क करें"}
        </Button>

        <Button
          variant="contained"
          color="success"
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<WhatsAppIcon />}
          sx={{
            flex: 1,
            textTransform: "none",
            fontWeight: 500,
            fontSize: { xs: "0.9rem", md: "0.95rem" },
            py: 1.1,
            borderRadius: 2,
            bgcolor: "#25D366",
            "&:hover": { bgcolor: "#1ebe5a" },
          }}
        >
          {language === "en" ? "WhatsApp Now" : "व्हाट्सऐप करें"}
        </Button>
      </Box>
    </Box>
  );
};

export default ServiceDetail;
