import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { Box, Typography, Avatar, Paper, Container } from '@mui/material';

const testimonials = [
  {
    text: "The hollow blocks we received were top-notch—strong, durable, and perfect for our project.",
    name: "Ravi Kumar",
    profession: "Civil Contractor",
    image: "https://via.placeholder.com/150"
  },
  {
    text: "We used their paver blocks for our walkway and the finish is excellent. It added a premium look to the space.",
    name: "Meena R",
    profession: "Architect",
    image: "https://via.placeholder.com/150"
  },
  {
    text: "The molded rings were precisely made and very easy to install. Great quality!",
    name: "Sathish B",
    profession: "Site Engineer",
    image: "https://via.placeholder.com/150"
  },
  {
    text: "The molded pillars were just what we needed for our landscape design. Strong and beautifully shaped.",
    name: "Aravind J",
    profession: "Interior & Exterior Designer",
    image: "https://via.placeholder.com/150"
  },
];

const Testimonial = () => {
  return (
    <Box
      sx={{
        py: 6,
        backgroundImage: 'url("/testimonialbg.jpg")', // Replace with your background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container>
      <Typography variant="h4" fontWeight="bold" color="#6278FE" textAlign='center'>
      People Who Trust Us
                </Typography>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  maxWidth: 700,
                  mx: 'auto',
                  background: 'rgba(255, 255, 255, 0.9)', // Optional, to add overlay for readability
                  borderRadius: 2,
                  mt:4
                }}
              >
                <Avatar
                  alt={testimonial.name}
                  src={testimonial.image}
                  sx={{ width: 80, height: 80, mb: 2 }}
                />
                <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>
                  "{testimonial.text}"
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold">
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.profession}
                </Typography>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Testimonial;
