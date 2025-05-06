import React from "react";
import { Box, Typography } from "@mui/material";
import { GiBrickWall, GiStoneBlock, GiStonePath } from "react-icons/gi";
import { FaColumns } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Import Link

const KRSProducts = () => {
  const features = [
    {
      icon: <GiBrickWall size={40} color="#6278FE" />,
      title: "Hollow Blocks",
      description: "High-quality, durable hollow blocks for strong and reliable construction projects.",
      path: "/products/hollow-blocks",
    },
    {
      icon: <GiStoneBlock size={40} color="#6278FE" />,
      title: "Molded Rings",
      description: "Precisely crafted molded rings designed for long-lasting infrastructure and drainage solutions.",
      path: "/products/molded-rings",
    },
    {
      icon: <FaColumns size={40} color="#6278FE" />,
      title: "Concrete Pillars",
      description: "Robust concrete pillars providing excellent support for various structural requirements.",
      path: "/products/molded-pillars",
    },
    {
      icon: <GiStonePath size={40} color="#6278FE" />,
      title: "Paver Blocks",
      description: "Stylish and durable paver blocks perfect for walkways, driveways, and landscaping projects.",
      path: "/products/paver-blocks",
    },
  ];

  return (
    <>
      <Box textAlign="center" py={4} sx={{ backgroundColor: "#f5f5f5" }}>
        <Typography variant="h4" fontWeight="bold" color="#6278FE">
          What We Offer
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" mt={1}>
          Explore our range of premium construction materials
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "stretch",
          gap: 4,
          px: { xs: 2, sm: 4 },
          py: 6,
          backgroundColor: "#f5f5f5",
        }}
      >
        {features.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            style={{ textDecoration: "none", color: "inherit", flex: "1 1 calc(25% - 32px)", minWidth: "200px" }}
          >
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: 2,
                boxShadow: 2,
                p: 3,
                textAlign: "center",
                transition: "transform 0.2s ease-in-out",
                 height:'240px',
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 4,
                 
                },
              }}
            >
              <Box mb={2}>{item.icon}</Box>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </Box>
          </Link>
        ))}
      </Box>
    </>
  );
};

export default KRSProducts;
