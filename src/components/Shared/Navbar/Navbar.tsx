"use client";
import * as React from "react";
import {
  Avatar,
  Box,
  Container,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo/logo.png";
import AuthButton from "@/components/UI/AuthButton/AuthButton";
import { getUserInfo } from "@/serviece/authService";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavbarPage() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const userInfo = getUserInfo();

  console.log(userInfo);
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
  const [isFirstRender, setIsFirstRender] = React.useState(true);

  React.useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
    }
  }, [isFirstRender]);
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "Background.paper",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {!isFirstRender && (
        <AppBar
          sx={{
            backgroundColor: "#f3f8f4",
          }}
        >
          <Container>
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component={Link}
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  component={Link}
                  href="/"
                >
                  <Typography variant="h5" fontWeight={600} color="black">
                    Petsmart
                  </Typography>
                  <Box
                  // width={40}
                  // height={40}
                  // sx={{
                  //   borderRadius: "50%",
                  // }}
                  >
                    <Image src={logo} alt="logo" width={50} height={50} />
                  </Box>
                </Stack>
              </Typography>
              <Stack
                py={1}
                direction="row"
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100%"
              >
                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon
                      sx={{
                        color: "black",
                      }}
                    />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    <Stack
                      direction="column"
                      // justifyContent="space-between"
                      gap={2}
                      px={5}
                    >
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
                      {userInfo && (
                        <Typography
                          component={Link}
                          href={`/dashboard/${userInfo?.role}`}
                          sx={{
                            fontWeight: "500",
                            fontSize: "18px",

                            ":hover": {
                              color: "primary.main",
                            },
                          }}
                        >
                          Dashboard
                        </Typography>
                      )}
                    </Stack>
                    <Box px={5} mt={3}>
                      <AuthButton />
                    </Box>
                  </Menu>
                </Box>
                <Typography
                  variant="h5"
                  noWrap
                  component={Link}
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    component={Link}
                    href="/"
                  >
                    <Typography variant="h5" fontWeight={600} color="black">
                      Petsmart
                    </Typography>
                    <Box
                      width={40}
                      height={40}
                      sx={{
                        borderRadius: "50%",
                      }}
                    >
                      <Image src={logo} alt="logo" width={40} height={40} />
                    </Box>
                  </Stack>
                </Typography>
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
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
                    {userInfo && (
                      <Typography
                        component={Link}
                        href={`/dashboard/${userInfo?.role}`}
                        sx={{
                          fontWeight: "500",
                          fontSize: "18px",

                          ":hover": {
                            color: "primary.main",
                          },
                        }}
                      >
                        Dashboard
                      </Typography>
                    )}
                  </Stack>
                  <Box>
                    <AuthButton />
                  </Box>
                </Box>
              </Stack>
              {/* {userInfo && (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            )} */}
            </Toolbar>
          </Container>
        </AppBar>
      )}
    </Box>
  );
}
export default NavbarPage;
