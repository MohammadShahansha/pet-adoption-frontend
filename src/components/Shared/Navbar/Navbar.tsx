"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo/logo.webp";
import AuthButton from "@/components/UI/AuthButton/AuthButton";

const NavbarPage = () => {
  const navBarRoute = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/blog",
      label: "Blog",
    },
  ];
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: "Background.paper",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container>
        <Stack
          py={1}
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
            {navBarRoute.map((item) => (
              <Typography
                key={item.href}
                component={Link}
                href={item.href}
                sx={{
                  fontWeight: "500",
                  fontSize: "18px",

                  ":hover": {
                    color: "primary.main",
                  },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Stack>
          <AuthButton />
        </Stack>
      </Container>
    </Box>
  );
};

export default NavbarPage;
