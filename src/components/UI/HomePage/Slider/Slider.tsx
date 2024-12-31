"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import cat1 from "@/assets/slideImg/cat1.png";
import cat2 from "@/assets/slideImg/cat2.png";
import bird from "@/assets/slideImg/bird.png";
import dog from "@/assets/slideImg/dog.png";
import rabbit from "@/assets/slideImg/rabit.png";

import bannerImg from "@/assets/images/about.png";
// import "./styles.css";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    id: 1,
    bgColor: "#F54748",
    image: cat1,
    title: "Cat",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    bgColor: "#7952B3",
    image: bird,
    title: "Bird",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    bgColor: "#1597BB",
    image: dog,
    title: "Awesome Dog",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    bgColor: "#185ADB",
    image: rabbit,
    title: "Awesome Rabbit",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 5,
    bgColor: "#FF616D",
    image: cat2,
    title: "Awesome Cat",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const SliderPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  // const [activeSlide, setactiveSlide] = useState(2);

  // const next = () =>
  //   activeSlide < data.length - 1 && setactiveSlide(activeSlide + 1);

  // const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);

  // const getStyles = (index: number) => {
  //   if (activeSlide === index)
  //     return {
  //       opacity: 1,
  //       transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
  //       zIndex: 10,
  //     };
  //   else if (activeSlide - 1 === index)
  //     return {
  //       opacity: 1,
  //       transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
  //       zIndex: 9,
  //     };
  //   else if (activeSlide + 1 === index)
  //     return {
  //       opacity: 1,
  //       transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
  //       zIndex: 9,
  //     };
  //   else if (activeSlide - 2 === index)
  //     return {
  //       opacity: 1,
  //       transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
  //       zIndex: 8,
  //     };
  //   else if (activeSlide + 2 === index)
  //     return {
  //       opacity: 1,
  //       transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
  //       zIndex: 8,
  //     };
  //   else if (index < activeSlide - 2)
  //     return {
  //       opacity: 0,
  //       transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
  //       zIndex: 7,
  //     };
  //   else if (index > activeSlide + 2)
  //     return {
  //       opacity: 0,
  //       transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
  //       zIndex: 7,
  //     };
  // };

  // const [isFirstRender, setIsFirstRender] = React.useState(true);

  // React.useEffect(() => {
  //   if (isFirstRender) {
  //     setIsFirstRender(false);
  //   }
  // }, [isFirstRender]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        // pt: "60px",
        mt: { md: "50px" },
        // mx: { xs: "5px", md: "200px" },
      }}
    >
      {/* Left side content */}
      <Box
        sx={{
          width: isSmallScreen ? "100%" : "70%",
          p: 2,
          textAlign: "center",
          ml: { md: "50px", xs: "0px" },
          mt: { md: "55px", xs: "50px" },
        }}
      >
        <Typography variant="h4" fontWeight={500} gutterBottom>
          Welcome to PatsSmart!
        </Typography>
        <Box
          pb={2}
          sx={{
            width: { xs: "100%", md: "70%" },
            textAlign: "center",
            mx: "auto",
          }}
        >
          <Typography>
            Here you can find a variety of pets, each with unique personalities.
            Discover your perfect companion today!
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image src={bannerImg} alt="pet image" width={300} height={200} />
        </Box>
      </Box>

      {/* right side content */}
      <Box
        // sx={{
        //   width: "100%",
        //   mr: { md: "50px", xs: "0px" },
        //   display: { xs: "none", md: "block" },
        // }}
        sx={{
          width: isSmallScreen ? "100%" : "50%",
          mr: { md: "50px", xs: "0px" },
        }}
      >
        {/* carousel */}
        {/* <div className="slideC ">
          {data?.map((item: any, i: number) => (
            <React.Fragment key={item.id}>
              <div
                className="slide "
                style={{
                  background: item.bgColor,
                  boxShadow: `0 5px 20px ${item.bgColor}30`,
                  ...getStyles(i),
                }}
              >
                <SliderContent {...item} />
              </div>
              <div
                className="reflection"
                style={{
                  background: `linear-gradient(to bottom, ${item.bgColor}40, transparent)`,
                  ...getStyles(i),
                }}
              />
            </React.Fragment>
          ))}
        </div> */}
        {/* carousel */}

        {/* <Box
          sx={{
            mb: { xs: "-10px", md: "-60px" },
            mt: { xs: "-50px", md: "-70px" },
          }}
        >
          {!isFirstRender && (
            <div className="btns text-center">
              <FontAwesomeIcon
                className="btn"
                onClick={prev}
                icon={faChevronLeft}
                size="2x"
              />
              <FontAwesomeIcon
                className="btn"
                onClick={next}
                icon={faChevronRight}
                size="2x"
              />
            </div>
          )}
        </Box> */}

        <div className="slider-container">
          <Slider {...settings}>
            <Box
              sx={{
                width: "300px",
                height: "300px",
              }}
            >
              <Image
                src={cat2}
                alt="cats"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Box
              sx={{
                width: "300px",
                height: "300px",
              }}
            >
              <Image
                src={dog}
                alt="cats"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Box
              sx={{
                width: "300px",
                height: "300px",
              }}
            >
              <Image
                src={bird}
                alt="cats"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            {/* <div>
              <Image src={dog} alt="cats" width={300} height={300} />
            </div> */}
          </Slider>
        </div>
      </Box>
    </Box>
  );
};

// const SliderContent = (props: any) => {
//   return (
//     <div className="sliderContent">
//       <Image src={props.image} alt="pussy image"></Image>
//       <h2>{props.title}</h2>
//     </div>
//   );
// };

export default SliderPage;

// const SliderPage = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default SliderPage;
