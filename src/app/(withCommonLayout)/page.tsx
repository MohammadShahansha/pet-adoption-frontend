import AutoSlider from "@/components/UI/HomePage/AutoSlider/AutoSlider";
import BannerSection from "@/components/UI/HomePage/BannerSection/BannerSection";
import Gallery from "@/components/UI/HomePage/Gallery/Gallery";
import PetsShow from "@/components/UI/HomePage/PetsShow/PetsShow";
import QuestionAns from "@/components/UI/HomePage/QuestinnsAns/QuestionAns";
import ReviewSection from "@/components/UI/HomePage/ReviewSection/ReviewSection";
import SliderPage from "@/components/UI/HomePage/Slider/Slider";
// import Slider from "@/components/UI/HomePage/Slider/Slider";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "25rem",
          height: "44rem",
          background:
            "linear-gradient(to right, rgba(128, 90, 213, 0.5), #dcd6f7)",
          filter: "blur(3rem)",
          transform: "rotate(-60deg) translateX(-10rem)",
          zIndex: -1,
          top: 0,
          left: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "90rem",
          height: "50rem",
          background: "linear-gradient(to top left, #ebf8ff, #dbeafe, #ebf8ff)",
          filter: "blur(3rem)",
          borderRadius: "50%",
          transform: "rotate(-12deg) translateX(-15rem)",
          zIndex: -1,
          top: 0,
          left: 0,
        }}
      />
      {/* <Slider /> */}
      <SliderPage />
      <AutoSlider />
      <BannerSection />
      <PetsShow />
      <ReviewSection />
      <QuestionAns />
      <Gallery />
    </Box>
  );
};

export default HomePage;
