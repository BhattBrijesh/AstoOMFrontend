import React, { Suspense, useMemo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loader from "../utils/loader";
import { lazyLoad } from "../utils/lazyLoad";

const Home = lazyLoad("Home");
const AboutUs = lazyLoad("AboutUs");
const Awards = lazyLoad("Awards");
const Certificate = lazyLoad("Certificate");
const ContactUs = lazyLoad("ContactUs");
const FamilyProblemSolution = lazyLoad("FamilyProblemSolution");
const HoroscopeReading = lazyLoad("HoroscopeReading");
const HusbandWifeDispute = lazyLoad("HusbandWifeDispute");
const LoveMarriageProblem = lazyLoad("LoveMarriageProblem");
const LoveProblemSolution = lazyLoad("LoveProblemSolution");
const MarriageProblemSolution = lazyLoad("MarriageProblemSolution");
const PhotoGallery = lazyLoad("PhotoGallery");
const VideoGallery = lazyLoad("VideoGallery");
const PrivacyPolicy = lazyLoad("PrivacyPolicy");
const Inquiry = lazyLoad("Inquiry");
const ZodiacSigns = lazyLoad("ZodiacSigns");
const ZodiacDetail = lazyLoad("ZodiacDetail");

const AdminLogin = lazyLoad("Admin/Login");
const Register = lazyLoad("Admin/Register");
const Dashboard = lazyLoad("Admin/Dashboard");

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
