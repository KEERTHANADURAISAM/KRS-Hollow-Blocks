import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { SiMapillary } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const moldedRings = [
  {
    name: "Standard Molded Ring",
    diameter: "500mm",
    usage: "Waste water treatment plants",
    material: "High-strength concrete",
  },
  {
    name: "Heavy-Duty Molded Ring",
    diameter: "700mm",
    usage: "Industrial drainage systems",
    material: "Reinforced concrete",
  },
  {
    name: "Custom Molded Ring",
    diameter: "Custom",
    usage: "Specialized projects",
    material: "Varied materials",
  },
];

const moldedRingProductCards = [
  {
    title: "Standard Molded Ring",
    description: "Perfect for wastewater systems with standard requirements.",
    image: "/standard-ring.jpg",
  },
  {
    title: "Heavy-Duty Molded Ring",
    description: "Ideal for industrial and heavy-duty applications.",
    image: "/heavy-duty-ring.jpg",
  },
  {
    title: "Custom Molded Ring",
    description: "Tailored solutions for unique, large-scale projects.",
    image: "/custom-ring.jpg",
  },
];

const images = [
  "/ring1.jpg",
  "/ring2.jpg",
  "/ring3.jpg",
  "/ring4.jpg",
  "/ring5.jpg",
  "/ring6.jpg",
  "/ring7.jpg",
  "/ring8.jpg",
];

const MoldedRings = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <Box sx={{ backgroundColor: "white", color: "black" }}>
      {/* Heading with Background Image */}
      <Box
        sx={{
          backgroundImage: `url('/product3.jpg')`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          textAlign: "center",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold", letterSpacing: 2 }}>
          Molded Rings for Infrastructure
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
      {/* Introduction Section */}
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontFamily: "Quicksand, sans-serif",
            color: "black",
          }}
        >
          
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
            Why Choose Molded Rings?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 4,
              color: "black",
              fontFamily: "Quicksand, sans-serif",
              maxWidth: "800px",
              margin: "20px auto",
            }}
          >
            Molded rings are a crucial component in many industrial and
            infrastructural projects, providing durability, flexibility, and a
            reliable foundation for drainage and treatment systems.
          </Typography>

          <ul
            style={{
              paddingLeft: "20px",
              listStyleType: "none",
              marginTop: "20px",
              fontFamily: "Quicksand, sans-serif",
              textAlign: "left",
              maxWidth: "800px",
              margin: "20px auto",
            }}
          >
            {[
              "Durable and reliable for heavy-duty infrastructure.",
              "Wide range of sizes to suit different needs.",
              "Resistant to corrosion, ideal for industrial use.",
              "Can be customized to fit specific project requirements.",
              "Long-lasting performance with minimal maintenance.",
              "Made from high-strength concrete for extra durability.",
            ].map((item, index) => (
              <li
                key={index}
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
          </ul>
        </Box>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay]} // Add Autoplay module
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000 }} // Autoplay delay set to 3 seconds
          style={{
            marginTop: "2rem",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            height: "300px",
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Molded Ring ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Table for Molded Ring Variants */}
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
          Our Molded Ring Variants
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#23415C" }}>
                  <b>Product</b>
                </TableCell>
                <TableCell sx={{ color: "#23415C" }}>
                  <b>Diameter</b>
                </TableCell>
                <TableCell sx={{ color: "#23415C" }}>
                  <b>Usage</b>
                </TableCell>
                <TableCell sx={{ color: "#23415C" }}>
                  <b>Material</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {moldedRings.map((ring, index) => (
                <TableRow key={index}>
                  <TableCell>{ring.name}</TableCell>
                  <TableCell>{ring.diameter}</TableCell>
                  <TableCell>{ring.usage}</TableCell>
                  <TableCell>{ring.material}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Featured Product Cards */}
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: "bold",
            marginTop: "40px",
            color: "#6278FE",
            textAlign: "center",
            fontFamily: "Quicksand, sans-serif",
          }}
        >
          Featured Molded Rings
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {moldedRingProductCards.map((card, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                width: { xs: "100%", sm: "48%", md: "25%" }, // 4 cards in a row
                height: "300px",
                overflow: "hidden",
                borderRadius: 2,
                boxShadow: 3,
                mb: 5,
                mt: 3,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src={card.image}
                alt={card.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              {/* Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  bgcolor: "rgba(0, 0, 0, 0.7)", // Light black overlay (40% dark)
                  color: "#fff",
                  p: 2,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#6278FE",
                    fontFamily: "Quicksand, sans-serif",
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Quicksand, sans-serif", marginTop: "5px" }}
                >
                  {card.description}
                </Typography>
                <Button
                  sx={{
                    mt: 1,
                    px: 2,
                    py: 1,
                    color: "white",
                    letterSpacing: 2,
                    transition: "0.3s",
                    "&:hover": {
                      background: "linear-gradient(to right, #6278FE, #5DA0FB)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    },
                  }}
                  onClick={handleContactClick}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default MoldedRings;
