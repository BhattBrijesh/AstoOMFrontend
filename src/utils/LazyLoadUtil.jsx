import React from "react";

const componentMap = {
  Home: () => import("../components/Home"),
  AboutUs: () => import("../components/AboutUs"),
  ContactUs: () => import("../components/ContactUs"),
  PhotoGallery: () => import("../components/PhotoGallery"),
  VideoGallery: () => import("../components/VideoGallery"),
  Inquiry: () => import("../components/Inquiry"),
  ZodiacSigns: () => import("../components/ZodiacSigns"),
  ZodiacDetail: () => import("../components/ZodiacDetail"),
  "Admin/Login": () => import("../components/Admin/Login"),
  "Admin/Register": () => import("../components/Admin/Register"),
  "Admin/Dashboard": () => import("../components/Admin/Dashboard"),
  ServiceDetailPage: () => import("../components/ServiceDetailPage"),
};

export const LazyLoadUtil = (name) => React.lazy(componentMap[name]);
