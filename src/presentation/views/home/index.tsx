import HeroComponent from "@views/home/components/hero-component";
import MostPopularSection from "./components/most-popular-section";
import RecommendedPlace from "./components/recomendation-of-day";

export default function HomeView() {
  return (
    <div className="flex flex-col space-y-2 w-full p-0 m-0 justify-start test">
      <HeroComponent />
      <MostPopularSection />
      <RecommendedPlace />
    </div>
  );
}
