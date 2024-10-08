import BannerSection from "@/components/UI/HomePage/BannerSection/BannerSection";
import Gallery from "@/components/UI/HomePage/Gallery/Gallery";
import PetsShow from "@/components/UI/HomePage/PetsShow/PetsShow";
import QuestionAns from "@/components/UI/HomePage/QuestinnsAns/QuestionAns";
import ReviewSection from "@/components/UI/HomePage/ReviewSection/ReviewSection";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <Box>
      <BannerSection />
      <PetsShow />
      <ReviewSection />
      <QuestionAns />
      <Gallery />
    </Box>
  );
};

export default HomePage;
