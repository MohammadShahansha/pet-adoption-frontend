import BannerSection from "@/components/UI/HomePage/BannerSection/BannerSection";
import PetsShow from "@/components/UI/HomePage/PetsShow/PetsShow";
import QuestionAns from "@/components/UI/HomePage/QuestinnsAns/QuestionAns";
import ReviewSection from "@/components/UI/HomePage/ReviewSection/ReviewSection";

const HomePage = () => {
  return (
    <div>
      <BannerSection />
      <PetsShow />
      <ReviewSection />
      <QuestionAns />
    </div>
  );
};

export default HomePage;
