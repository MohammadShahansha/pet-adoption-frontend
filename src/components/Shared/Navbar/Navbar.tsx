"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo/logo.webp";
import AuthButton from "@/components/UI/AuthButton/AuthButton";

const NavbarPage = () => {
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack direction="row" alignItems="center" component={Link} href="/">
          <Typography variant="h5" fontWeight={600}>
            <Box>
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
          <Box
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
            }}
          >
            <Image src={logo} alt="logo" />
          </Box>
        </Stack>

        <Stack direction="row" justifyContent="space-between" gap={4}>
          <Typography component={Link} href="/">
            Home
          </Typography>
          <Typography component={Link} href="/about-us">
            About Us
          </Typography>
        </Stack>
        <AuthButton />
      </Stack>
    </Container>
  );
};

export default NavbarPage;
