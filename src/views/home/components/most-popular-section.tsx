import PaceCard from "@/components/places/place-card";
import SectionTemplate from "@components/section-template";

export default function MostPopularSection() {
  const buildPlaces = () => {
    const places = [];
    for (let i = 0; i < 10; i++) {
      places.push(<PaceCard key={i} />);
    }
    return places;
  };
  return (
    <SectionTemplate section="Populares">
      <div className="flex overflow-x-auto">
        {buildPlaces()}
      </div>
    </SectionTemplate>
  );
}
