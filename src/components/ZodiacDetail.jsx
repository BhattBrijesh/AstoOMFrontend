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

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#f28c38", // Orange accent
    },
    secondary: {
      main: "#424242", // Dark gray for contrast
    },
    background: {
      default: "#f5f5f5", // Light background for the page
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

// Styled components
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
  const [period, setPeriod] = useState("DAILY");
  const [horoscopeData, setHoroscopeData] = useState(horoscope || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (zodiac && period) {
      const fetchHoroscope = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await getZodiaDaily({
            sign: zodiac.name.toLowerCase(),
            period,
          });
          setHoroscopeData(response.data);
        } catch (error) {
          console.error("Error fetching horoscope:", error);
          setError("Failed to fetch horoscope data. Please try again.");
          setHoroscopeData(null);
        } finally {
          setLoading(false);
        }
      };
      fetchHoroscope();
    }
  }, [zodiac, period]);

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
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
                <InputLabel id="period-select-label">
                  Horoscope Period
                </InputLabel>
                <Select
                  labelId="period-select-label"
                  id="period-select"
                  value={period}
                  label="Horoscope Period"
                  onChange={handlePeriodChange}
                  disabled={loading}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 8,
                    },
                  }}
                >
                  <MenuItem value="DAILY">Daily</MenuItem>
                  <MenuItem value="WEEKLY">Weekly</MenuItem>
                  <MenuItem value="MONTHLY">Monthly</MenuItem>
                </Select>
              </FormControl>
              <Typography variant="h6" gutterBottom textAlign="center">
                {period.charAt(0) + period.slice(1).toLowerCase()}
                <span style={{ marginLeft: "5px", color: "#f28c38" }}>
                  {zodiac.name}
                </span>{" "}
                Horoscope
              </Typography>
              {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
                  <CircularProgress color="primary" size={32} />
                </Box>
              ) : error ? (
                <Alert severity="error" sx={{ my: 2 }}>
                  {error}
                </Alert>
              ) : horoscopeData && horoscopeData.success ? (
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
                    sx={{ color: "#f28c38" }}
                  >
                    Date: {horoscopeData.data.date}
                  </Typography>
                </>
              ) : (
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ lineHeight: 1.6, textAlign: "center" }}
                >
                  No Data
                </Typography>
              )}
              <Box sx={{ textAlign: "center", mt: 3 }}>
                <Button
                  variant="contained"
                  onClick={() => navigate("/")}
                  size="large"
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
