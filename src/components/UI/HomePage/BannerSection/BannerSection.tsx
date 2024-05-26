import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import bannerImg from "@/assets/images/digSky.jpg";
import CommonButton from "@/utils/Common/CommonButton";
import Link from "next/link";
import { Fullscreen } from "@mui/icons-material";
const BannerSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        gap: "10px",
        my: "20px",
        alignItems: "center",
        height: "710px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "700px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image
          src={bannerImg}
          alt="Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          bottom: "500px",
          padding: "20px",
          background: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <Box
          sx={{
            width: "50%",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            fontWeight={600}
            color="white"
            fontSize="40px"
          >
            Find your perfect companion and
          </Typography>
          <Typography
            variant="h4"
            component="h3"
            fontWeight={600}
            color="white"
            fontSize="40px"
          >
            give a loving home to a
          </Typography>
          <Typography
            variant="h4"
            component="h3"
            fontWeight={600}
            color="primary.main"
            fontSize="40px"
          >
            pet in need adopt today and
          </Typography>
          <Typography
            variant="h6"
            component="p"
            fontWeight={300}
            lineHeight="20px"
            color="white"
            my="20px"
          >
            make a friend for life! Change a life forever adopt a pet and
            discover the joy of unconditional love! Your new best friend is
            waiting for you adopt a pet and bring happiness home. Open your
            heart and home adopt a pet and experience the magic of a loyal
            companion.
          </Typography>
          <Typography component={Link} href="/about-us">
            <CommonButton buttonName="About Us"></CommonButton>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BannerSection;
