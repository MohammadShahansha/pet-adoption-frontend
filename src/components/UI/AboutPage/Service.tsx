import { Box, Button, Container, Stack, Typography } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import Image from "next/image";
import serviceImg from "@/assets/images/serviceImg.webp";

const Service = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "rgba(1,201,214,0.1)",
        py: { xs: "50px", md: "100px" },
      }}
    >
      <Container>
        <Box
          sx={{
            display: { xs: "col", md: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Box>
              <Typography
                component="h1"
                variant="h3"
                color="black"
                sx={{
                  fontSize: { xs: "35px", md: "45px" },
                  fontWeight: { xs: 500, md: 700 },
                }}
              >
                Our Passon is
              </Typography>
              <Typography
                component="h1"
                variant="h3"
                color="black"
                sx={{
                  fontSize: { xs: "35px", md: "45px" },
                  fontWeight: { xs: 500, md: 700 },
                }}
              >
                Providing Superior
              </Typography>
              <Typography
                component="h1"
                variant="h3"
                color="black"
                sx={{
                  fontSize: { xs: "35px", md: "45px" },
                  fontWeight: { xs: 500, md: 700 },
                }}
              >
                Pet Care
              </Typography>
              {/* <Typography fontWeight={700} fontSize="40px" color="black">
                Why We Are?
              </Typography> */}
              <Typography
                my={5}
                sx={{
                  fontSize: { xs: "15px", md: "18px" },
                  fontWeight: { xs: 300, md: 400 },
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti ab quis officiis animi harum aut consequatur
                consectetur! Tempora, quos modi!
              </Typography>
            </Box>
            <Box>
              <Box
                sx={{
                  display: { xs: "col", md: "flex" },
                }}
                alignItems="center"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  gap="10px"
                  width="100%"
                  sx={{
                    mb: { xs: "17px", md: 0 },
                  }}
                >
                  <Typography fontSize="22px" fontWeight={600} color="black">
                    <PetsIcon />
                  </Typography>
                  <Typography fontSize="22px" fontWeight={600} color="black">
                    24/7 Support
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap="10px" width="100%">
                  <Typography fontSize="22px" fontWeight={600} color="black">
                    <PetsIcon />
                  </Typography>
                  <Typography fontSize="22px" fontWeight={600} color="black">
                    Personalized Care
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: { xs: "col", md: "flex" },
                }}
                alignItems="center"
                my="20px"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  gap="10px"
                  width="100%"
                  sx={{
                    mb: { xs: "17px", md: 0 },
                  }}
                >
                  <Typography fontSize="22px" fontWeight={600} color="black">
                    <PetsIcon />
                  </Typography>
                  <Typography fontSize="22px" fontWeight={600} color="black">
                    Pet Texi Facility
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap="10px" width="100%">
                  <Typography fontSize="22px" fontWeight={600} color="black">
                    <PetsIcon />
                  </Typography>
                  <Typography fontSize="22px" fontWeight={600} color="black">
                    Quick Delivery
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: { xs: "col", md: "flex" },
                }}
                alignItems="center"
                my="20px"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  gap="10px"
                  width="100%"
                  sx={{
                    mb: { xs: "17px", md: 0 },
                  }}
                >
                  <Typography fontSize="22px" fontWeight={600} color="black">
                    <PetsIcon />
                  </Typography>
                  <Typography fontSize="22px" fontWeight={600} color="black">
                    Money Back Guaranty
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap="10px" width="100%">
                  <Typography fontSize="22px" fontWeight={600} color="black">
                    <PetsIcon />
                  </Typography>
                  <Typography fontSize="22px" fontWeight={600} color="black">
                    Lowest Price
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: { md: "flex" },
                mt: "40px",
                // justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: { xs: "10px", md: 0 },
                  gap: "10px",
                  width: "50%",
                  ":hover": {
                    cursor: "pointer",
                  },
                }}
              >
                <Button
                  sx={{
                    borderRadius: "50%",
                    ":hover": {
                      backgroundColor: "secondary.main",
                    },
                  }}
                >
                  <EmailIcon />
                </Button>
                <Box>
                  <Typography
                    sx={{
                      color: "#0B1134CC",
                    }}
                  >
                    Email us Any Time
                  </Typography>
                  <Typography
                    fontWeight={500}
                    sx={{
                      fontSize: "18px",
                    }}
                  >
                    example@gamil.com
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  ":hover": {
                    cursor: "pointer",
                  },
                }}
              >
                <Button
                  sx={{
                    borderRadius: "50%",
                    ":hover": {
                      backgroundColor: "secondary.main",
                    },
                  }}
                >
                  <CallIcon />
                </Button>
                <Box>
                  <Typography>Call us Any Time</Typography>
                  <Typography
                    fontWeight={500}
                    sx={{
                      fontSize: "18px",
                    }}
                  >
                    880 174025 2019
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Image
              src={serviceImg}
              alt="serviceImage"
              width={800}
              height={800}
            />
          </Box>
        </Box>
      </Container>
    </Stack>
  );
};

export default Service;
