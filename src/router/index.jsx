import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("../components/Home"));
const AboutUs = React.lazy(() => import("../components/AboutUs"));
const Awards = React.lazy(() => import("../components/Awards"));
const Certificate = React.lazy(() => import("../components/Certificate"));
const ContactUs = React.lazy(() => import("../components/ContactUs"));
const FamilyProblemSolution = React.lazy(() =>
  import("../components/FamilyProblemSolution")
);
const HoroscopeReading = React.lazy(() =>
  import("../components/HoroscopeReading")
);
const HusbandWifeDispute = React.lazy(() =>
  import("../components/HusbandWifeDispute")
);
const LoveMarriageProblem = React.lazy(() =>
  import("../components/LoveMarriageProblem")
);
const LoveProblemSolution = React.lazy(() =>
  import("../components/LoveProblemSolution")
);
const MarriageProblemSolution = React.lazy(() =>
  import("../components/MarriageProblemSolution")
);
const PhotoGallery = React.lazy(() => import("../components/PhotoGallery"));
const VideoGallery = React.lazy(() => import("../components/VideoGallery"));
const PrivacyPolicy = React.lazy(() => import("../components/PrivacyPolicy"));
const Inquiry = React.lazy(() => import("../components/Inquiry"));
const ZodiacSigns = React.lazy(() => import("../components/ZodiacSigns"));
const ZodiacDetail = React.lazy(() => import("../components/ZodiacDetail"));

const AppRoutes = () => {
  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900 bg-opacity-70 dark:bg-opacity-70 backdrop-blur-sm z-[9999]">
          <div className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex space-x-2 mb-4">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="w-3 h-10 bg-orange-400 dark:bg-orange-300 rounded-md animate-wave"
                  style={{ animationDelay: `${index * 0.2}s` }}
                />
              ))}
            </div>
            {/* <p className="text-xl font-bold text-gray-800 dark:text-gray-200">
              Loading Content...
            </p>
            <p className="text-md text-gray-600 dark:text-gray-400 mt-1">
              Please wait a moment.
            </p> */}
          </div>

          <style jsx>{`
            @keyframes wave {
              0%,
              100% {
                transform: translateY(0);
                opacity: 0.6;
              }
              50% {
                transform: translateY(-15px);
                opacity: 1;
              }
            }
            .animate-wave {
              animation: wave 1.2s ease-in-out infinite;
            }
          `}</style>
        </div>
      }
    >
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
        <Route
          path="/love-problem-solution"
          element={<LoveProblemSolution />}
        />
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
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
