"use client";
import React from "react";

import cat1 from "@/assets/slideImg/cat1.png";
import cat2 from "@/assets/slideImg/cat2.png";
import bird from "@/assets/slideImg/bird.png";
import dog from "@/assets/slideImg/dog.png";
import rabbit from "@/assets/slideImg/rabit.png";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Container } from "@mui/material";
import Image from "next/image";

const imageList = [bird, dog, cat2, rabbit, dog, cat2, bird, rabbit, dog];

const AutoSlider = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 7,

    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <Container>
      <div className="slider-container">
        <Slider {...settings}>
          {imageList.map((item, index) => (
            <Box key={index}>
              <Image src={item} alt="image" />
            </Box>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default AutoSlider;
