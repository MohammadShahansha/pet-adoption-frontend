"use client";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import bannerImg from "@/assets/images/about.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CommonButton from "@/utils/Common/CommonButton";
import Link from "next/link";

const AboutSecondBanner = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        // backgroundColor: "#e5e7eb",
        py: { xs: "30px", md: "40px" },
      }}
    >
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
          <Box
            sx={{
              width: { xs: "100%", md: 500 },
            }}
          >
            <Image src={bannerImg} alt="image" width={500} height={500} />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
            }}
          >
            <Typography
              variant="h4"
              fontWeight={500}
              sx={{
                color: "black",
                fontSize: { xs: "30px", md: "35px" },
                // fontWeight: { xs: 500, md: 600 },
              }}
            >
              Experience Beyond
            </Typography>
            <Typography
              variant="h4"
              fontWeight={500}
              sx={{
                color: "black",
                mb: "20px",
                fontSize: { xs: "30px", md: "35px" },
                // fontWeight: { xs: 500, md: 600 },
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
            <Typography sx={{ mb: "10px" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              veritatis excepturi magni eius tempore maxime dolor nesciunt
              molestiae repudiandae pariatur.
            </Typography>
            <Typography component={Link} href="/blog">
              <CommonButton buttonName="Read More"></CommonButton>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSecondBanner;
