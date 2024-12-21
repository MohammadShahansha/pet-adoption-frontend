import { Box, Typography } from "@mui/material";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export type TBanner = {
  title: string;
  routeLink: string;
  selfName: string;
};

const DashboardBanner = ({ title, routeLink, selfName }: TBanner) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "100px", md: "120px" },
        backgroundColor: "#f3f8f4",
        mb: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          fontWeight={600}
          textAlign="center"
          mb="15px"
          sx={{
            fontWeight: { xs: 500, md: 600 },
            fontSize: { xs: "20px", md: "25px" },
          }}
        >
          {title}
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
            href={routeLink}
            fontWeight={500}
            sx={{
              ":hover": {
                color: "primary.main",
              },
            }}
          >
            {selfName}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardBanner;
