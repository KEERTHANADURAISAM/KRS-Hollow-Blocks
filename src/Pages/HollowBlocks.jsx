import React from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Card,
  CardContent,
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { SiMapillary } from 'react-icons/si';
import { IoTimerSharp } from "react-icons/io5";
import { GiFallingLeaf, GiInjustice, GiSpeaker } from "react-icons/gi";
import { FaThermometerThreeQuarters } from "react-icons/fa";
import { IoMdJet } from "react-icons/io";
import { Link } from "react-router-dom";

// Your data
const hollowBlocks = [
  { name: "Standard Hollow Block", size: "400mm x 200mm x 200mm", strength: "7.5, 10, 15 N/mm²", weight: "14 kg" },
  { name: "Lightweight Hollow Block", size: "400mm x 200mm x 200mm", strength: "5, 7.5, 10 N/mm²", weight: "10 kg" },
  { name: "Insulated Hollow Block", size: "400mm x 200mm x 200mm", strength: "7.5, 10 N/mm²", weight: "12 kg" },
];

const relatedProducts = [
  { name: "Eco-Friendly Hollow Block", size: "400mm x 150mm x 200mm", weight: "12 kg" },
  { name: "High-Density Hollow Block", size: "400mm x 250mm x 200mm", weight: "18 kg" },
  { name: "Aerated Concrete Block", size: "600mm x 200mm x 250mm", weight: "8 kg" },
];


const advantages = [
  {
    icon:<IoTimerSharp  color='#6278FE' size="40px"/>, // (for now emoji; you can replace it with images or SVG icons)
    title: "Time-Saving",
    description: "Hollow blocks are faster to install, saving construction time and labor costs."
  },
  {
    icon: <FaThermometerThreeQuarters color='#6278FE' size="40px"/>,
    title: "Thermal Insulation",
    description: "Air trapped in hollow blocks provides insulation, keeping interiors cool in summer and warm in winter."
  },
  {
    icon:<GiSpeaker color='#6278FE' size="40px"/>,
    title: "Sound Insulation",
    description: "The air-filled voids in blocks help reduce noise transmission between rooms."
  },
  {
    icon: <GiFallingLeaf color='#6278FE' size="40px"/>,
    title: "Green Building Material",
    description: "Less clay usage makes hollow blocks an eco-friendly alternative to conventional bricks."
  },
  {
    icon: <GiInjustice color='#6278FE' size="40px"/>,
    title: "Less Dead Load",
    description: "Hollow blocks are lighter, reducing the dead load and structure cost."
  },
  {
    icon: <IoMdJet color='#6278FE' size="40px"/>,
    title: "Fast & Easy Installation",
    description: "Large-sized hollow blocks make handling and installation very quick and simple."
  }
];

// Image carousel data
const images = [
'/blockh1.png',
'/blockh2.png',
'/blockh3.jpg',
'/blockh4.png',
'/blockh5.png',
];

