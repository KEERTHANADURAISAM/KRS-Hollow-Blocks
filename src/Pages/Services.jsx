import React from "react";
import { Box, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedIcon from "@mui/icons-material/Verified";
import BuildIcon from "@mui/icons-material/Build";
import EngineeringIcon from "@mui/icons-material/Engineering";

const services = [
  {
    title: "On-Demand Manufacturing",
    image: "/service1.jpg",
    description: `We provide tailor-made hollow blocks, paver blocks, and molded rings to meet your project’s unique size, shape, and color needs.`,
    icon: <BuildIcon />,
  },
  {
    title: "24-Hour Direct-to-Site Delivery Services",
    image: "service2.jpg",
    description: `We ensure safe and timely delivery of all our construction products directly to your site, offering hassle-free logistics support.`,
    icon: <LocalShippingIcon />,
  },
  {
    title: "Manufacturing Standards",
    image: "/service4.jpg",
    description: `Every block and product is made using high-grade materials, guaranteeing durability, strength, and long-term performance.`,
    icon: <VerifiedIcon />,
  },
  {
    title: "Location-Based Assessment",
    image: "/service5.jpg",
    description: `Our expert team visits your site to assess requirements, suggest the best-fit products, and ensure perfect integration with your construction.`,
    icon: <EngineeringIcon />,
  },
];

const Services = () => {
  return (
    <Box sx={{ px: 2, py: 6, backgroundColor: "#FFFFFF" }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Typography variant="h4" fontWeight="bold" color="#6278FE" align="center">
          Our Services
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          sx={{ mb: 4, mt: 1 }}
        >
          We Provide 24-HOUR Delivery Services!
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "100%", sm: "48%", md: "32%", lg: "23%" },
                borderRadius: 2,
                overflow: "hidden",
                p: 2,
                boxShadow: 3,
                backgroundColor: "#fff",
              }}
            >
              <Box
                component="img"
                src={service.image}
                alt={service.title}
                sx={{
                  width: "100%",
                  height: 150,
                  objectFit: "cover",
                  borderRadius: 1,
                }}
              />
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                {React.cloneElement(service.icon, {
                  sx: { fontSize: 35, color: "#6278FE" },
                })}
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  align="center"
                  gutterBottom
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  {service.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
