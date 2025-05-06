import React from "react";
import {
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { SiMapillary } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const paverBlocks = [
  {
    name: "Standard Paver Block",
    thickness: "60mm",
    usage: "Pedestrian pathways, light traffic areas",
    color: "Natural Grey, Red, Yellow",
  },
  {
    name: "Heavy-Duty Paver Block",
    thickness: "80mm",
    usage: "Driveways, moderate vehicular traffic",
    color: "Grey, Red, Yellow",
  },
  {
    name: "Industrial Paver Block",
    thickness: "100mm",
    usage: "Industrial yards, heavy-duty areas",
    color: "Customizable",
  },
];

const paverProductCards = [
  {
    title: "Standard Paver",
    description: "Perfect for light traffic and pathways.",
    image: "/paver.jpg",
  },
  {
    title: "Heavy-Duty Paver",
    description: "Ideal for driveways and moderate traffic.",
    image: "/KRS-Heavy-Paver.jpeg",
  },
  {
    title: "Industrial Paver",
    description: "Designed for heavy-duty industrial use.",
    image: "/KRS-Industri-Paver.jpeg",
  },
  {
    title: "Custom Design Paver",
    description: "Tailored designs for unique projects.",
    image: "/KRS Custom Paver.jpeg",
  },
];

// Image carousel data
const images = [
  "/paver1.jpg",
  "/paver2.jpg",
  "/paver3.jpg",
  "/paver4.jpg",
  "/paver5.jpg",
  "/paver6.jpg",
  "/paver7.jpg",
  "/paver8.jpg",
];

const PaverBlocks = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };
  return (
    <Box sx={{ backgroundColor: "white", color: "black" }}>
      {/* Heading with Background Image */}
      <Box
        sx={{
          backgroundImage: `url('/paverblack.avif')`,
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
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          Paver Blocks
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
      {/* Introduction Content */}
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
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
            Benefits of Interlocking Paver Blocks
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mt: 4,
              color: "black",
              fontFamily: "Quicksand, sans-serif",
            }}
          >
            The modern interlocking concrete pavers are crafted in various
            patterns, bringing vibrancy and elegance to any space.
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
              "These pavers combine style, colour, and unique designs while delivering a tough and long-lasting surface.",
              "They create a superior integrated system suitable for both residential and commercial vehicle traffic.",
              "Once installed properly, they demand very minimal maintenance and resist spills like oil and fuel.",
              "Pavers are ready for use immediately after installation is completed.",
              "They can be easily removed and reinstalled for underground repairs without leaving any visible patches.",
              "Offer excellent skid and slip resistance, enhancing safety.",
              "Provide a cooler surface compared to traditional pavement options.",
              "Simple to adjust for grade transitions and different elevation levels.",
              "Boast a long service life with reduced long-term maintenance costs.",
              "Unlike asphalt and traditional concrete, interlocking pavers flex with ground movement, preventing cracks.",
              "They are easy to repair or replace, unlike asphalt or stamped concrete surfaces.",
              "Highly resistant to damage from freeze-thaw cycles and de-icing chemicals.",
              "Available in countless colour blends, shapes, and design patterns to match any landscape style.",
              "With proper care, paving stones can last more than 30 years, far outlasting other pavement solutions.",
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
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000 }}
          style={{
            marginTop: "2rem",
            width: "100%",
            padding: "0 16px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  height: "350px", // ✅ Set fixed height
                  margin: "0 auto",
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              >
                <img
                  src={img}
                  alt={`Concrete Block ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // ✅ Ensures uniform crop/fill
                    display: "block",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Table */}
        <Typography
          variant="h5"
          // gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#6278FE",
            mt: 6,
            mb: 2,
            textAlign: "center",
            fontFamily: "Quicksand, sans-serif",
          }}
        >
          Our Paver Block Variants
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#23415C" }}>
                  <b>Product</b>
                </TableCell>
                <TableCell sx={{ color: "#23415C" }}>
                  <b>Thickness</b>
                </TableCell>
                <TableCell sx={{ color: "#23415C" }}>
                  <b>Usage</b>
                </TableCell>
                <TableCell sx={{ color: "#23415C" }}>
                  <b>Available Colors</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paverBlocks.map((block, index) => (
                <TableRow key={index}>
                  <TableCell>{block.name}</TableCell>
                  <TableCell>{block.thickness}</TableCell>
                  <TableCell>{block.usage}</TableCell>
                  <TableCell>{block.color}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#6278FE",
              fontFamily: "Quicksand, sans-serif",
            }}
          >
            Installation Guidelines
          </Typography>
          <Box
            sx={{
              textAlign: "justify",
              color: "black",
              mt: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
                "Excavate and prepare the site with a stable base.",
                "Lay a compacted layer of crushed stone or gravel.",
                "Apply sand bedding for a level surface.",
                "Install paver blocks in the desired pattern.",
                "Compact the pavers and fill joints with sand.",
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
        </Box>
        {/* Cards Section */}
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
          Featured Paver Block Designs
        </Typography>

        {/* Cards Section */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {paverProductCards.map((card, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                width: { xs: "100%", sm: "48%", md: "22%" }, // Now 4 cards in row
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
                    // background: "linear-gradient(to right, #6278FE, #5DA0FB)",
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

export default PaverBlocks;
