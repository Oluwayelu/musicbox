/* eslint-disable @next/next/no-img-element */
import React from "react";
import ImageCard from "./components/ImageCard";

const Moods = () => {
  return (
    <div className="w-full px-5 md:px-32 text-white space-y-5">
      <h1 className="text-xl sm:text-2xl font-bold">Mood</h1>
      <div className="w-full grid grid-cols-2 md:grid-cols-6 items-start gap-3 ">
        <ImageCard center title="Party" image="/images/Progressive_Rock.png" />
        <ImageCard center title="CHILL" image="/images/Progressive_Rock.png" />
        <ImageCard center title="Pop" image="/images/Progressive_Rock.png" />

        <ImageCard
          center
          title="Workout"
          image="/images/Progressive_Rock.png"
        />
        <ImageCard center title="Rock" image="/images/Progressive_Rock.png" />
        <ImageCard center title="Pop" image="/images/Progressive_Rock.png" />

        <ImageCard center title="Focus" image="/images/Progressive_Rock.png" />
        <ImageCard
          center
          title="DRIVING"
          image="/images/Progressive_Rock.png"
        />
        <ImageCard center title="Pop" image="/images/Progressive_Rock.png" />
      </div>
    </div>
  );
};

export default Moods;
