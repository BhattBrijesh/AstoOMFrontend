import React, { Suspense, useMemo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loader from "../utils/Loader";
import { LazyLoad } from "../utils/LazyLoad";


const Home = LazyLoad("Home");
const AboutUs = LazyLoad("AboutUs");
const Awards = LazyLoad("Awards");
const Certificate = LazyLoad("Certificate");
const ContactUs = LazyLoad("ContactUs");
const FamilyProblemSolution = LazyLoad("FamilyProblemSolution");
const HoroscopeReading = LazyLoad("HoroscopeReading");
const HusbandWifeDispute = LazyLoad("HusbandWifeDispute");
const LoveMarriageProblem = LazyLoad("LoveMarriageProblem");
const LoveProblemSolution = LazyLoad("LoveProblemSolution");
const MarriageProblemSolution = LazyLoad("MarriageProblemSolution");
const PhotoGallery = LazyLoad("PhotoGallery");
const VideoGallery = LazyLoad("VideoGallery");
const PrivacyPolicy = LazyLoad("PrivacyPolicy");
const Inquiry = LazyLoad("Inquiry");
const ZodiacSigns = LazyLoad("ZodiacSigns");
const ZodiacDetail = LazyLoad("ZodiacDetail");

const AdminLogin = LazyLoad("Admin/Login");
const Register = LazyLoad("Admin/Register");
const Dashboard = LazyLoad("Admin/Dashboard");

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
