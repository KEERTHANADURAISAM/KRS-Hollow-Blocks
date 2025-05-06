import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { SiMapillary } from "react-icons/si";

const WhyChooseKRS = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Box
        sx={{
          backgroundColor: "#ffffff",
          padding: 6,
          boxShadow: 3,
          borderRadius: 0,
          textAlign: "center",
          fontFamily: "Raleway, sans-serif",
        }}
      >
        <Typography variant="h4" fontWeight="bold" color="#6278FE">
        Why Buy Building Material from KRS Hollow Block
                </Typography>
                <Typography
  variant="body1"
  sx={{ mt: 2, color: "#000000", textAlign: "justify" }}
>
  When it comes to building materials, <strong>KRS Hollow Block</strong> stands out as a trusted name
  in Tamil Nadu. As one of the leading manufacturers of <strong>hollow blocks, paver blocks, molded rings,</strong> 
  and <strong>pillars</strong>, we are committed to delivering top-quality construction materials 
  designed to meet the highest standards of strength, durability, and finish.
  <br /><br />
  With our deep-rooted commitment to quality, innovation, and customer satisfaction,
  KRS Hollow Block uses advanced manufacturing techniques and constantly improves its production 
  to ensure long-lasting products that meet modern construction demands.
  <br /><br />
  Our materials are preferred by engineers, contractors, and homeowners across Tamil Nadu 
  for both residential and commercial projects.
</Typography>


        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ mt: 4, color: "#6278FE" ,fontFamily:"Quicksand, sans-serif"}}
          
        >
          Our Ethics
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
              "Embrace modern technologies to produce reliable and high-quality construction products.",
              "Conduct rigorous quality checks before every dispatch. ",
              "Ensure every product is tested by reputed third-party labs for strength and durability.",
              "Maintain transparency, honesty, and customer-focused service at all levels of business."
            ].map((item, index) => (
              <li key={index} style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                <SiMapillary style={{ color: "#6278FE", marginRight: "10px", verticalAlign: "middle" }} />
                {item}
              </li>
            ))}
          </ul>
      </Box>
    </motion.div>
  );
};

export default WhyChooseKRS;









