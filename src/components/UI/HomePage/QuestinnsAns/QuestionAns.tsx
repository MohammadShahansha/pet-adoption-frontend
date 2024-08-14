"use client";
import { Box, Grid, Typography } from "@mui/material";
import TabPage from "./TabComponent/TabPage";
import Image from "next/image";
import img from "@/assets/images/Rectangle.webp";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const QuestionAns = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        backgroundColor: "rgba(1,201,214,0.1)",

        display: isSmallScreen ? "column" : "flex",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <Box
        sx={{
          width: isSmallScreen ? "100%" : "80%",
        }}
      >
        <Image src={img} alt="image"></Image>
      </Box>
      <Box>
        {isSmallScreen ? (
          <Box>
            <Typography
              fontWeight={500}
              sx={{
                fontSize: "25px",
                color: "black",
                lineHeight: "30px",
                mt: "10px",
              }}
            >
              Answer Regarding Your Cutie Pie Pets & Care
            </Typography>
            {/* <Typography
              fontWeight={400}
              sx={{
                fontSize: "40px",
                color: "black",
              }}
            >
              Care
            </Typography> */}
          </Box>
        ) : (
          <Box>
            <Typography
              fontWeight={500}
              sx={{
                fontSize: "40px",
                color: "black",
                lineHeight: "30px",
              }}
            >
              Answer Regarding Your Cutie Pie Pets &
            </Typography>
            <Typography
              fontWeight={400}
              sx={{
                fontSize: "40px",
                color: "black",
              }}
            >
              Care
            </Typography>
          </Box>
        )}
        <Box>
          <Typography
            fontWeight={300}
            sx={{
              fontSize: "20px",
              my: "30px",
              wordSpacing: "8px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            dolorem magni autem aliquid sapiente aperiam inventore accusamus
            quaerat aliquam maiores.
          </Typography>
        </Box>

        <TabPage />
      </Box>
    </Box>
  );
};

export default QuestionAns;
