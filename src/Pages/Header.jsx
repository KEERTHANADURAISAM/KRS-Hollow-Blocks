import React from "react";
import { Box, Button, Typography,Grid} from "@mui/material";
import { motion } from "framer-motion";
import About from "./About";
import ProductCard from "./ProductCard";
import Services from "./Services";
import StatsCounter from "./StatsCounter";
import Testimonial from "./Testimonial";
import WhyChooseKRS from "./WhyChooseKRS";
import ImageGallery from "./ImageGallery";
import KRSProducts from "./KRSProducts";
import image1 from "/image-removebg-preview.png";
import { Link } from "react-router-dom";


const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};


const Header = () => {
  
  return (
    <>
   
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2, // Padding on sides for better spacing
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source
          src="/mixkit-building-under-construction-in-los-angeles-30431-hd-ready.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />

      {/* Text Content */}
      <Box
      sx={{
        position: "relative",
        zIndex: 2,
        color: "#fff",
        maxWidth: { xs: "90%", sm: "80%", md: "600px" },
        textAlign: "center",
        px: { xs: 3, sm: 5 },
      }}
      component={motion.div}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      {/* Title */}
      <motion.div variants={textVariants}>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            fontSize: { xs: "2.2rem", sm: "2.7rem", md: "3.2rem" },
          }}
        >
          High-Quality Hollow Blocks
        </Typography>
      </motion.div>

      {/* Subheading */}
      <motion.div variants={textVariants}>
        <Typography
          variant="h6"
          mt={2}
          sx={{
            fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.6rem" },
          }}
        >
          Durable | Reliable | Sustainable
        </Typography>
      </motion.div>

      {/* Description */}
      <motion.div variants={textVariants}>
        <Typography
          variant="body1"
          mt={2}
          maxWidth="600px"
          mx="auto"
          sx={{
            fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" },
            textAlign: "center",
            lineHeight: "1.6",
          }}
        >
          Crafted with precision and high-grade materials, our hollow blocks
          ensure strength and longevity for all construction needs.
        </Typography>
      </motion.div>

      {/* Button */}
      <motion.div variants={buttonVariants} whileHover="hover">
      <Button
    component={Link}
    to="/products"
    sx={{
      backgroundColor: "#23415C",
      mt: 3,
      px: 3,
      py: 1.5,
      color: "white",
      letterSpacing: 2,
      transition: "0.3s",
      "&:hover": {
        background: "linear-gradient(to right, #6278FE, #5DA0FB)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    }}
  >
    Explore Products
  </Button>
      </motion.div>
    </Box>
    </Box>
   {/* who we are */}
 <Box
        sx={{
          width: "100%",
          py: { xs: 4, md: 6 }, // Reduced top & bottom padding
          px: { xs: 2, md: 6 },
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "1000px",
            mx: "auto",
            gap: { xs: 3, md: 4 },
          }}
        >

          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{ flex: 3 }}
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
              What Defines Us
            </Typography>

            <Typography
              variant="body1"
              mt={2}
              sx={{
                fontSize: { xs: "0.95rem", sm: "1.1rem" },
                lineHeight: 1.6,
                color: "black",
                textAlign: { xs: "center", md: "left" },
                maxWidth: "700px",
              }}
            >
              KRS Hollow Block is a fast-growing and trusted name in the manufacturing of high-quality hollow blocks, paver blocks, molded rings, and pillars. Established in 2019, we proudly celebrate 6 successful years in the industry.
              {/* <br /><br /> */}
              From a 500 sq. ft. unit, we produce up to 1,200 hollow blocks per day, including paver blocks, molded rings, and pillars, using a consistent and efficient process.
              <br /><br />
              Our mission is to provide durable, sustainable materials for construction projects that stand the test of time.
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

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{ flex: 2, display: "flex", justifyContent: "center" }}
          >
            <img
              src={image1}
              alt="Hollow Blocks"
              style={{
                width: "100%",
                
                height: "auto",
                borderRadius: "10px",
                // objectFit: "contain",
              }}
            />
          </motion.div>

        </Box>
      </Box>


  {/* <ImageGallery/> */}
  <KRSProducts/>
   {/* <ProductCard/> */}
   <Services/>
<Testimonial/>
  <WhyChooseKRS/>
  <StatsCounter/>

    </>
  );
};

export default Header;
