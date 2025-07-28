import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../Admin/Redux/Store";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "https://asto-om-backend.vercel.app/api/auth/login",
        {
          email,
          password,
        }
      );
      const { token, user } = response.data;
      dispatch(
        login({
          status: user.status,
          token: token,
          userName: user.email,
        })
      );
      window.dispatchEvent(new Event("customStorageChange"));
      navigate("/dashboard");
      console.log("Login successful", { token, name: user.email });
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAstroLogin = () => {
    console.log("Navigate to Astro Login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: 300,
          padding: 3,
          borderRadius: 1,
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{ color: "#1976d2", fontWeight: "bold" }}
        >
          Admin Login
        </Typography>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: 1 } }}
        />
        <TextField
          fullWidth
          label="Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: 1 } }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleTogglePasswordVisibility}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2, borderRadius: 1, textTransform: "none" }}
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </Box>
    </Box>
  );
};

export default AdminLogin;
