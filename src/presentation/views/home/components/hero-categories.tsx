export default function HeroCategoriesSection({
  items,
}: {
  items: Category[];
}) {
  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: true,
    interval: 500,
    pauseOnHover: true,
    resetProgress: false,
    arrows: false,
    fixedWidth: "10rem",
  };
  return (
    <div className="absolute bottom-0 left-0 w-full bg-black">
      <div className="carousel-track">vontenido</div>
    </div>
  );
}
