import HeroComponent from "@views/home/components/hero-component";
import "./home.css";

export default function HomeView() {
  return (
    <div className="flex flex-col space-y-2 w-full p-0 m-0 justify-start test">
      <HeroComponent />
    </div>
  );
}
