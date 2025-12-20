import React, { Suspense, useMemo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loader from "../utils/LoaderUtil.jsx";
import { LazyLoadUtil } from "../utils/LazyLoadUtil.jsx";

const Home = LazyLoadUtil("Home");
const AboutUs = LazyLoadUtil("AboutUs");
const Awards = LazyLoadUtil("Awards");
const Certificate = LazyLoadUtil("Certificate");
const ContactUs = LazyLoadUtil("ContactUs");
const FamilyProblemSolution = LazyLoadUtil("FamilyProblemSolution");
const HoroscopeReading = LazyLoadUtil("HoroscopeReading");
const HusbandWifeDispute = LazyLoadUtil("HusbandWifeDispute");
const LoveMarriageProblem = LazyLoadUtil("LoveMarriageProblem");
const LoveProblemSolution = LazyLoadUtil("LoveProblemSolution");
const MarriageProblemSolution = LazyLoadUtil("MarriageProblemSolution");
const PhotoGallery = LazyLoadUtil("PhotoGallery");
const VideoGallery = LazyLoadUtil("VideoGallery");
const PrivacyPolicy = LazyLoadUtil("PrivacyPolicy");
const Inquiry = LazyLoadUtil("Inquiry");
const ZodiacSigns = LazyLoadUtil("ZodiacSigns");
const ZodiacDetail = LazyLoadUtil("ZodiacDetail");

const AdminLogin = LazyLoadUtil("Admin/Login");
const Register = LazyLoadUtil("Admin/Register");
const Dashboard = LazyLoadUtil("Admin/Dashboard");

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useMemo(
    () => localStorage.getItem("status") === "active",
    []
  );

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const AppRoutes = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/certificate" element={<Certificate />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route
        path="/family-problem-solution"
        element={<FamilyProblemSolution />}
      />
      <Route path="/horoscope-reading" element={<HoroscopeReading />} />
      <Route
        path="/husband-wife-dispute-solution"
        element={<HusbandWifeDispute />}
      />
      <Route
        path="/love-marriage-problem-solution"
        element={<LoveMarriageProblem />}
      />
      <Route path="/love-problem-solution" element={<LoveProblemSolution />} />
      <Route
        path="/marriage-problem-solution"
        element={<MarriageProblemSolution />}
      />
      <Route path="/photo-gallery" element={<PhotoGallery />} />
      <Route path="/video-gallery" element={<VideoGallery />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/inquiry" element={<Inquiry />} />
      <Route path="/zodiac" element={<ZodiacSigns />} />
      <Route path="/zodiac/:sign" element={<ZodiacDetail />} />
      <Route path="/login" element={<AdminLogin />} />

      <Route
        path="/register"
        element={
          <ProtectedRoute>
            <Register />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  </Suspense>
);

export default AppRoutes;
