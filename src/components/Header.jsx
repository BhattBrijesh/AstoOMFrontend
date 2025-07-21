import React, { useState, useRef, useCallback, useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Box,
  Container,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { styled, useTheme } from "@mui/material/styles";


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  borderBottom: "none",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  background: "transparent",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1, 0), // Reduced padding for compactness
  minHeight: 56, // Slightly smaller for tighter layout
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  fontWeight: 500,
  fontSize: "0.875rem",
  textTransform: "none",
  padding: theme.spacing(1, 2),
  minWidth: "auto",
  "&:hover": {
    color: theme.palette.primary.main, // #ff9800
    backgroundColor: "transparent",
  },
}));

const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  color: "#fff",
  padding: theme.spacing(0.5),
  "&:hover": {
    color: theme.palette.text.primary, // #111827
    backgroundColor: "rgba(243, 244, 246, 0.8)",
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: 280,
    backgroundColor: "#ffffff",
  },
}));

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(1), // Reduced padding
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: "#ffffff",
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.grey[100], // #f3f4f6
  },
  borderRadius: theme.spacing(1),
  margin: theme.spacing(0.25, 0.5), // Reduced margin
  backgroundColor: "#ffffff",
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: "0.875rem",
  "&:hover": {
    backgroundColor: theme.palette.grey[100], // #f3f4f6
  },
  backgroundColor: "#ffffff",
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    marginTop: theme.spacing(0.5), // Reduced margin
    boxShadow: theme.shadows[3],
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.spacing(1),
    backgroundColor: "#ffffff",
  },
}));

const menuItems = [
  { label: "Home", to: "/" },
  {
    label: "About",
    submenu: [{ label: "About Us", to: "/aboutus" }],
  },
  {
    label: "Services",
    submenu: [
      { label: "Love Problem Solution", to: "/love-problem-solution" },
      { label: "Marriage Problem Solution", to: "/marriage-problem-solution" },
      {
        label: "Love Marriage Problem Solution",
        to: "/love-marriage-problem-solution",
      },
      { label: "Family Problem Solution", to: "/family-problem-solution" },
      {
        label: "Husband Wife Dispute Solution",
        to: "/husband-wife-dispute-solution",
      },
      { label: "Horoscope Reading", to: "/horoscope-reading" },
    ],
  },
  {
    label: "Gallery",
    submenu: [
      { label: "Photo Gallery", to: "/photo-gallery" },
      { label: "Video Gallery", to: "/video-gallery" },
    ],
  },
  { label: "Inquiry", to: "/inquiry" },
  { label: "Contact Us", to: "/contactus" },
];

