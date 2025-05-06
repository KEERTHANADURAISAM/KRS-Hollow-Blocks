import { Box, Button, Typography } from "@mui/material";
import { MdPlace } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { GiBrickWall } from "react-icons/gi";
import { SiMapillary } from "react-icons/si";
import React from "react";
import { GiBrickPile } from "react-icons/gi";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const useCases = [
  {
    title: "Residential Areas",
    description: "Ideal for verandas, compound walls, and exterior elevations.",
    image: "/pillar2.jpeg",
  },
  {
    title: "Commercial & Temples",
    description: "Used at entrances and facades to give a majestic appearance.",
    image: "/pillar6.jpg",
  },
  {
    title: "Gardens & Landscap",
    description: "Decorative pillars enhance garden aesthetics and walkways.",
    image: "/pillar13.jpg",
  },
  {
    title: "Gates & Boundaries",
    description: "Marks perimeters and supports fencing structures.",
    image: "/pillar4.jpg",
  },
  {
    title: "Public Monuments",
    description: "Perfect for enhancing the look of civic and heritage sites.",
    image: "/pillar7.jpg",
  },
  {
    title: "Pathway Lighting",
    description: "Acts as a decorative base for lamp posts and lights.",
    image: "/pillar12.jpg",
  },
  {
    title: "Balconies & Terraces",
    description: "Adds architectural elegance to upper levels of buildings.",
    image: "/pillar14.jpg",
  },
  {
    title: "Academy Architecture",
    description:
      "Used at school and college entrances to create grand entryways.",
    image: "/pillar15.jpg",
  },
];

const materials = [
  "Cement (OPC or PPC)",
  "Fine Aggregates (Sand)",
  "Coarse Aggregates (Gravel/Crushed Stone)",
  "Water (controlled ratio)",
  "Additives & Admixtures (for strength and workability)",
  "Optional Fiber Reinforcement (for crack resistance)",
];
const MoldedPillars = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "30vh", md: "100vh" },
          backgroundImage: `url('/product1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1,
          }}
        />
        {/* Title */}
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", zIndex: 2, position: "relative" }}
        >
          Molded Pillars
        </Typography>
      </Box>
<Box sx={{m:3}}>
<Button
  component={Link}
  to="/products"
  sx={{
    mt: 4,
    ml: 4,
    color: "#6278FE",            // Text color
    border: "1px solid #6278FE", // Border
    borderRadius: 2,             // Rounded corners
    textTransform: "none",       // Optional: keep text normal case
    px: 2,                       // Optional: horizontal padding
    py: 1,                       // Optional: vertical padding
    '&:hover': {
      backgroundColor: '#e0e7ff' // Optional: subtle hover effect
    }
  }}
>
  ← Back to Product
</Button>
</Box>
      {/* Content Section */}
      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 10 },
          py: 5,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "white",
        }}
      >
          
        {/* Collection */}
        <Box mb={5} maxWidth="800px">
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: "#6278FE",
              fontSize: {
                xs: "2rem", // smaller size on mobile
                sm: "2.5rem",
                md: "3rem",
                lg: "3.5rem", // full size on large screens
              },
            }}
          >
            What are Molded Pillars?
          </Typography>
          <Typography variant="body1" sx={{ mt: 4 }} paragraph>
            Molded Pillars are pre-cast concrete or decorative cement columns
            designed using customized molds to achieve consistent shapes,
            patterns, and finishes. Unlike traditional pillars made on-site,
            these are factory-molded for high precision, durability, and
            aesthetic appeal.
          </Typography>
        </Box>

        {/* Usage Section with Cards */}
        <Box mb={5} width="100%" textAlign="center">
          <Typography
            variant="h5"
            fontWeight="bold"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gutterBottom
            color="#6278FE"
          >
            <MdPlace size={28} color="#6278FE" style={{ marginRight: 8 }} />
            Where Can It Be Used?
          </Typography>

          <Box
            display="grid"
            gridTemplateColumns={{
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
              lg: "1fr 1fr 1fr 1fr",
            }}
            gap={4}
            mt={4}
            justifyContent="center" // 👈 Add this to center the grid
          >
            {useCases.map((card, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  height: "315px",
                  width: "260px",
                  overflow: "hidden",
                  borderRadius: "10px",
                  boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.2)",
                  mx: { xs: "100px", sm: 0 }, // 👈 Add horizontal auto margin on mobile
                }}
              >
                {/* Background Image */}
                <Box
                  component="img"
                  src={card.image}
                  alt={card.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* Overlay Content */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    bgcolor: "rgba(0, 0, 0, 0.7)",
                    color: "#fff",
                    p: 2,
                    height: "40%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: "#6278FE",
                        fontFamily: "Quicksand, sans-serif",
                        minHeight: "40px",
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Quicksand, sans-serif",
                        mt: 1,
                        minHeight: "40px",
                      }}
                    >
                      {card.description}
                    </Typography>
                  </Box>
                  <Button
                    sx={{
                      mt: 1,
                      px: 2,
                      py: 1,
                      color: "white",
                      letterSpacing: 2,
                      transition: "0.3s",
                      "&:hover": {
                        background:
                          "linear-gradient(to right, #6278FE, #5DA0FB)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        {/* composition */}
        <Box
          sx={{
            px: { xs: 2, sm: 4, md: 10 },
            py: 5,
            textAlign: "center",
            bgcolor: "#f9f9f9",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="#6278FE"
            gutterBottom
          >
            <GiBrickPile size={24} style={{ marginRight: 8 }} />
            Composition Used in Molded Pillars
          </Typography>

          <Typography variant="body1" mb={3}>
            Molded pillars are made from a carefully blended mix for durability
            and design precision. The common materials include:
          </Typography>

          <Box
            component="ul"
            sx={{
              listStyle: "none",
              p: 0,
              m: 0,
              maxWidth: "600px",
              mx: "auto", // ✅ centers the list block
            }}
          >
            {materials.map((item, idx) => (
              <li
                key={idx}
                style={{
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <BsCheckCircleFill
                  color="#6278FE"
                  style={{ marginRight: 10 }}
                />
                <Typography variant="body2" textAlign="left">
                  {item}
                </Typography>
              </li>
            ))}
          </Box>
        </Box>

        {/* Advantages */}
        <Box mb={5} maxWidth="800px">
          <Typography
            variant="h5"
            fontWeight="bold"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="#6278FE"
            gutterBottom
            mt="30px"
          >
            <GiBrickWall size={28} color="#6278FE" style={{ marginRight: 8 }} />
            Advantages
          </Typography>
          <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
            {[
              "Durable and weather-resistant",
              "Available in various styles and finishes",
              "Low maintenance and long-lasting",
              "Enhances structural appeal and strength",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <SiMapillary
                  style={{
                    color: "#6278FE",
                    marginRight: "10px",
                    verticalAlign: "middle",
                  }}
                />
                {item}
              </li>
            ))}
          </Box>
        </Box>

        {/* Installation */}
        <Box mb={5} maxWidth="800px">
          <Typography
            variant="h5"
            fontWeight="bold"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="#6278FE"
            gutterBottom
          >
            <FaTools size={24} color="#6278FE" style={{ marginRight: 8 }} />
            Installation
          </Typography>
          <Typography>
            Molded pillars are easy to install with concrete footing. Proper
            alignment and leveling ensure both structural integrity and
            aesthetic value. Our team offers expert assistance for hassle-free
            installation.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default MoldedPillars;
