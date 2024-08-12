"use client";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import CommonButton from "@/utils/Common/CommonButton";
import bannerImg from "@/assets/images/serviceImg.webp";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const BannerSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        backgroundColor: "#e5e7eb",
        width: "100%",
        py: "90px",
        display: "flex",
      }}
    >
      <Container
        sx={{
          display: isSmallScreen ? "" : "flex",
          alignItems: "center",
          mt: isSmallScreen ? "20px" : "100px",
        }}
      >
        <Box>
          <Box>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: isSmallScreen ? 500 : 600,
                fontSize: isSmallScreen ? "35px" : "45px",
              }}
            >
              Find your perfect companion and
            </Typography>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontWeight: isSmallScreen ? 500 : 600,
                fontSize: isSmallScreen ? "35px" : "45px",
              }}
            >
              give a loving home to a
            </Typography>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontWeight: isSmallScreen ? 500 : 600,
                fontSize: isSmallScreen ? "35px" : "45px",
              }}
              color="primary.main"
            >
              pet in need adopt today and
            </Typography>
            <Typography
              variant="h6"
              component="p"
              fontWeight={300}
              lineHeight="20px"
              color="gray"
              my="20px"
              sx={{
                fontWeight: isSmallScreen ? 200 : 300,
                fontSize: isSmallScreen ? "18px" : "25",
              }}
            >
              make a friend for life! Change a life forever adopt a pet and
              discover the joy of unconditional love! Your new best friend is
              waiting for you adopt a pet and bring happiness home. Open your
              heart and home adopt a pet and experience the magic of a loyal
              companion.
            </Typography>
            <Typography component={Link} href="/about">
              <CommonButton buttonName="About Us"></CommonButton>
            </Typography>
          </Box>
        </Box>
        <Box width="100%">
          <Image src={bannerImg} alt="image" />
        </Box>
      </Container>
    </Box>
  );
};

export default BannerSection;