const Header = React.memo(() => {
  const theme = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState({
    about: null,
    services: null,
    gallery: null,
  });
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const closeTimeoutRef = useRef(null);

  const handleMenuOpen = useCallback((event, menu) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setAnchorEl((prev) => ({ ...prev, [menu]: event.currentTarget }));
  }, []);

  const handleMenuClose = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setAnchorEl({ about: null, services: null, gallery: null });
    }, 50);
  }, []);

  const toggleDrawer = useCallback(
    (open) => () => {
      setIsMenuOpen(open);
    },
    []
  );

  const toggleSubmenu = useCallback((label) => {
    setOpenSubmenu((prev) => (prev === label ? null : label));
  }, []);

  const getAnchorEl = useCallback(
    (label) => anchorEl[label.toLowerCase()],
    [anchorEl]
  );

  // Structured data for SEO
  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      name: menuItems.map((item) => item.label),
      url: menuItems.map((item) => `${window.location.origin}${item.to}`),
    }),
    []
  );

  const drawerList = useMemo(
    () => (
      <Box>
        <DrawerHeader>
          <Box sx={{ background: "transparent" }}>
            {/* <img
              src={logo}
              alt="Astro Om Solution Logo"
              sx={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                borderRadius: theme.spacing(1),
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: theme.shadows[4],
                },
              }}
              className="h-8"
              loading="lazy"
            /> */}
          </Box>
          <IconButton onClick={toggleDrawer(false)} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </DrawerHeader>
        <Box sx={{ padding: theme.spacing(1) }}>
          <List>
            {menuItems.map((item, index) => (
              <Box key={index}>
                {item.submenu ? (
                  <>
                    <StyledListItem
                      button
                      onClick={() => toggleSubmenu(item.label)}
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontWeight: 500,
                          fontSize: "0.875rem",
                        }}
                      />
                      {openSubmenu === item.label ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )}
                    </StyledListItem>
                    {openSubmenu === item.label && (
                      <Box sx={{ paddingLeft: 2 }}>
                        {item.submenu.map((subItem, subIndex) => (
                          <StyledListItem
                            key={subIndex}
                            button
                            component={RouterLink}
                            to={subItem.to}
                            onClick={toggleDrawer(false)}
                          >
                            <ListItemText
                              primary={subItem.label}
                              primaryTypographyProps={{
                                fontSize: "0.8125rem",
                                color: theme.palette.text.secondary,
                              }}
                            />
                          </StyledListItem>
                        ))}
                      </Box>
                    )}
                  </>
                ) : (
                  <StyledListItem
                    button
                    component={RouterLink}
                    to={item.to}
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontWeight: 500,
                        fontSize: "0.875rem",
                      }}
                    />
                  </StyledListItem>
                )}
              </Box>
            ))}
          </List>
        </Box>
      </Box>
    ),
    [openSubmenu, toggleDrawer, toggleSubmenu, theme]
  );

  return (
    <StyledAppBar component="nav" position="static" aria-label="Main navigation">
      {/* Structured Data for SEO */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      <Container maxWidth="xl" sx={{ background: "transparent" }}>
        <StyledToolbar>
          {/* Logo/Brand */}
          <Box sx={{ background: "transparent" }}>
            {/* <img
              src={logo}
              alt="Astro Om Solution Logo"
              sx={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                borderRadius: theme.spacing(1),
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: theme.shadows[4],
                },
              }}
              className="h-8"
              loading="lazy"
            /> */}
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: 2, // Reduced gap for compactness
            }}
          >
            {menuItems.map((item, index) => (
              <Box key={index}>
                {item.submenu ? (
                  <>
                    <NavButton
                      onMouseEnter={(e) =>
                        handleMenuOpen(e, item.label.toLowerCase())
                      }
                      onClick={(e) =>
                        handleMenuOpen(e, item.label.toLowerCase())
                      }
                      onMouseLeave={handleMenuClose}
                      endIcon={<ExpandMoreIcon fontSize="small" />}
                      aria-haspopup="true"
                      aria-expanded={Boolean(getAnchorEl(item.label))}
                    >
                      {item.label}
                    </NavButton>
                    <StyledMenu
                      anchorEl={getAnchorEl(item.label)}
                      open={Boolean(getAnchorEl(item.label))}
                      onClose={handleMenuClose}
                      onMouseEnter={() => clearTimeout(closeTimeoutRef.current)}
                      onMouseLeave={handleMenuClose}
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <StyledMenuItem
                          key={subIndex}
                          onClick={handleMenuClose}
                          component={RouterLink}
                          to={subItem.to}
                        >
                          {subItem.label}
                        </StyledMenuItem>
                      ))}
                    </StyledMenu>
                  </>
                ) : (
                  <NavButton
                    component={RouterLink}
                    to={item.to}
                    aria-label={item.label}
                  >
                    {item.label}
                  </NavButton>
                )}
              </Box>
            ))}
          </Box>

          {/* Right Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.25 }}>
            <IconButtonStyled aria-label="Search">
              <SearchIcon fontSize="small" />
            </IconButtonStyled>
            <IconButtonStyled aria-label="Account">
              <PersonIcon fontSize="small" />
            </IconButtonStyled>
            <IconButtonStyled
              sx={{ display: { lg: "none" }, marginLeft: 0.25 }}
              onClick={toggleDrawer(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </IconButtonStyled>
          </Box>
        </StyledToolbar>
      </Container>

      {/* Mobile Drawer */}
      <StyledDrawer
        anchor="right"
        open={isMenuOpen}
        onClose={toggleDrawer(false)}
        aria-label="Mobile navigation"
      >
        {drawerList}
      </StyledDrawer>
    </StyledAppBar>
  );
});

Header.propTypes = {
  // No props currently, but added for future extensibility
};

export default Header;