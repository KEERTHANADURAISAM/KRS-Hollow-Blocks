import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
  { img: "/gallery1.jpg", title: "Gallery Image 1" },
  { img: "/gallery2.jpg", title: "Gallery Image 2" },
  { img: "/gallery3.jpg", title: "Gallery Image 3" },
  { img: "/gallery4.jpg", title: "Gallery Image 4" },
  { img: "/gallery5.jpg", title: "Gallery Image 5" },
  { img: "/gallery6.jpg", title: "Gallery Image 6" },
  { img: "/gallery7.jpg", title: "Gallery Image 7" },
  { img: "/gallery8.jpg", title: "Gallery Image 8" },
  { img: "/gallery9.jpg", title: "Gallery Image 9" },
  // { img: "/gallery10.jpg", title: "Gallery Image 9" },
];

export default function ImageGallery() {
  return (
    <Box sx={{ width: '100%', padding: 4 }}>
      <ImageList variant="masonry" cols={3} gap={12}>
        {itemData.map((item, index) => (
          <ImageListItem key={index}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{
                borderRadius: '8px',
                width: '100%',
                display: 'block',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
