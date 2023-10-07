import HomeNavbarComponent from "./components/navbar";
import HeroSection from "./components/hero-section";
import MostPopularSection from "./components/most-popular-section";

export default function HomeView() {
  return (
    <div className="flex flex-col space-y-2 w-full p-0 m-0">
      <HeroSection />
      <MostPopularSection />
      <HomeNavbarComponent />
    </div>
  );
}
