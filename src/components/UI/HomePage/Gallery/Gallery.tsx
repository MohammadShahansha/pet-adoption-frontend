"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Gallery() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundColor: "#e5e7eb",
        width: "100%",
        py: { xs: "30px", md: "50px" },
      }}
    >
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: "20px",
          fontWeight: { xs: 500, md: 600 },
          fontSize: { xs: "35px", md: "45px" },
          color: "black",
        }}
      >
        Pets Gallery
      </Typography>
      <Box
        sx={{
          width: { xs: "100%", md: "45%" },
          height: 450,
          overflowY: "scroll",
          mx: "auto",
        }}
      >
        {isSmallScreen ? (
          <ImageList
            variant="masonry"
            cols={2}
            gap={8}
            sx={{ pl: { xs: "20px", md: 0 } }}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <Image
                  width={150}
                  height={150}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        ) : (
          <ImageList variant="masonry" cols={4} gap={8} sx={{}}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <Image
                  width={150}
                  height={150}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        )}
      </Box>
    </Box>
  );
}

const itemData = [
  {
    img: "https://static.toiimg.com/photo/107091662/107091662.jpg",
    title: "cat1",
  },
  {
    img: "https://thumbs.dreamstime.com/b/funny-portrait-cute-pets-funny-portrait-cute-pets-isolated-white-background-129363423.jpg",
    title: "dog2",
  },
  {
    img: "https://www.cdc.gov/healthy-pets/media/images/2024/04/Parakeets-in-cage.jpg",
    title: "bird1",
  },
  {
    img: "https://www.thesprucepets.com/thmb/38EI-zLR_Rac46T-Xy6G0ulBmNs=/3000x0/filters:no_upscale():strip_icc()/cute-teacup-dog-breeds-4587847-hero-4e1112e93c68438eb0e22f505f739b74.jpg",
    title: "dog1",
  },
  {
    img: "https://www.petsworld.in/blog/wp-content/uploads/2015/04/Rabbits.jpg",
    title: "rabbits1",
  },
  {
    img: "https://w0.peakpx.com/wallpaper/12/856/HD-wallpaper-cute-baby-animals-labrador-retriever-dog-running-animal-cute-running-puppy.jpg",
    title: "dog2",
  },
  {
    img: "https://as1.ftcdn.net/v2/jpg/05/99/90/78/1000_F_599907839_2S3oFDMrflEAw4rRL5uIqZ2fC8zgtOBi.jpg",
    title: "dog3",
  },
  {
    img: "https://i.pinimg.com/736x/1b/06/63/1b06634e54179a68a419ac5e7dd9f409.jpg",
    title: "cat2",
  },
  {
    img: "https://media-be.chewy.com/wp-content/uploads/2017/09/finch.jpg",
    title: "bird4",
  },
  {
    img: "https://w0.peakpx.com/wallpaper/398/185/HD-wallpaper-birds-love-animal-couple-cute-nice-parrots-pet-thumbnail.jpg",
    title: "bird2",
  },
  {
    img: "https://i.pinimg.com/236x/35/84/d0/3584d0a2dd71ae84131581310346da25.jpg",
    title: "bird3",
  },

  {
    img: "https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg",
    title: "cat3",
  },
  {
    img: "https://as1.ftcdn.net/v2/jpg/05/99/90/78/1000_F_599907839_2S3oFDMrflEAw4rRL5uIqZ2fC8zgtOBi.jpg",
    title: "dog3",
  },
  {
    img: "https://i.pinimg.com/736x/1b/06/63/1b06634e54179a68a419ac5e7dd9f409.jpg",
    title: "cat2",
  },
  {
    img: "https://media-be.chewy.com/wp-content/uploads/2017/09/finch.jpg",
    title: "bird4",
  },
  {
    img: "https://w0.peakpx.com/wallpaper/398/185/HD-wallpaper-birds-love-animal-couple-cute-nice-parrots-pet-thumbnail.jpg",
    title: "bird2",
  },
  {
    img: "https://i.pinimg.com/236x/35/84/d0/3584d0a2dd71ae84131581310346da25.jpg",
    title: "bird3",
  },

  {
    img: "https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg",
    title: "cat3",
  },
  {
    img: "https://static.toiimg.com/photo/107091662/107091662.jpg",
    title: "cat1",
  },
  {
    img: "https://thumbs.dreamstime.com/b/funny-portrait-cute-pets-funny-portrait-cute-pets-isolated-white-background-129363423.jpg",
    title: "dog2",
  },
  {
    img: "https://www.cdc.gov/healthy-pets/media/images/2024/04/Parakeets-in-cage.jpg",
    title: "bird1",
  },
  {
    img: "https://www.thesprucepets.com/thmb/38EI-zLR_Rac46T-Xy6G0ulBmNs=/3000x0/filters:no_upscale():strip_icc()/cute-teacup-dog-breeds-4587847-hero-4e1112e93c68438eb0e22f505f739b74.jpg",
    title: "dog1",
  },
  {
    img: "https://www.petsworld.in/blog/wp-content/uploads/2015/04/Rabbits.jpg",
    title: "rabbits1",
  },
];
