// ServiceDetailPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import ServiceDetail from "../components/ServiceDetail";

const ServiceDetailPage = () => {
  const location = useLocation();
  console.log("location", location);

  const titleKey = location.state?.key || "education";
  console.log("titleKey", titleKey);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "24px 8px",
        background: "#0b1020",
      }}
    >
      <ServiceDetail titleKey={titleKey} />
    </div>
  );
};

export default ServiceDetailPage;
