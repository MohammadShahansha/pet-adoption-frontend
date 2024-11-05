import BannerSection from "@/components/UI/HomePage/BannerSection/BannerSection";
import Gallery from "@/components/UI/HomePage/Gallery/Gallery";
import HomeSlider from "@/components/UI/HomePage/HomeSlider/HomeSlider";
import PetsShow from "@/components/UI/HomePage/PetsShow/PetsShow";
import QuestionAns from "@/components/UI/HomePage/QuestinnsAns/QuestionAns";
import ReviewSection from "@/components/UI/HomePage/ReviewSection/ReviewSection";
import Slider from "@/components/UI/HomePage/Slider/Slider";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <Box>
      {/* <HomeSlider /> */}
      <Slider />
      <BannerSection />
      <PetsShow />
      <ReviewSection />
      <QuestionAns />
      <Gallery />
    </Box>
  );
};

export default HomePage;
