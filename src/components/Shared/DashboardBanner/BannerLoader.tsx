import { Box, Skeleton } from "@mui/material";
import React from "react";

const BannerLoader = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Skeleton sx={{ width: "500px", height: "70px" }} />
        <Skeleton sx={{ width: "200px", height: "25px", mx: "auto" }} />
      </Box>
    </Box>
  );
};

export default BannerLoader;