const HollowBlocks = () => {
  return (  
<>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "30vh", md: "100vh" },
          backgroundImage: `url('/product2.jpg')`,
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
      Hollow Blocks
        </Typography>
      </Box>

  
    <Box sx={{ bgcolor: "#f9f9f9", py: 4 }}>
      <Container>
      <Button
  component={Link}
  to="/products"
  sx={{
    mt: 2,
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

        {/* Heading + Intro */}
   <Typography
               variant="h2"
               sx={{
                 fontWeight: 'bold',
                 color: '#6278FE',
                 mt: 6,
                 fontSize: {
                  xs: "2rem",  // smaller size on mobile
                  sm: "2.5rem",
                  md: "3rem",
                  lg: "3.5rem", // full size on large screens
                },
               }}
             >
              Benefits of Hollow Concrete Blocks in Construction
             </Typography>
        <Typography variant="body1" sx={{mt:4}} paragraph>
        KRS Hollow Block is one of the leading construction product manufacturers, offering a wide range of high-quality concrete products. We are among the largest producers of concrete blocks, and our manufacturing facilities produce various types of concrete blocks with different compressive strengths, sizes, and finishes, ensuring excellent durability and strength for all kinds of construction projects.

                 </Typography>
         <Typography
                variant="h5"
                sx={{fontWeight: 'bold', color: '#6278FE', fontFamily: 'Quicksand, sans-serif',p:0,py:0 }}
              >
                Why Choose Concrete Blocks ?
              </Typography>
        <Typography variant="body1" sx={{mt:4}}paragraph>
          
          Concrete blocks offer multiple advantages when used in structures. As well as being fire-resistant, concrete block structures can be put up quickly and partition walls strengthened further by filling the block voids with steel reinforcing rods and poured concrete. A structure made from concrete blocks will also incur minimal ongoing maintenance costs. The material will not attract mould or mildew, meaning there is a lower risk of structural damage over time.
        </Typography>

        <Box sx={{backgroundColor:'#F8F9FA'}}>
      <Container>
        <Typography
                  variant="h5"
                  // gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    color: '#6278FE',
                    mt: 6,
                    mb: 2,
                    // textAlign: 'center',
                    fontFamily: 'Quicksand, sans-serif',
                  }}
                >
          What is the composition used in hollow blocks?
        </Typography>

        <Typography variant="body1" paragraph>
          The hollow building blocks are commonly made from different materials. Some of them are:
        </Typography>

        <List>
          <ListItem>
            <ListItemText
            sx={{
              // fontWeight: 'bold',
              color: '#6278FE',
            }}
              primary="Water"
              secondary="Water is required for the hydration process, allowing the mixture to harden and bind the other components together."
            />
          </ListItem>

          <ListItem>
            <ListItemText
             sx={{
              // fontWeight: 'bold',
              color: '#6278FE',
            }}
              primary="Additives"
              secondary="Various additives are also included in the mixture to enhance specific properties of the hollow blocks. These additives include fly ash, silica fume, plasticizers, and accelerators."
            />
          </ListItem>
        </List>
      </Container>
    </Box>
        {/* Swiper Carousel */}
        <Swiper
  modules={[Autoplay]} // 👈 Required for autoplay to work
  spaceBetween={20}
  slidesPerView={1}
  loop
  autoplay={{ delay: 3000 }}
  style={{ marginTop: '2rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}
>
  {images.map((img, index) => (
    <SwiperSlide key={index}>
      <Box
        component="img"
        src={img}
        alt={`Concrete Block ${index + 1}`}
        sx={{ width: '100%', borderRadius: 2 }}
      />
    </SwiperSlide>
  ))}
</Swiper>


        {/* Product Table */}
          <Typography
                variant="h5"
                sx={{mt:4, fontWeight: 'bold', color: '#6278FE', fontFamily: 'Quicksand, sans-serif',textAlign:"center" }}
              >
          Our Hollow Block Collection
        </Typography>
        <Typography variant="body1" gutterBottom sx={{mt:4,textAlign:"center"}}>
          Explore our range of durable and high-quality hollow blocks designed for various construction needs.
        </Typography>
        <TableContainer component={Paper} sx={{mt:4}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>Product</b></TableCell>
                <TableCell><b>Size (L x W x H)</b></TableCell>
                <TableCell><b>Compressive Strength</b></TableCell>
                <TableCell><b>Weight</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hollowBlocks.map((block, index) => (
                <TableRow key={index}>
                  <TableCell>{block.name}</TableCell>
                  <TableCell>{block.size}</TableCell>
                  <TableCell>{block.strength}</TableCell>
                  <TableCell>{block.weight}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

{/* advantages */}

<Box sx={{ p: 4, backgroundColor: '#F8F9FA' }}>
  <Typography
    variant="h5"
    sx={{
      mt: 4,
      fontWeight: 'bold',
      color: '#6278FE',
      textAlign: 'center',
      fontFamily: 'Quicksand, sans-serif',
    }}
  >
    Advantages of Using Hollow Blocks
  </Typography>

  {/* Main container */}
  <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 4,
      justifyContent: 'center',
      mt: 4,
    }}
  >
    {advantages.map((advantage, index) => (
      <Card
        key={index}
        sx={{
          flex: {
            xs: '1 1 100%',    // full width on mobile
            sm: '1 1 45%',     // two cards per row on small and above
          },
          textAlign: 'center',
          p: 2,
          height: '100%',
          minHeight: 250,
        }}
      >
        <Box fontSize={50}>{advantage.icon}</Box>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {advantage.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {advantage.description}
          </Typography>
        </CardContent>
      </Card>
    ))}
  </Box>
</Box>


        {/* installation  */}
 <Box sx={{ textAlign: 'center', mt: 6 }}>
      <Typography
        variant="h5"
        sx={{ fontWeight: 'bold', color: '#6278FE', fontFamily: 'Quicksand, sans-serif' }}
      >
        Installation Guidelines
      </Typography>
      <Box
        sx={{
          textAlign: 'justify',
          color: 'black',
          mt: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ul
            style={{
              paddingLeft: '20px',
              listStyleType: 'none',
              marginTop: '20px',
              fontFamily: 'Quicksand, sans-serif',
              textAlign: 'left',
              maxWidth: '800px',
              margin: '20px auto',
            }}
          >
            {[
             "Clear the site by removing debris and prepare a well-leveled, compacted base.",
             "Use a premium-grade mortar mix specifically designed for hollow blocks.",
             "Spread the mortar evenly across the base surface.",
             "Place the hollow blocks carefully, ensuring accurate horizontal and vertical alignment.",
             "Fill the hollow cores with mortar to enhance overall strength and stability." ,
              "Use spacers to maintain uniform gaps and ensure proper adhesion.",
              "Regularly inspect for level and alignment throughout the installation process.",
              "Allow the mortar to cure properly and shield it from excessive moisture.",
              "Consult professional assistance when needed for expert guidance and support."
            ]
            
             .map((item, index) => (
              <li key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <SiMapillary style={{ color: '#6278FE', marginRight: '10px', verticalAlign: 'middle' }} />
                {item}
              </li>
            ))}
          </ul>
      
      </Box>
    </Box>
        {/* Related Products */}
        <Typography
  variant="h5"
  sx={{ mt: 4, fontWeight: 'bold', color: '#6278FE', fontFamily: 'Quicksand, sans-serif', textAlign: 'center' }}
>
  Related Products
</Typography>

<Box
  sx={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 3,
    mt: 4,
    px: 2,
  }}
>
  {relatedProducts.flat().map((item, index) => (
    <Box
      key={index}
      sx={{
        flex: "1 1 300px", // minimum 300px width, grows as needed
        maxWidth: "calc(33.33% - 24px)", // 3 per row with spacing
        minWidth: "280px", // for small screens
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          width: "100%",
          height: 180,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <CardContent>
          <Typography variant="h6">{item.name}</Typography>
          <Typography variant="body2">Size: {item.size}</Typography>
          <Typography variant="body2">Weight: {item.weight}</Typography>
        </CardContent>
      </Card>
    </Box>
  ))}
</Box>
      </Container>
    </Box>
    </>
  );
};

export default HollowBlocks;
