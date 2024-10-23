"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from "@/assets/logo/logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const FootePage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack
      sx={{
        backgroundColor: "black",
        py: "40px",
        alignContent: "center",
      }}
    >
      <Container
        sx={{
          display: { md: "flex" },
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <Image src={logo} alt="logo" width={60} height={60} />
          </Box>
          <Typography variant="h5" fontWeight={600} color="white">
            Petsmart
          </Typography>
          <Typography
            sx={{
              color: "white",
            }}
          >
            Providing reliable service since 1990
          </Typography>
        </Box>
        <Box
          sx={{
            my: isSmallScreen ? "10px" : 0,
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            color="white"
            sx={{
              fontWeight: isSmallScreen ? 500 : 500,
              fontSize: isSmallScreen ? "25px" : "30px",
            }}
          >
            Service
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              component={Link}
              href="/about"
              color="white"
              sx={{ ":hover": { color: "primary.main" } }}
            >
              About Us
            </Typography>
            <Typography
              component={Link}
              href="/blog"
              color="white"
              sx={{ ":hover": { color: "primary.main" } }}
            >
              Blog
            </Typography>
            <Typography
              component={Link}
              href="/"
              color="white"
              sx={{ ":hover": { color: "primary.main" } }}
            >
              Contuct Us
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            component="h1"
            variant="h4"
            // fontWeight={600}
            color="white"
            sx={{
              fontWeight: isSmallScreen ? 500 : 500,
              fontSize: isSmallScreen ? "25px" : "30px",
            }}
          >
            Contact
          </Typography>
          <Typography color="white">#08593958848</Typography>
          <Typography color="white">#06763958777</Typography>
          <Typography color="white">email@gamil.com</Typography>
          <Typography color="white">example@gamil.com</Typography>
        </Box>
        <Box
          sx={{
            my: isSmallScreen ? "10px" : 0,
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            color="white"
            sx={{
              fontWeight: isSmallScreen ? 500 : 500,
              fontSize: isSmallScreen ? "25px" : "30px",
            }}
          >
            Social
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: isSmallScreen ? "start" : "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              component={Link}
              href="twitter.com"
              color="white"
              sx={{ ":hover": { color: "primary.main" } }}
            >
              <TwitterIcon />
            </Typography>
            <Typography
              component={Link}
              href="facebook.com"
              color="white"
              sx={{ ":hover": { color: "primary.main" } }}
            >
              <FacebookIcon />
            </Typography>
            <Typography
              component={Link}
              href="whatsup.com"
              color="white"
              sx={{ ":hover": { color: "primary.main" } }}
            >
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
        textAlign="center"
      >
        Copyright © 2024 - All right reserved by Pet Adoption shop
      </Typography>
    </Stack>
  );
};

export default FootePage;
