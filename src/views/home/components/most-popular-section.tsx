import PaceCard from "@/components/place-card";
import SectionTemplate from "@components/section-template";

export default function MostPopularSection() {
  const buildPlaces = () => {
    const places = [];
    for (let i = 0; i < 10; i++) {
      places.push(<PaceCard />);
    }
    return places;
  };
  return (
    <SectionTemplate section="Populares">
      <div className="flex overflow-x-scroll">
        {buildPlaces().map((place) => place)}
      </div>
    </SectionTemplate>
  );
}
