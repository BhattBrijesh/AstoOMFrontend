import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Typography,
  Paper,
  CircularProgress,
  Alert,
  Card,
  CardContent,
  Grid,
  Chip,
  Container,
  IconButton,
  Tooltip,
  Stack,
  Divider,
  useTheme,
  alpha,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  DataGrid,
  GridActionsCellItem,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import {
  ContactMail,
  QuestionAnswer,
  Visibility,
  Email,
  Phone,
  CalendarToday,
  TrendingUp,
} from "@mui/icons-material";
import axios from "axios";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";

// Custom Toolbar Component
function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

// Stats Card Component (unchanged)
const StatsCard = ({ title, count, icon, color, trend }) => {
  const theme = useTheme();

  return (
    <Card
      elevation={3}
      sx={{
        background: `linear-gradient(135deg, ${color}15, ${color}05)`,
        border: `1px solid ${alpha(color, 0.2)}`,
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: theme.shadows[6],
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: "#fff",
                mb: 1,
                fontSize: "0.875rem",
                fontWeight: 500,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="h3"
              component="div"
              sx={{ color: "#ff9800", fontWeight: "bold", mb: 1 }}
            >
              {count}
            </Typography>
            {trend && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <TrendingUp sx={{ fontSize: 16, color: "success.main" }} />
                <Typography
                  variant="caption"
                  sx={{
                    color: "success.main",
                    fontWeight: "bold",
                    fontSize: "large",
                  }}
                >
                  +{trend}% this month
                </Typography>
              </Box>
            )}
          </Box>
          <Box
            sx={{
              backgroundColor: alpha(color, 0.1),
              borderRadius: 2,
              p: 1.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {React.cloneElement(icon, { sx: { fontSize: 28, color } })}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

const Dashboard = () => {
  const theme = useTheme();
  const [contactUsData, setContactUsData] = useState([]);
  const [inquiryData, setInquiryData] = useState([]);
  const [contactUsTotalCount, setContactUsTotalCount] = useState(0);
  const [inquiryTotalCount, setInquiryTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [contactUsError, setContactUsError] = useState("");
  const [inquiryError, setInquiryError] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [modalType, setModalType] = useState("");

  // Pagination states
  const [contactUsPaginationModel, setContactUsPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const [inquiryPaginationModel, setInquiryPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const navigate = useNavigate();

  // Handle opening the modal and setting the selected row
  const handleViewDetails = useCallback((row, type) => {
    setSelectedRow(row);
    setModalType(type);
    setOpenModal(true);
  }, []);

  // Handle closing the modal
  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedRow(null);
    setModalType("");
  };

  // Enhanced columns for Contact Us
  const contactUsColumns = [
    {
      field: "createdAt",
      headerName: "Date",
      width: 130,
      type: "date",
      valueGetter: (params) => {
        return params ? new Date(params) : null;
      },
      valueFormatter: (params) => {
        if (!params || params.value === undefined || params.value === null) {
          return "";
        }
        return moment(params.value).format("DD/MM/YYYY");
      },
      renderCell: (params) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CalendarToday sx={{ fontSize: 16, color: "text.secondary" }} />
          <Typography variant="body2">
            {moment(params.value).format("DD/MM/YYYY")}
          </Typography>
        </Box>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      renderCell: (params) => (
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          {params.value}
        </Typography>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      renderCell: (params) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Email sx={{ fontSize: 16, color: "text.secondary" }} />
          <Typography variant="body2">{params.value}</Typography>
        </Box>
      ),
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
      renderCell: (params) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Phone sx={{ fontSize: 16, color: "text.secondary" }} />
          <Typography variant="body2">{params.value}</Typography>
        </Box>
      ),
    },
    {
      field: "message",
      headerName: "Message",
      width: 250,
      renderCell: (params) => (
        <Tooltip title={params.value} arrow>
          <Typography
            variant="body2"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: "100%",
            }}
          >
            {params.value}
          </Typography>
        </Tooltip>
      ),
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<Visibility />}
          label="View Details"
          onClick={() => handleViewDetails(params.row, "Contact")}
          color="primary"
        />,
      ],
    },
  ];

  // Enhanced columns for Inquiry (similar structure, updated actions)
  const inquiryColumns = [
    {
      field: "createdAt",
      headerName: "Date",
      width: 130,
      type: "date",
      valueGetter: (params) => {
        return params ? new Date(params) : null;
      },
      valueFormatter: (params) => {
        if (!params || params.value === undefined || params.value === null) {
          return "";
        }
        return moment(params.value).format("DD/MM/YYYY");
      },
      renderCell: (params) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CalendarToday sx={{ fontSize: 16, color: "text.secondary" }} />
          <Typography variant="body2">
            {moment(params.value).format("DD/MM/YYYY")}
          </Typography>
        </Box>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      renderCell: (params) => (
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          {params.value}
        </Typography>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      renderCell: (params) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Email sx={{ fontSize: 16, color: "text.secondary" }} />
          <Typography variant="body2">{params.value}</Typography>
        </Box>
      ),
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
      renderCell: (params) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Phone sx={{ fontSize: 16, color: "text.secondary" }} />
          <Typography variant="body2">{params.value}</Typography>
        </Box>
      ),
    },
    {
      field: "subject",
      headerName: "Subject",
      width: 200,
      renderCell: (params) => (
        params.value &&
        <Chip
          label={params.value}
          size="small"
          variant="outlined"
          color="secondary"
          sx={{ maxWidth: "100%" }}
        />
      ),
    },
    {
      field: "message",
      headerName: "Message",
      width: 250,
      renderCell: (params) => (
        <Tooltip title={params.value} arrow>
          <Typography
            variant="body2"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: "100%",
            }}
          >
            {params.value}
          </Typography>
        </Tooltip>
      ),
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<Visibility />}
          label="View Details"
          onClick={() => handleViewDetails(params.row, "Inquiry")}
          color="secondary"
        />,
      ],
    },
  ];

  const getContactUsData = async () => {
    try {
      const contactUsResponse = await axios.get(
        "https://asto-om-backend.vercel.app/api/getContactDetails"
      );
      const data = Array.isArray(contactUsResponse.data.data)
        ? contactUsResponse.data.data
        : [];

      const contactUsDataWithId = data.map((item, index) => {
        if (!item.createdAt) {
          console.warn(`Missing createdAt in Contact Us item:`, item);
        }
        return {
          id: `contact-${index}`,
          ...item,
          createdAt: item.createdAt || null,
        };
      });
      setContactUsData(contactUsDataWithId);
      setContactUsTotalCount(contactUsResponse.data.totalCount || data.length);
    } catch (err) {
      setContactUsError(
        err.response?.data?.message || "Failed to fetch Contact Us data."
      );
      console.error("Contact Us fetch error:", err);
    }
  };

  const getInquiryData = async () => {
    try {
      const inquiryResponse = await axios.get(
        "https://asto-om-backend.vercel.app/api/getInquiryDetails"
      );
      const data = Array.isArray(inquiryResponse.data.data)
        ? inquiryResponse.data.data
        : [];

      const inquiryDataWithId = data.map((item, index) => {
        if (!item.createdAt) {
          console.warn(`Missing createdAt in Inquiry item:`, item);
        }
        return {
          id: `inquiry-${index}`,
          ...item,
          createdAt: item.createdAt || null,
        };
      });
      setInquiryData(inquiryDataWithId);
      setInquiryTotalCount(inquiryResponse.data.totalCount || data.length);
    } catch (err) {
      setInquiryError(
        err.response?.data?.message || "Failed to fetch Inquiry data."
      );
      console.error("Inquiry fetch error:", err);
    }
  };

  const handleAstroLogin = () => {

    navigate("/register");
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setContactUsError("");
      setInquiryError("");
      try {
        await Promise.all([getContactUsData(), getInquiryData()]);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 400,
          }}
        >
          <CircularProgress size={48} />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            mb: 1,
          }}
        >
          Dashboard
        </Typography>
        <Typography variant="h6" color="#ffff">
          Manage your contacts and inquiries efficiently
        </Typography>
        <Box
          sx={{
            textAlign: "right",
            color: "#ff9800",
          }}
        >
          <Button
            onClick={handleAstroLogin}
            sx={{
              mt: 1,
              textAlign: "center",
              color: "#ff9800",
              textDecoration: "none",
              "&:hover": { textDecoration: "none" },
            }}
          >
            Click here to Register
          </Button>
        </Box>
      </Box>

      {/* Error Alerts */}
      <Stack spacing={2} sx={{ mb: 3 }}>
        {contactUsError && (
          <Alert severity="error" variant="filled">
            <strong>Contact Us Error:</strong> {contactUsError}
          </Alert>
        )}
        {inquiryError && (
          <Alert severity="error" variant="filled">
            <strong>Inquiry Error:</strong> {inquiryError}
          </Alert>
        )}
      </Stack>

      {/* Stats Cards */}
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: 3,
          padding: 3,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Grid container spacing={3} sx={{ mb: 0 }}>
          <Grid item xs={12} sm={6} md={6}>
            <StatsCard
              title="Total Contacts"
              count={contactUsTotalCount}
              icon={<ContactMail />}
              color={theme.palette.primary.main}
              trend={15}
              countColor="red"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <StatsCard
              title="Total Inquiries"
              count={inquiryTotalCount}
              icon={<QuestionAnswer />}
              color={theme.palette.secondary.main}
              trend={8}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Contact Us Table */}
      <Paper
        elevation={3}
        sx={{
          mb: 4,
          borderRadius: 2,
          overflow: "hidden",
          border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
        }}
      >
        <Box
          sx={{
            p: 3,
            backgroundColor: alpha(theme.palette.primary.main, 0.05),
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <ContactMail />
            Contact Us Details
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            View and manage all contact form submissions
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ height: 600, width: "100%" }}>
          <DataGrid
            rows={contactUsData}
            columns={contactUsColumns}
            paginationModel={contactUsPaginationModel}
            onPaginationModelChange={setContactUsPaginationModel}
            pageSizeOptions={[5, 10, 25, 50]}
            disableRowSelectionOnClick
            slots={{
              toolbar: CustomToolbar,
            }}
            sx={{
              border: 0,
              "& .MuiDataGrid-cell:hover": {
                color: "primary.main",
              },
              "& .MuiDataGrid-row:hover": {
                backgroundColor: alpha(theme.palette.primary.main, 0.04),
              },
            }}
          />
        </Box>
      </Paper>

      {/* Inquiry Table */}
      <Paper
        elevation={3}
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          border: `1px solid ${alpha(theme.palette.secondary.main, 0.1)}`,
        }}
      >
        <Box
          sx={{
            p: 3,
            backgroundColor: alpha(theme.palette.secondary.main, 0.05),
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: "secondary.main",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <QuestionAnswer />
            Inquiry Details
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Track and respond to customer inquiries
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ height: 600, width: "100%" }}>
          <DataGrid
            rows={inquiryData}
            columns={inquiryColumns}
            paginationModel={inquiryPaginationModel}
            onPaginationModelChange={setInquiryPaginationModel}
            pageSizeOptions={[5, 10, 25, 50]}
            disableRowSelectionOnClick
            slots={{
              toolbar: CustomToolbar,
            }}
            sx={{
              border: 0,
              "& .MuiDataGrid-cell:hover": {
                color: "secondary.main",
              },
              "& .MuiDataGrid-row:hover": {
                backgroundColor: alpha(theme.palette.secondary.main, 0.04),
              },
            }}
          />
        </Box>
      </Paper>

      {/* Modal for displaying user details */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            border: `1px solid ${alpha(
              modalType === "Contact"
                ? theme.palette.primary.main
                : theme.palette.secondary.main,
              0.2
            )}`,
          },
        }}
      >
        <DialogTitle
          sx={{
            backgroundColor:
              modalType === "Contact"
                ? alpha(theme.palette.primary.main, 0.05)
                : alpha(theme.palette.secondary.main, 0.05),
            color:
              modalType === "Contact"
                ? theme.palette.primary.main
                : theme.palette.secondary.main,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {modalType === "Contact" ? <ContactMail /> : <QuestionAnswer />}
          {modalType} Details
        </DialogTitle>
        <DialogContent
          sx={{
            py: 3,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {selectedRow && (
            <>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CalendarToday sx={{ fontSize: 20, color: "text.secondary" }} />
                <Typography variant="body1">
                  <strong>Date:</strong>{" "}
                  {selectedRow.createdAt
                    ? moment(selectedRow.createdAt).format("DD/MM/YYYY")
                    : "N/A"}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <ContactMail sx={{ fontSize: 20, color: "text.secondary" }} />
                <Typography variant="body1">
                  <strong>Name:</strong> {selectedRow.name || "N/A"}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Phone sx={{ fontSize: 20, color: "text.secondary" }} />
                <Typography variant="body1">
                  <strong>Phone:</strong> {selectedRow.phone || "N/A"}
                </Typography>
              </Box>
              {modalType === "Contact" && (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Email sx={{ fontSize: 20, color: "text.secondary" }} />
                  <Typography variant="body1">
                    <strong>Email:</strong> {selectedRow.email || "N/A"}
                  </Typography>
                </Box>
              )}
              {modalType === "Contact" && (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography variant="body1">
                    <strong>Message:</strong> {selectedRow.message || "N/A"}
                  </Typography>
                </Box>
              )}
              {modalType === "Inquiry" && (
                <>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Email sx={{ fontSize: 20, color: "text.secondary" }} />
                    <Typography variant="body1">
                      <strong>Email:</strong> {selectedRow.email || "N/A"}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography variant="body1">
                      <strong>Subject:</strong> {selectedRow.subject || "N/A"}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography variant="body1">
                      <strong>Message:</strong> {selectedRow.message || "N/A"}
                    </Typography>
                  </Box>
                </>
              )}
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseModal}
            color="primary"
            variant="contained"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Dashboard;
