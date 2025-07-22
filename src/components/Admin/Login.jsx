import React, { useState } from "react";
import { Box, Typography, TextField, Button, Link, Alert } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
      setToken(token);
      setName(user.email);
      localStorage.setItem("authToken", token);
      localStorage.setItem("userName", user.email);
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
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: 1 } }}
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
        <Link
          href="/register"
          onClick={handleAstroLogin}
          sx={{
            display: "block",
            mt: 1,
            textAlign: "center",
            color: "#1976d2",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Astro Login? Click here to Register
        </Link>
        {name && token && (
          <Typography align="center" sx={{ mt: 2, color: "green" }}>
            Welcome, {name}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default AdminLogin;
