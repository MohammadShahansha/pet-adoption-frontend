import { Box, Typography } from "@mui/material";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const AboutBanner = () => {
  return (
    <Box
      sx={{
        height: "300px",
        backgroundColor: "#f3f8f4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Typography
          fontWeight={700}
          sx={{
            fontSize: "40px",
          }}
        >
          About Us
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            component={Link}
            href="/"
            fontWeight={500}
            sx={{
              ":hover": {
                color: "primary.main",
              },
            }}
          >
            Home
          </Typography>
          <Typography>
            {" "}
            <KeyboardArrowRightIcon />
          </Typography>
          <Typography
            component={Link}
            href="/about"
            fontWeight={500}
            sx={{
              ":hover": {
                color: "primary.main",
              },
            }}
          >
            About
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutBanner;
