// "use client";
// import { Box, Container, Stack, Typography } from "@mui/material";
// import Image from "next/image";
// import logo from "@/assets/logo/logo.png";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import Link from "next/link";
// import { useTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";

// const FootePage = () => {
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
//   return (
//     <Stack
//       sx={{
//         backgroundColor: "black",
//         py: "40px",
//         alignContent: "center",
//       }}
//     >
//       <Container
//         sx={{
//           display: { md: "flex" },
//           justifyContent: "space-between",
//         }}
//       >
//         <Box>
//           <Box
//             sx={{
//               width: 60,
//               height: 60,
//               borderRadius: "50%",
//               overflow: "hidden",
//             }}
//           >
//             <Image src={logo} alt="logo" width={60} height={60} />
//           </Box>
//           <Typography variant="h5" fontWeight={600} color="white">
//             Petsmart
//           </Typography>
//           <Typography
//             sx={{
//               color: "white",
//             }}
//           >
//             Providing reliable service since 1990
//           </Typography>
//         </Box>
//         <Box
//           sx={{
//             my: isSmallScreen ? "10px" : 0,
//           }}
//         >
//           <Typography
//             component="h1"
//             variant="h4"
//             color="white"
//             sx={{
//               fontWeight: isSmallScreen ? 500 : 500,
//               fontSize: isSmallScreen ? "25px" : "30px",
//             }}
//           >
//             Service
//           </Typography>
//           <Box sx={{ display: "flex", flexDirection: "column" }}>
//             <Typography
//               component={Link}
//               href="/about"
//               color="white"
//               sx={{ ":hover": { color: "primary.main" } }}
//             >
//               About Us
//             </Typography>
//             <Typography
//               component={Link}
//               href="/blog"
//               color="white"
//               sx={{ ":hover": { color: "primary.main" } }}
//             >
//               Blog
//             </Typography>
//             <Typography
//               component={Link}
//               href="/"
//               color="white"
//               sx={{ ":hover": { color: "primary.main" } }}
//             >
//               Contuct Us
//             </Typography>
//           </Box>
//         </Box>
//         <Box>
//           <Typography
//             component="h1"
//             variant="h4"
//             // fontWeight={600}
//             color="white"
//             sx={{
//               fontWeight: isSmallScreen ? 500 : 500,
//               fontSize: isSmallScreen ? "25px" : "30px",
//             }}
//           >
//             Contact
//           </Typography>
//           <Typography color="white">#08593958848</Typography>
//           <Typography color="white">#06763958777</Typography>
//           <Typography color="white">email@gamil.com</Typography>
//           <Typography color="white">example@gamil.com</Typography>
//         </Box>
//         <Box
//           sx={{
//             my: isSmallScreen ? "10px" : 0,
//           }}
//         >
//           <Typography
//             component="h1"
//             variant="h4"
//             color="white"
//             sx={{
//               fontWeight: isSmallScreen ? 500 : 500,
//               fontSize: isSmallScreen ? "25px" : "30px",
//             }}
//           >
//             Social
//           </Typography>
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: isSmallScreen ? "start" : "space-between",
//               alignItems: "center",
//             }}
//           >
//             <Typography
//               component={Link}
//               href="twitter.com"
//               color="white"
//               sx={{ ":hover": { color: "primary.main" } }}
//             >
//               <TwitterIcon />
//             </Typography>
//             <Typography
//               component={Link}
//               href="facebook.com"
//               color="white"
//               sx={{ ":hover": { color: "primary.main" } }}
//             >
//               <FacebookIcon />
//             </Typography>
//             <Typography
//               component={Link}
//               href="whatsup.com"
//               color="white"
//               sx={{ ":hover": { color: "primary.main" } }}
//             >
//               <WhatsAppIcon />
//             </Typography>
//           </Box>
//         </Box>
//       </Container>
//       <Typography
//         component="p"
//         color="white"
//         display="flex"
//         justifyContent="center"
//         mt="40px"
//         textAlign="center"
//       >
//         Copyright © 2024 - All right reserved by Pet Adoption shop
//       </Typography>
//     </Stack>
//   );
// };

