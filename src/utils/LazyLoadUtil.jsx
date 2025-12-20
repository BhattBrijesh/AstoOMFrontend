import React from "react";

const componentMap = {
  Home: () => import("../components/Home"),
  AboutUs: () => import("../components/AboutUs"),
  Awards: () => import("../components/Awards"),
  Certificate: () => import("../components/Certificate"),
  ContactUs: () => import("../components/ContactUs"),
  FamilyProblemSolution: () => import("../components/FamilyProblemSolution"),
  HoroscopeReading: () => import("../components/HoroscopeReading"),
  HusbandWifeDispute: () => import("../components/HusbandWifeDispute"),
  LoveMarriageProblem: () => import("../components/LoveMarriageProblem"),
  LoveProblemSolution: () => import("../components/LoveProblemSolution"),
  MarriageProblemSolution: () =>
    import("../components/MarriageProblemSolution"),
  PhotoGallery: () => import("../components/PhotoGallery"),
  VideoGallery: () => import("../components/VideoGallery"),
  PrivacyPolicy: () => import("../components/PrivacyPolicy"),
  Inquiry: () => import("../components/Inquiry"),
  ZodiacSigns: () => import("../components/ZodiacSigns"),
  ZodiacDetail: () => import("../components/ZodiacDetail"),

  "Admin/Login": () => import("../components/Admin/Login"),
  "Admin/Register": () => import("../components/Admin/Register"),
  "Admin/Dashboard": () => import("../components/Admin/Dashboard"),
};

export const LazyLoadUtil = (name) => React.lazy(componentMap[name]);
