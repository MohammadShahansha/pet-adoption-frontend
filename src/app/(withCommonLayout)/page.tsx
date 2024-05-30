import BannerSection from "@/components/UI/HomePage/BannerSection/BannerSection";
import PetsShow from "@/components/UI/HomePage/PetsShow/PetsShow";
import QuestionAns from "@/components/UI/HomePage/QuestinnsAns/QuestionAns";
import { Button } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <BannerSection />
      <PetsShow />
      <QuestionAns />
    </div>
  );
};

export default HomePage;
