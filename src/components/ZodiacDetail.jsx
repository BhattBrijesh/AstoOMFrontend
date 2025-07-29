import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
  Fade,
  Alert,
} from "@mui/material";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { getZodiaDaily } from "../api";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f28c38",
    },
    secondary: {
      main: "#424242",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    h4: {
      fontWeight: 700,
      color: "#f28c38",
    },
    h6: {
      fontWeight: 600,
      color: "#333",
    },
    body1: {
      color: "#555",
    },
    caption: {
      color: "#777",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          padding: "8px 24px",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: "100%",
  height: 300,
  objectFit: "cover",
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  [theme.breakpoints.down("sm")]: {
    height: 200,
  },
}));

const ZodiacDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { zodiac, horoscope } = location.state || {};
  const [type, setType] = useState("daily");
  const [horoscopeData, setHoroscopeData] = useState(horoscope || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHoroscope = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getZodiaDaily({
        sign: zodiac.name.toLowerCase(),
        type,
      });
      setHoroscopeData(response.data);
      console.log("Fetched data:", response.data?.data);
    } catch (error) {
      console.error("Error fetching horoscope:", error);
      setError("Failed to fetch horoscope data. Please try again.");
      setHoroscopeData(null);
    } finally {
      setLoading(false);
    }
  };

  console.log("Horoscope data:", horoscopeData);

  useEffect(() => {
    if (zodiac && type) {
      fetchHoroscope();
    }
  }, [zodiac, type]);

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  if (!zodiac) {
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ textAlign: "center", mt: 5, px: 2 }}>
          <Typography variant="h5">No Zodiac Sign Selected</Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/")}
            sx={{ mt: 2 }}
          >
            Back to Zodiac Signs
          </Button>
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Fade in timeout={600}>
        <Box sx={{ maxWidth: 700, mx: "auto", mt: 4, px: { xs: 2, sm: 3 } }}>
          <Card>
            <StyledCardMedia
              component="video"
              src={zodiac.animation}
              autoPlay
              loop
              muted
              playsInline
            />
            <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
              <Typography variant="h4" gutterBottom textAlign="center">
                {zodiac.name} ({zodiac.hindi})
              </Typography>
              <FormControl sx={{ my: 2, minWidth: 180 }} size="small">
                <InputLabel id="type-select-label">Horoscope Type</InputLabel>
                <Select
                  labelId="type-select-label"
                  id="type-select"
                  value={type}
                  label="Horoscope Type"
                  onChange={handleTypeChange}
                  disabled={loading}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 8,
                    },
                  }}
                >
                  <MenuItem value="daily">Daily</MenuItem>
                  <MenuItem value="weekly">Weekly</MenuItem>
                  <MenuItem value="monthly">Monthly</MenuItem>
                </Select>
              </FormControl>
              <Typography variant="h6" gutterBottom textAlign="center">
                {type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}
                <span
                  style={{
                    color: "#f28c38",
                    marginLeft: "5px",
                    marginRight: "4px",
                  }}
                >
                  {zodiac.name}
                </span>
                Horoscope
              </Typography>
              {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
                  <CircularProgress color="primary" size={32} />
                </Box>
              ) : error ? (
                <Box sx={{ my: 2 }}>
                  <Alert
                    severity="error"
                    action={
                      <Button
                        color="inherit"
                        size="small"
                        onClick={fetchHoroscope}
                        disabled={loading}
                      >
                        Retry
                      </Button>
                    }
                  >
                    {error}
                  </Alert>
                </Box>
              ) : horoscopeData && horoscopeData.isSuccess ? (
                <>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ lineHeight: 1.6 }}
                  >
                    {horoscopeData.data.horoscope_data}
                  </Typography>
                  <Typography
                    variant="caption"
                    display="block"
                    textAlign="center"
                    sx={{ color: "#f28c38", mb: 2 }}
                  >
                    {type === "daily" && `Date: ${horoscopeData.data.date}`}
                    {type === "weekly" && `Week: ${horoscopeData.data.week}`}
                    {type === "monthly" && `Month: ${horoscopeData.data.month}`}
                  </Typography>
                  {type === "monthly" && (
                    <>
                      {horoscopeData.data.standout_days && (
                        <Typography
                          variant="body1"
                          paragraph
                          sx={{ lineHeight: 1.6 }}
                        >
                          <strong>Standout Days:</strong>
                          {horoscopeData.data.standout_days}
                        </Typography>
                      )}
                      {horoscopeData.data.challenging_days && (
                        <Typography
                          variant="body1"
                          paragraph
                          sx={{ lineHeight: 1.6 }}
                        >
                          <strong>Challenging Days:</strong>
                          {horoscopeData.data.challenging_days}
                        </Typography>
                      )}
                    </>
                  )}
                </>
              ) : (
                <Box sx={{ my: 2 }}>
                  <Alert severity="info">
                    Unable to fetch horoscope. Please try again later.
                  </Alert>
                </Box>
              )}
              <Box sx={{ textAlign: "center", mt: 3 }}>
                <Button
                  variant="contained"
                  onClick={() => navigate("/")}
                  size="large"
                  sx={{ color: "#fff" }}
                >
                  Back to Zodiac Signs
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Fade>
    </ThemeProvider>
  );
};

export default ZodiacDetail;
