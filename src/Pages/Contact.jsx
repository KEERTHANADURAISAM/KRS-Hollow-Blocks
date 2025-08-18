import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contact = () => {
  const [formData, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: "success", // success | error
    message: "",
  });

  const handleChange = (name) => (e) => {
    setForm({ ...formData, [name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, phone, subject, message } = formData;

    if (!name || !email || !phone || !subject || !message) {
      return { valid: false, message: "All fields are required." };
    }

    if (!/^\d{10}$/.test(phone)) {
      return { valid: false, message: "Phone number must be 10 digits." };
    }

    if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(email)) {
      return { valid: false, message: "Invalid email format." };
    }

    return { valid: true };
  };

  const handleSubmit = () => {
    const result = validateForm();

    if (!result.valid) {
      setSnackbar({
        open: true,
        severity: "error",
        message: result.message,
      });
      return;
    }

    // Here you’d typically send the data to backend.
    setSnackbar({
      open: true,
      severity: "success",
      message: "Message sent successfully!",
    });

    // Clear form
    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Box
      sx={{
        bgcolor: "#f5f5f5",
        py: 8,
        px: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    ><Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "1.6rem", sm: "2.2rem", md: "3rem" },
                    color: "#6278FE",
                    fontWeight: "bold",
                    textAlign: { xs: "center", md: "left" },
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                Get In Touch
                </Typography>
      <Typography variant="body1" color="text.secondary" mb={4} textAlign="center">
        Reach out to us for your construction needs. We’re here to help you with durable and high-quality materials.
      </Typography>

      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          maxWidth: 1100,
          width: "100%",
          p: 4,
          borderRadius: 3,
        }}
      >
        {/* Left: Contact Form */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField label="Name" fullWidth value={formData.name} onChange={handleChange("name")} />
          <TextField label="Email" type="email" fullWidth value={formData.email} onChange={handleChange("email")} />
          <TextField label="Phone number" fullWidth value={formData.phone} onChange={handleChange("phone")} />
          <TextField label="Subject" fullWidth value={formData.subject} onChange={handleChange("subject")} />
          <TextField label="Message" multiline rows={4} fullWidth value={formData.message} onChange={handleChange("message")} />

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: 5, px: 4, alignSelf: "flex-start" }}
              onClick={handleSubmit}
            >
              Send Message →
            </Button>
            <a href="https://wa.me/919790086894" target="_blank" rel="noopener noreferrer">


            <Button
              variant="outlined"

              startIcon={<WhatsAppIcon />}
               sx={{ borderRadius: 5, alignSelf: "flex-start",color: "#6278FE", }}
            >
              Chat on WhatsApp
            </Button>
            </a>
          </Box>
        </Box>

        {/* Right: Map Iframe */}
        <Box
          sx={{
            flex: 1,
            minHeight: 400,
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 2,
          }}
        >
          <iframe
            title="KRS Hollow Block Location"
            src="https://maps.app.goo.gl/qevFzy1gKWgdoDuW7" // Replace with your real embed link
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Box>
      </Paper>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity={snackbar.severity}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
