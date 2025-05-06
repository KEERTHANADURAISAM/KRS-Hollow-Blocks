import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import image1 from "/images-removebg-preview.png";
import AboutGallery from "./AboutGallery";
import StatsCounter from "./StatsCounter";

const About = () => {
  return (
    <Box>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundImage: `url('/bgAbout.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          py: 6,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "white",
            fontWeight: "bold",
            fontFamily: "'Playfair Display', serif",
            textAlign: "center",
            fontSize: { xs: "2rem", md: "4rem" },
            borderBottom: "1px dashed white",
            display: "inline-block",
            pb: 1,
          }}
        >
          About Us
        </Typography>
      </Box>

      {/* About Content */}
      <Box
        sx={{
          width: "100%",
          py: { xs: 4, md: 6 },
          px: { xs: 2, md: 4 },
          backgroundColor: "white",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: { xs: 4, md: 6 },
            }}
          >
            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              style={{ flex: 1 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem" },
                  color: "#6278FE",
                  fontWeight: "bold",
                  textAlign: { xs: "center", md: "left" },
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                About KRS Hollow Blocks
              </Typography>

              <Typography
                variant="body1"
                mt={2}
                sx={{
                  fontSize: { xs: "0.95rem", sm: "1.1rem" },
                  lineHeight: 1.6,
                  color: "black",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                KRS Hollow Block is a fast-growing and trusted name in the manufacturing
                of high-quality hollow blocks, paver blocks, molded rings, and pillars.
                Established in 2019, we proudly celebrate 6 successful years in the industry.
                <br /><br />
                From a 500 sq. ft. unit, we produce up to 1,200 hollow blocks per day,
                including paver blocks, molded rings, and pillars, using a consistent
                and efficient process.
                <br /><br />
                Our mission is to provide durable, sustainable materials for construction
                projects that stand the test of time.
              </Typography>

              <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" }, mt: 3 }}>
                <Button
                  sx={{
                    px: 4,
                    py: 1.5,
                    backgroundColor: "#6278FE",
                    color: "white",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    letterSpacing: 1,
                    "&:hover": { backgroundColor: "#5DA0FB" },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              style={{ flex: 1, display: "flex", justifyContent: "center" }}
            >
              <img
                src={image1}
                alt="Hollow Blocks"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  height: "auto",
                  borderRadius: "10px",
                  objectFit: "contain",
                }}
              />
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Gallery and Counter Section */}
      <AboutGallery />
      <StatsCounter />
    </Box>
  );
};

export default About;
