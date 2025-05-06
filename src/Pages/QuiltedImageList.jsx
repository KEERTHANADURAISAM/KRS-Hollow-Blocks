import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const itemData = [
  { img: "/gallery1.jpg", title: "Gallery Image 1", rows: 2, cols: 2 },
  { img: "/gallery2.jpg", title: "Gallery Image 2" },
  { img: "/gallery4.jpg", title: "Gallery Image 3" },
  { img: "/gallery3.jpg", title: "Gallery Image 4", cols: 2 },
  { img: "pillarKRs.jpg", title: "Gallery Image 5", cols: 2 },
  { img: "/gallery6.jpg", title: "Gallery Image 6", rows: 2, cols: 2 },
  { img: "/gallery7.jpg", title: "Gallery Image 7" },
  { img: "/gallery8.jpg", title: "Gallery Image 8" },
  { img: "/gallery9.jpg", title: "Gallery Image 9", rows: 2, cols: 2 },
  { img: "/gallery10.jpg", title: "Gallery Image 10" },
  { img: "/gallery11.jpg", title: "Gallery Image 11" },
  { img: "/pillarKRs2.jpg", title: "Gallery Image 10" },
  { img: "/gallery5.jpg", title: "Gallery Image 11" },
  { img: '/IMG-20250322-WA0030.jpg', title: 'Gallery Image 12' },
  { img: 'IMG-20250322-WA0014.jpg', title: 'Gallery Image 12' },
  { img: 'IMG-20250322-WA0015.jpg', title: 'Gallery Image 12',rows: 2, cols: 2 },
  { img: 'IMG-20250322-WA0005.jpg', title: 'Gallery Image 12',rows: 2, cols: 2 },
  { img: "/pillarKRs2.jpg", title: "Gallery Image 10" },
  { img: "/gallery5.jpg", title: "Gallery Image 11" },
];

export default function QuiltedImageList() {
  return (
    <>
      {/* Background Section */}
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url('/BGGallery.jpg')`, // 🔥 Replace this with your background image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //   mb: 5,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "white",
            fontWeight: "bold",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
            mt: 26,

            borderBottom: "1px dashed white",
            fontFamily: `'Playfair Display', serif`,
            px: 2,
          }}
        >
          Through Our Lens
        </Typography>
      </Box>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "1.6rem", sm: "2.2rem", md: "3rem" },
          color: "#6278FE",
          fontWeight: "bold",
          textAlign: { xs: "center", md: "center" },
          fontFamily: "'Poppins', sans-serif",
          mt: 4,
        }}
      >
        Highlights from Our Production Floor
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" mt={1} textAlign='start' p={4}>
      Step inside KRS Hollow Block’s manufacturing unit, where quality meets
      precision every day. From raw material preparation to final block shaping,
      every stage of production is carefully handled by our skilled team. With a
      well-organized 500 sq. ft. facility and a daily capacity of producing
      1,200+ hollow blocks, we ensure that each product — whether it's a hollow
      block, paver block, molded ring, or pillar — reflects strength,
      durability, and craftsmanship. Our gallery showcases the heart of our
      operations — the machines, materials, and people that bring our
      construction solutions to life. These behind-the-scenes glimpses highlight
      our commitment to excellence and the care we put into every product we
      create. Take a closer look at how your building blocks are made — with
      passion, precision, and purpose.
      </Typography>
      {/* Gallery Section */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#f5f5f5",
          p: 5,
          mt: 4,
        }}
      >
        <ImageList
          variant="quilted"
          cols={4}
          rowHeight={121}
          sx={{
            width: 1000,
            bgcolor: "white",
            p: 2,
            borderRadius: 3,
            boxShadow: 5,
          }}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
              sx={{
                overflow: "hidden",
                borderRadius: 2,
              }}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
}
