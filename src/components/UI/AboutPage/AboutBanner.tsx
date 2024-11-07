import { Box, Typography } from "@mui/material";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const AboutBanner = () => {
  return (
    <Box
      sx={{
        height: { xs: "150px", md: "250px" },
        mt: "65px",
        // backgroundColor: "#f3f8f4",
        // backgroundColor: "#e4eaf0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(to right, #E0F2FE, #FFEDD5)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "0",
          width: "100%",
          height: "100%",
          background: "linear-gradient(to top left, #93C5FD, #E0F2FE)",
          borderTopLeftRadius: "50% 20%",
          borderTopRightRadius: "50% 20%",
          transform: "translateY(-50%)",
          zIndex: -1,
        }}
      />
      <Box>
        <Typography
          variant="h4"
          fontWeight={500}
          sx={{
            fontSize: { xs: "30px", md: "35px" },
            // fontWeight: { xs: 500, md: 600 },
            position: "relative",
            overflow: "hidden",
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
