import React from "react";
import { motion } from "framer-motion";
import { Box, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const products = [
  { name: "Hollow Blocks", image: "/block-removebg-preview.png" },
  { name: "Molded Rings", image: "/mold_rings-removebg-preview.png" },
  { name: "Molded Pillars", image: "/pngtree-white-roman-pillar-building-png-image_13539431.png" },
  { name: "Paver Blocks", image: "/paver-removebg-preview.png" },
];

const ProductCard = () => {
  return (
    <Box sx={{ textAlign: "center", py: 5, backgroundColor: "#D3D9DE" }}>
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "2rem" }, color: "#23415C", textAlign: "center", mb: 4 }}>
        Our Products
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Link to={`/products/${product.name.toLowerCase().replace(/\s+/g, "-")}`} style={{ textDecoration: "none" }}>
              <motion.div
                whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.3 }}
                style={{
                  backgroundColor: "#697E90",
                  padding: "20px",
                  borderRadius: "15px",
                  textAlign: "center",
                  boxShadow: "0px 6px 12px rgba(255, 255, 255, 0.2)",
                  maxWidth: "320px",
                  width: "100%",
                  margin: "auto",
                  mt:'10px'
                }}
              >
                <img src={product.image} alt={product.name} style={{ width: "100%", height: "200px", borderRadius: "10px", objectFit: "cover" }} />
                <Typography variant="h6" sx={{ mt: 2, color: "white", fontSize: "1.2rem", fontWeight: "bold" }}>
                  {product.name}
                </Typography>
              </motion.div>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductCard;
