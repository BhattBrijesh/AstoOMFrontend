import React, { useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Breadcrumbs as MuiBreadcrumbs,
  Link,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const CustomBreadcrumbs = styled(MuiBreadcrumbs)(({ theme }) => ({
  "& .MuiBreadcrumbs-ol": {
    background: "rgba(255, 255, 255, 0.1)",
    padding: theme.spacing(1, 2), // Reduced padding for compactness
    borderRadius: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(4px)",
  },
  "& .MuiBreadcrumbs-li": {
    display: "inline-flex",
    alignItems: "center",
    color: theme.palette.primary.main, // Use theme color (#ff9800)
    "& a": {
      color: "#fff",
      textDecoration: "none",
      fontWeight: 400,
      "&:hover": {
        color: theme.palette.primary.main,
        textDecoration: "underline",
      },
    },
  },
  "& .MuiBreadcrumbs-li:last-child": {
    color: "#fff",
    fontWeight: 500,
  },
  "& .MuiBreadcrumbs-separator": {
    color: theme.palette.primary.main,
    margin: theme.spacing(0, 1),
  },
}));

const Breadcrumb = ({ title, parentLink, parentTitle }) => {
  const theme = useTheme();

  // Memoize breadcrumb items to prevent unnecessary re-renders
  const breadcrumbItems = useMemo(
    () => [
      {
        label: "Home",
        to: "/",
      },
      ...(parentLink && parentTitle
        ? [{ label: parentTitle, to: parentLink }]
        : []),
      { label: title, isLast: true },
    ],
    [title, parentLink, parentTitle]
  );

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.to ? `${window.location.origin}${item.to}` : undefined,
    })),
  };

  return (
    <Box
      component="nav"
      aria-label="breadcrumb"
      sx={{
        background: "transparent",
        padding: theme.spacing(1, 0), // Reduced vertical padding
        overflow: "hidden",
      }}
    >
      {/* Structured Data for SEO */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: theme.spacing(0, 2), // Consistent horizontal padding
        }}
      >
        <CustomBreadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          {breadcrumbItems.map((item, index) =>
            item.isLast ? (
              <Typography
                key={index}
                sx={{
                  color: "#ff9800",
                  fontWeight: 500,
                  textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
                }}
                aria-current="page"
              >
                {item.label}
              </Typography>
            ) : (
              <Link
                key={index}
                component={RouterLink}
                to={item.to}
                sx={{
                  color: "#ff9800",
                  textDecoration: "none",
                  "&:hover": {
                    color: theme.palette.primary.main,
                    textDecoration: "underline",
                  },
                }}
              >
                {item.label}
              </Link>
            )
          )}
        </CustomBreadcrumbs>
      </Box>
    </Box>
  );
};

// PropTypes for type safety
Breadcrumb.propTypes = {
  title: PropTypes.string.isRequired,
  parentLink: PropTypes.string,
  parentTitle: PropTypes.string,
};

export default React.memo(Breadcrumb);