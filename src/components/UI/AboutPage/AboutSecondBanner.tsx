import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import bannerImg from "@/assets/images/about.png";

const AboutSecondBanner = () => {
  return (
    <Box sx={{ backgroundColor: "#e5e7eb", py: "80px" }}>
      <Container>
        <Stack
          direction="row"
          flex={1}
          justifyContent="space-between"
          alignItems="center"
          sx={{}}
        >
          <Box width={500} height={500} borderRadius="50%">
            <Image src={bannerImg} alt="image" width={500} height={500} />
          </Box>
          <Box width="50%">
            <Typography
              fontWeight={700}
              sx={{
                fontSize: "40px",
                color: "black",
              }}
            >
              Experience Beyond
            </Typography>
            <Typography
              fontWeight={700}
              sx={{
                fontSize: "40px",
                color: "black",
                mb: "20px",
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
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutSecondBanner;
