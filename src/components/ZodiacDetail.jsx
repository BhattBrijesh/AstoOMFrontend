import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ZodiacDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { zodiac } = location.state || {};

  if (!zodiac) {
    return (
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h5">No Zodiac Sign Selected</Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/")}
          sx={{ mt: 2 }}
        >
          Back to Zodiac Signs
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 5, p: 2 }}>
      <Card sx={{ textAlign: "center" }}>
        <CardMedia
          component="video"
          src={zodiac.animation}
          autoPlay
          loop
          muted
          playsInline
          sx={{ width: "100%", height: 300, objectFit: "cover" }}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {zodiac.name} ({zodiac.hindi})
          </Typography>
          <Typography variant="h6" gutterBottom>
            Today's Prediction
          </Typography>
          <Typography variant="body1" paragraph>
            {zodiac.prediction}
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/")}
            sx={{ mt: 2, backgroundColor: "#f28c38" }}
          >
            Back to Zodiac Signs
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ZodiacDetail;
