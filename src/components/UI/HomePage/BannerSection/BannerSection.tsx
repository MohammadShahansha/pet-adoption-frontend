import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import CommonButton from "@/utils/Common/CommonButton";
import bannerImg from "@/assets/images/serviceImg.webp";
import Link from "next/link";
const BannerSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#e5e7eb",
        width: "100%",
        py: "90px",
        display: "flex",
      }}
    >
      <Container sx={{ display: "flex", alignItems: "center", mt: "100px" }}>
        <Box>
          <Box>
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
              my="20px"
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
