import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { MdDesignServices } from "react-icons/md";
import { FaLeaf } from "react-icons/fa";
import { GiBrickWall, GiReceiveMoney } from "react-icons/gi";
import { SiMapillary } from "react-icons/si";
import { motion } from "framer-motion";

const features = [
  {
    title: "Durable & Long-Lasting",
    description:
      "Our hollow blocks and molded rings are designed to withstand harsh weather and heavy loads, making them ideal for long-term construction needs.",
    icon: <GiBrickWall size={40} color="#6278FE" />,
  },
  {
    title: "Eco-Friendly Construction",
    description:
      "Paver blocks and hollow blocks reduce construction waste and support sustainable building practices with minimal maintenance needs.",
    icon: <FaLeaf size={40} color="#6278FE" />,
  },
  {
    title: "Cost-Effective Solutions",
    description:
      "Our molded rings and pillars offer high quality at an affordable price, reducing labor and material costs in construction projects.",
    icon: <GiReceiveMoney size={40} color="#6278FE" />,
  },
  {
    title: "Versatile Applications",
    description:
      "From residential pavements to heavy-duty infrastructure, our blocks and rings fit diverse applications with aesthetic and functional appeal.",
    icon: <MdDesignServices size={40} color="#6278FE" />,
  },
];

const stats = [
  { title: "50 Tonnes per day", subtitle: "of firing capacity" },
  { title: "500 sq. feet", subtitle: "of manufacturing facility" },
  { title: "6 years of", subtitle: "Trusted Experience" },
  { title: "99% Satisfaction", subtitle: "from our clients" },
  { title: "120+ Projects", subtitle: "completed successfully" },
  { title: "24-Hour Delivery", subtitle: "across all locations" },
];

const AboutGallery = () => {
  const images = ["/gallery1.jpg", "/gallery2.jpg","/gallery5.jpg","/pillarKRs2.jpg"];

  return (
    <Box sx={{ p: { xs: 2, sm: 4 }, backgroundColor: "white" }}>
      {/* Brief Description */}
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          px: { xs: 2, sm: 3 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#6278FE",
              mt: 6,
              mb: 2,
              textAlign: "center",
              fontFamily: "Quicksand, sans-serif",
            }}
          >
            Why Choose KRS Hollow Blocks?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", sm: "1.2rem" },
              color: "black",
              textAlign: "justify",
            }}
          >
           At KRS, we understand the practical and design needs of modern
              construction. Our products are known not only for their structural
              strength but also for their refined appearance, reducing the need
              for additional plastering or painting.  <br />
              <br />
              Whether it’s for residential, commercial, or public
              infrastructure, our products are built to withstand the test of
              time.
              <br />
              <br />
              We use carefully selected raw materials and maintain stringent
              quality control at every step — from raw material testing and
              mixing to molding, curing, and finishing. The result is a product
              line that offers:
          </Typography>

          {/* First Feature List */}
          <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      mt: 3,
    }}
  >
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: 0,
              marginTop: 20,
              fontFamily: "Quicksand, sans-serif",
              maxWidth: "800px",
              margin: "20px auto",
              
            }}
          >
            {[
              "High compressive strength",
              "Low water absorption",
              "Excellent weather resistance",
              "Minimal maintenance requirements",
            ].map((item, index) => (
              <li
                key={index}
                style={{
                  marginBottom: 10,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <SiMapillary color="#6278FE" style={{ marginRight: 10 }} />
                {item}
              </li>
            ))}
          </ul>
          </Box>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", sm: "1.2rem" },
              color: "black",
              textAlign: "justify",
            }}
          >
                   We also cater to customized needs and collaborate with builders
              and contractors to provide size or shape variations for special
              projects. With our commitment to quality, precision, and customer
              satisfaction, KRS Hollow Block has earned the trust of clients
              across the region.
          </Typography>

          {/* Second Feature List */}
          <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      mt: 3,
    }}
  >
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: 0,
              marginTop: 20,
              fontFamily: "Quicksand, sans-serif",
              maxWidth: "800px",
              margin: "20px auto",
              
            }}
          >
            {[
              "Quality that lasts for decades",
"No painting or plastering required",
"High production capacity to meet large-scale demands",
"Customization support for special projects",
"Six years of proven excellence in the field",
            ].map((item, index) => (
              <li
                key={index}
                style={{
                  marginBottom: 10,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <SiMapillary color="#6278FE" style={{ marginRight: 10 }} />
                {item}
              </li>
            ))}
          </ul>
          </Box>

        </motion.div>
      </Box>

      {/* Stats Section */}
      <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 3,
        mt: 4,
        px: { xs: 2, sm: 4 },
      }}
    >
      {stats.map((stat, index) => (
        <Paper
          key={index}
          elevation={4}
          sx={{
            flex: "1 1 300px", // grows to fill space, minimum width 300px
            maxWidth: "300px",
            p: 3,
            textAlign: "center",
            borderLeft: "6px solid #6278FE",
          }}
        >
          <Typography variant="h6" sx={{ color: "#6278FE" }}>
            {stat.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {stat.subtitle}
          </Typography>
        </Paper>
      ))}
    </Box>


      {/* Gallery Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(4, 1fr)",
          },
          gap: 3,
          mt: 5,
          px: { xs: 1, sm: 3 },
        }}
      >
        {images.map((src, index) => (
          <Paper
            key={index}
            elevation={5}
            sx={{
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Paper>
        ))}
      </Box>

      {/* Ethics Section */}
      <Box sx={{ mt: 6 }}>
  <Typography
    variant="h5"
    sx={{
      fontWeight: "bold",
      color: "#6278FE",
      textAlign: "center",
      fontFamily: "Quicksand, sans-serif",
    }}
  >
    Ethics
  </Typography>

  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      mt: 3,
    }}
  >
    <ul
      style={{
        listStyleType: "none",
        fontFamily: "Quicksand, sans-serif",
        maxWidth: "800px",
        padding: 0,
      }}
    >
      {[
        "Use world class technologies to produce superior quality products",
        "Have stringent quality checks before dispatch",
        "Testing the performance of all the products, by reputed labs",
      ].map((item, index) => (
        <li
          key={index}
          style={{
            marginBottom: 10,
            display: "flex",
            alignItems: "center",
          }}
        >
          <SiMapillary color="#6278FE" style={{ marginRight: 10 }} />
          {item}
        </li>
      ))}
    </ul>
  </Box>
</Box>

      {/* Product Strength */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "#6278FE",
          mt: 6,
          mb: 2,
          textAlign: "center",
          fontFamily: "Quicksand, sans-serif",
        }}
      >
        Our Product's Strength
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr 1fr",
          },
          gap: 3,
          px: { xs: 1, sm: 3 },
        }}
      >
        {features.map((item, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              p: 3,
              borderRadius: 3,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box sx={{ mb: 2 }}>{item.icon}</Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default AboutGallery;


