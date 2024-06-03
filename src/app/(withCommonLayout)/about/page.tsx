import AboutBanner from "@/components/UI/AboutPage/AboutBanner";
import AboutSecondBanner from "@/components/UI/AboutPage/AboutSecondBanner";
import Service from "@/components/UI/AboutPage/Service";
import { Box } from "@mui/material";
import React from "react";

const AboutPage = () => {
  return (
    <Box pt="70px">
      <AboutBanner />
      <AboutSecondBanner />
      <Service />
    </Box>
  );
};

export default AboutPage;
