import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import bannerImg from "@/assets/images/banner.jpg";
import CommonButton from "@/utils/Common/CommonButton";
import Link from "next/link";
const BannerSection = () => {
  return (
    <Container
      sx={{
        direction: "row",
        display: "flex",
        flex: 1,
        gap: "10px",
        my: "20px",
        alignItems: "center",
      }}
    >
      <Box width="50%">
        <Typography variant="h4" component="h1" fontWeight={600}>
          Find your perfect companion and
        </Typography>
        <Typography variant="h4" component="h3" fontWeight={600}>
          give a loving home to a
        </Typography>
        <Typography
          variant="h4"
          component="h3"
          fontWeight={600}
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
          mb="10px"
        >
          make a friend for life! Change a life forever adopt a pet and discover
          the joy of unconditional love! Your new best friend is waiting for you
          adopt a pet and bring happiness home. Open your heart and home adopt a
          pet and experience the magic of a loyal companion.
        </Typography>
        <Typography component={Link} href="/about-us">
          <CommonButton buttonName="About Us"></CommonButton>
        </Typography>
      </Box>
      <Box width="50%">
        <Image src={bannerImg} alt="Image" />
      </Box>
    </Container>
  );
};

export default BannerSection;
