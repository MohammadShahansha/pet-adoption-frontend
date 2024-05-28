import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from "@/assets/logo/logo.webp";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";

const FootePage = () => {
  return (
    <Stack
      sx={{
        mt: "20px",
        backgroundColor: "black",
        py: "40px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <Image src={logo} alt="logo" width={40} height={40} />
          </Box>
          <Typography variant="h5" fontWeight={600}>
            <Box sx={{ color: "white" }}>
              P
              <Box component="span" color="primary.main">
                et
              </Box>{" "}
              Adap
              <Box component="span" color="primary.main">
                tion
              </Box>
            </Box>
          </Typography>
          <Typography
            sx={{
              color: "white",
            }}
          >
            Providing reliable service since 1990
          </Typography>
        </Box>

        <Box>
          <Typography
            component="h1"
            variant="h4"
            fontWeight={600}
            color="white"
          >
            Contact
          </Typography>
          <Typography color="white">#08593958848</Typography>
          <Typography color="white">#06763958777</Typography>
          <Typography color="white">email@gamil.com</Typography>
          <Typography color="white">example@gamil.com</Typography>
        </Box>
        <Box>
          <Typography
            component="h1"
            variant="h4"
            fontWeight={600}
            color="white"
          >
            Social
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography component={Link} href="twitter.com" color="white">
              <TwitterIcon />
            </Typography>
            <Typography component={Link} href="facebook.com" color="white">
              <FacebookIcon />
            </Typography>
            <Typography component={Link} href="whatsup.com" color="white">
              <WhatsAppIcon />
            </Typography>
          </Box>
        </Box>
      </Container>
      <Typography
        component="p"
        color="white"
        display="flex"
        justifyContent="center"
        mt="40px"
      >
        Copyright © 2024 - All right reserved by Pet Adoption shop
      </Typography>
    </Stack>
  );
};

export default FootePage;
