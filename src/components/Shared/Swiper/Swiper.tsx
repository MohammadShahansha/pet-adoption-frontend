"use client";
import Flicking from "@egjs/react-flicking";
import { Box } from "@mui/material";
import Image from "next/image";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import { AutoPlay } from "@egjs/flicking-plugins";

const images = [
  "https://cdn.pixabay.com/photo/2023/01/15/08/55/dog-7719758_640.jpg",
  "https://cdn.pixabay.com/photo/2021/07/24/07/23/chow-chow-6488846_640.jpg",
  "https://cdn.pixabay.com/photo/2024/04/28/07/00/bird-8724916_640.jpg",
  "https://cdn.pixabay.com/photo/2021/07/24/07/23/chow-chow-6488846_640.jpg",
  "https://cdn.pixabay.com/photo/2024/04/28/07/00/bird-8724916_640.jpg",
];

const Swiper = () => {
  const plugins = [
    new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <Flicking circular={true} gap={10} duration={500} plugins={plugins}>
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              gap: "20px",
              width: "60%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={image} alt="petPhoto" width={500} height={500}></Image>
          </Box>
        ))}
      </Flicking>
    </Box>
  );
};

export default Swiper;
