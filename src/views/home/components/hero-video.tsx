"use client";
import ReactPlayer from "react-player";

export default function HeroImage() {
  return (
    <div className="absolute w-full overflow-hidden aspect-square bg-white md:aspect-video z-0">
      <ReactPlayer
        url="https://vimeo.com/871837519"
        playing={true}
        loop={true}
        muted={true}
        config={{
          vimeo: {
            playerOptions: {
              background: true,
            },
          },
        }}
      />
    </div>
  );
}