import React from "react";
import Image from "next/image";
import logo from "@/assets/logo/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { IoLogoTwitter } from "react-icons/io";
import { Box, Typography, Grid, IconButton, Button } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box>
      {/* Background Section */}
      <Box sx={{ bgcolor: "white", borderRadius: 2, m: 2, mb: "20px" }}>
        <Grid
          container
          spacing={4}
          sx={{
            mt: { xs: 5, md: 10 },
            px: { xs: 2, md: 5 },
            color: "text.primary",
          }}
        >
          {/* Left Section */}
          <Grid item xs={12} md={3}>
            <Box>
              <Image src={logo} alt="logo" height={50} width={50} />
              <Typography
                variant="body2"
                sx={{
                  // color: "text.secondary",
                  fontWeight: 600,
                  fontSize: "20px",
                }}
              >
                PetSmart
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ my: 2, color: "text.secondary" }}>
              We have Petsmart Shop, an innovative team of pet suppliers.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: "10px",
                color: "text.secondary",
              }}
            >
              <FaLocationDot />
              <Typography variant="body2">
                789 Inner Lane, Biyes Park, California, USA
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: "10px",
                color: "text.secondary",
              }}
            >
              <BiSolidPhoneCall />
              <Typography variant="body2">
                +00 123 456 789 <span style={{ color: "#4caf50" }}>or</span> +00
                987 654 012
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "text.secondary",
              }}
            >
              <MdEmail />
              <Typography variant="body2">support24@petsmart.com</Typography>
            </Box>
          </Grid>

          {/* Information Section */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Information
            </Typography>
            {[
              "Affiliate Program",
              "Privacy Policy",
              "Our Suppliers",
              "Extended Plan",
              "Community",
            ].map((item, index) => (
              <Link key={index} href="#">
                <Box
                  sx={{
                    display: "block",
                    textAlign: "left",
                    color: "text.secondary",
                    textTransform: "none",
                    mb: "10px",
                  }}
                >
                  {" "}
                  {item}
                </Box>
              </Link>
            ))}
          </Grid>

          {/* Customer Support Section */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Customer Support
            </Typography>
            {[
              "Help Center",
              "Contact Us",
              "Report Abuse",
              "Submit and Dispute",
              "Policies & Rules",
            ].map((item, index) => (
              <Link key={index} href="#">
                <Box
                  sx={{
                    display: "block",
                    textAlign: "left",
                    color: "text.secondary",
                    textTransform: "none",
                    mb: "10px",
                  }}
                >
                  {" "}
                  {item}
                </Box>
              </Link>
            ))}
          </Grid>

          {/* My Account Section */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              My Account
            </Typography>
            {[
              "My Account",
              "Order History",

              "Compare",
              "Help Ticket",
              "Wishlist",
            ].map((item, index) => (
              <Link key={index} href="#">
                <Box
                  sx={{
                    display: "block",
                    textAlign: "left",
                    color: "text.secondary",
                    textTransform: "none",
                    mb: "10px",
                  }}
                >
                  {" "}
                  {item}
                </Box>
              </Link>
            ))}
          </Grid>
          <Grid item xs={12} md={3}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Shop on The Go
              </Typography>
              <Typography
                variant="body2"
                sx={{ my: 1, color: "text.secondary" }}
              >
                PetSmart App is available. Get it now
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                {[FaFacebook, IoLogoTwitter, FaInstagramSquare, FaLinkedin].map(
                  (Icon, index) => (
                    <IconButton
                      key={index}
                      sx={{
                        bgcolor: "#1586fd",
                        href: "#",
                        // borderRadius: "100%",
                        color: "white",
                        "&:hover": { bgcolor: "#0859ae", color: "white" },
                      }}
                    >
                      <Icon />
                    </IconButton>
                  )
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Social and App Section */}
        {/* <Box sx={{ mt: 5, px: { xs: 2, md: 5 } }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Shop on The Go
          </Typography>
          <Typography variant="body2" sx={{ my: 1, color: "text.secondary" }}>
            PetSmart App is available. Get it now
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            {[FaFacebook, IoLogoTwitter, FaInstagramSquare, FaLinkedin].map(
              (Icon, index) => (
                <IconButton
                  key={index}
                  sx={{
                    bgcolor: "#1586fd",
                    href: "#",
                    // borderRadius: "100%",
                    color: "white",
                    "&:hover": { bgcolor: "#0859ae", color: "white" },
                  }}
                >
                  <Icon />
                </IconButton>
              )
            )}
          </Box>
        </Box> */}
      </Box>

      {/* Bottom Section */}
      <Box sx={{ bgcolor: "#f8fcf4", py: 2 }}>
        <Box sx={{ mx: 2 }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", textAlign: "center" }}
            >
              PetSmart Shop © 2024. All Rights Reserved
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                We Are Accepting
              </Typography>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
