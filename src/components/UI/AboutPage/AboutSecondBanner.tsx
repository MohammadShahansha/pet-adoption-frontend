"use client";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import bannerImg from "@/assets/images/about.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const AboutSecondBanner = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ backgroundColor: "#e5e7eb", py: "100px" }}>
      <Container>
        <Box
          // direction="row"
          // flex={1}
          justifyContent="space-between"
          alignItems="center"
          sx={{
            display: isSmallScreen ? "col" : "flex",
            px: { xs: "5px", md: 0 },
          }}
        >
          <Box width={500} height={500} borderRadius="50%">
            <Image src={bannerImg} alt="image" width={500} height={500} />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              sx={{
                color: "black",
                fontSize: { xs: "35px", md: "45px" },
                fontWeight: { xs: 500, md: 700 },
              }}
            >
              Experience Beyond
            </Typography>
            <Typography
              component="h1"
              variant="h3"
              sx={{
                color: "black",
                mb: "20px",
                fontSize: { xs: "35px", md: "45px" },
                fontWeight: { xs: 500, md: 700 },
              }}
            >
              The Decades!
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel at
              suscipit quibusdam ex minima officia adipisci. Illum deserunt
              maxime ipsam magni, repudiandae veniam at quasi minima saepe
              officiis laborum reiciendis. Quos magnam minima voluptas
              temporibus nam fuga placeat? Ea fugit facilis provident debitis,
              amet et in soluta dicta inventore dolores consequuntur cupiditate?
              Corrupti iure dicta quas nostrum natus, voluptatem nihil
              perspiciatis repellendus itaque
            </Typography>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              veritatis excepturi magni eius tempore maxime dolor nesciunt
              molestiae repudiandae pariatur.
            </Typography>
            <Button
              sx={{
                mt: "30px",
                ":hover": {
                  backgroundColor: "secondary.main",
                },
              }}
            >
              Read More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSecondBanner;
