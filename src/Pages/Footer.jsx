import React from "react";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import { Phone, Email } from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";

const navItems = ["Home", "About", "Products", "Gallery", "Testimonials", "Contact"];

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#23415C", py: 5, color: "white" }}>
      <Grid container spacing={4} justifyContent="center" sx={{ px: 3 }}>
        {/* Company Info */}
        <Grid item xs={12} sm={4} textAlign={{ xs: "center", sm: "left" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", fontFamily: "Playfair Display, serif" }}>
            KRS Hollow Blocks
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Chatrapatti,D.Pudhukottai 624-614

          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
  <Box display="flex" alignItems="center">
    <Phone fontSize="small" sx={{ mr: 1 }} />
    +91 97900 86894 | +91 99437 17808
  </Box>
</Typography>
<Typography variant="body2" sx={{ mt: 1 }}>
  <Box display="flex" alignItems="center">
    <Email fontSize="small" sx={{ mr: 1 }} />
    sivanesan1992@gmail.com
  </Box>
</Typography>
        </Grid>

        {/* Useful Links */}
        <Grid item xs={12} sm={2} textAlign={{ xs: "center", sm: "left" }}>
          <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
            Useful Links
          </Typography>
          {navItems.map((item) => (
            <Typography key={item} variant="body2" sx={{ mt: 1 }}>
              <NavLink to={`/${item.toLowerCase()}`} style={{ textDecoration: "none", color: "white" }}>
                {item}
              </NavLink>
            </Typography>
          ))}
        </Grid>

        {/* Our Services */}
        <Grid item xs={12} sm={3} textAlign={{ xs: "center", sm: "left" }}>
          <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
            Our Services
          </Typography>
          {["Hollow Blocks", "Molded Rings", "Molded Pillars", "Paver Blocks", "Construction Materials"].map((service) => (
            <Typography key={service} variant="body2" sx={{ mt: 1 }}>
              {service}
            </Typography>
          ))}
        </Grid>

        {/* Newsletter Subscription */}
        <Grid item xs={12} sm={3} textAlign={{ xs: "center", sm: "left" }}>
          <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "bold" }}>
            Our Newsletter
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Subscribe to receive updates about our products and services.
          </Typography>
          <Box display="flex" sx={{ mt: 2 }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Your email"
              sx={{ flexGrow: 1, bgcolor: "white", borderRadius: "5px" }}
            />
             {/* Using Link to navigate to the Contact Page */}
             <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="error" sx={{ ml: 1, px: 3 }}>
                Send
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>

      {/* Separator */}
      <Box mt={4} textAlign="center">
        <hr style={{ width: "80%", margin: "auto", border: "0.5px solid white" }} />
      </Box>

      {/* Footer Bottom - Social Icons & Copyright */}
      <Grid container justifyContent="center" alignItems="center" gap="3" sx={{ px: { xs: 2, md: 4 }, mt: 3 }}>
        <Grid item xs={12} md={6} textAlign={{ xs: "center", md: "left" }}>
          <Typography variant="body2" sx={{ fontSize: "14px" }}>
            Designed & Developed by <strong>Keerthana Duraisamy</strong> © 2025
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
