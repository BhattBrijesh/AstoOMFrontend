import { useEffect } from "react";
import ZodiacSigns from "../components/ZodiacSigns";
import Services from "../components/Services";
import Counter from "../components/Counter";
import ServicesCardComponent from "./ServicesCardComponent";
import WelcomeAstro from "./WelcomeAstro";
import { Box, Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "../components/css/Home.css";

const Home = () => {
  useEffect(() => {
    document.title = "Om Astro Solutions";
  }, []);

  return (
    <div>
      {/* Your existing content */}

      <WelcomeAstro />

      <Services />

      <ZodiacSigns />

      {/* WHY CHOOSE US SECTION */}
      <Grid
        container
        mt={{ xs: 2, sm: 3 }}
        mb={{ xs: 2, sm: 3 }}
        px={{ xs: 1, sm: 2 }}
        py={{ xs: 2, sm: 3 }}
        sx={{ background: "#1a2a4487" }}
        justifyContent="center"
      >
        {/* ... your existing Why Choose Us content ... */}
      </Grid>

      <Counter />
      <ServicesCardComponent />

      {/* === STICKY PHONE BUTTON (Bottom Center) === */}
      <Box
        sx={{
          position: "fixed",
          bottom: { xs: 16, sm: 24 },
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1300,
        }}
      >
        {/* ✅ iOS + Android Compatible */}
        <a
          href="tel:+919417339708" // ✅ COMPLETE +91 format
          style={{ textDecoration: "none" }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#28a745", // Green WhatsApp style
              color: "white",
              px: { xs: 2, sm: 3 },
              py: { xs: 1.2, sm: 1.5 },
              borderRadius: 50,
              boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: 600,
              cursor: "pointer", // ✅ Desktop cursor
              "&:hover": {
                backgroundColor: "#218838",
                transform: "scale(1.05)",
                boxShadow: "0 8px 25px rgba(40, 167, 69, 0.4)",
              },
              transition: "all 0.3s ease",
              // ✅ TOUCH FRIENDLY for mobile
              "@media (hover: none)": {
                "&:active": {
                  backgroundColor: "#1e7e34",
                  transform: "scale(0.98)",
                },
              },
            }}
          >
            <PhoneIcon sx={{ mr: 1, fontSize: { xs: 20, sm: 24 } }} />
            Call Now: +91 9417339708
          </Box>
        </a>
      </Box>

      {/* === STICKY WHATSAPP ICON (Bottom Right) === */}
      <Box
        sx={{
          position: "fixed",
          bottom: { xs: 16, sm: 24 },
          right: { xs: 16, sm: 24 },
          zIndex: 1300,
        }}
      >
        <a
          href="https://wa.me/9417339708"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Box
            sx={{
              width: { xs: 56, sm: 64 },
              height: { xs: 56, sm: 64 },
              backgroundColor: "#25D366",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
              "&:hover": {
                backgroundColor: "#128C7E",
                transform: "scale(1.1)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <WhatsAppIcon
              sx={{ fontSize: { xs: 32, sm: 36 }, color: "white" }}
            />
          </Box>
        </a>
      </Box>
    </div>
  );
};

export default Home;
