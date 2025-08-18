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
import emailjs from '@emailjs/browser';

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

  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async () => {
    const result = validateForm();

    if (!result.valid) {
      setSnackbar({
        open: true,
        severity: "error",
        message: result.message,
      });
      return;
    }

    setLoading(true);

    try {
      // EmailJS configuration
      const serviceID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
      const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
      const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_name: 'KRS Hollow Blocks', // Your company name
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', response);

      setSnackbar({
        open: true,
        severity: "success",
        message: "Message sent successfully! We'll get back to you soon.",
      });

      // Clear form
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error('EmailJS error:', error);
      setSnackbar({
        open: true,
        severity: "error",
        message: "Failed to send message. Please try again or contact us directly.",
      });
    } finally {
      setLoading(false);
    }
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
    >
      <Typography
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
        Reach out to us for your construction needs. We're here to help you with durable and high-quality materials.
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
          <TextField 
            label="Name" 
            fullWidth 
            value={formData.name} 
            onChange={handleChange("name")}
            required
          />
          <TextField 
            label="Email" 
            type="email" 
            fullWidth 
            value={formData.email} 
            onChange={handleChange("email")}
            required
          />
          <TextField 
            label="Phone number" 
            fullWidth 
            value={formData.phone} 
            onChange={handleChange("phone")}
            required
          />
          <TextField 
            label="Subject" 
            fullWidth 
            value={formData.subject} 
            onChange={handleChange("subject")}
            required
          />
          <TextField 
            label="Message" 
            multiline 
            rows={4} 
            fullWidth 
            value={formData.message} 
            onChange={handleChange("message")}
            required
          />

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: 5, px: 4, alignSelf: "flex-start" }}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message →"}
            </Button>
            
            <a href="https://wa.me/919790086894" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outlined"
                startIcon={<WhatsAppIcon />}
                sx={{ borderRadius: 5, alignSelf: "flex-start", color: "#6278FE" }}
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.217874586154!2d77.63574087503928!3d10.45115708966296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9e1ee91ade487%3A0x42474c63034579b1!2sKRS%20hollow%20block!5e0!3m2!1sen!2sin!4v1723641000000!5m2!1sen!2sin"
            width="100%"
            height="490"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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