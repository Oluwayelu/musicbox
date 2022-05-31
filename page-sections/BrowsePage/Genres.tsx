/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import ImageCard from "./components/ImageCard";
import { BROWSE, GENRES_AND_MOODS, ROCK } from "routes/CONSTANTS";

const Genres = () => {
  return (
    <div className="w-full px-5 md:px-32 text-white space-y-5">
      <h1 className="text-xl sm:text-2xl font-bold">Genre</h1>
      <div className="w-full grid grid-cols-2 md:grid-cols-6 items-start gap-3">
        <Link href={BROWSE + GENRES_AND_MOODS + ROCK}>
          <a>
            <ImageCard title="Hip - Hop" image="/images/Progressive_Rock.png" />
          </a>
        </Link>
        <Link href={BROWSE + GENRES_AND_MOODS + ROCK}>
          <a>
            <ImageCard title="Dance/Electro" image="/images/The_Next_Day.png" />
          </a>
        </Link>
        <Link href={BROWSE + GENRES_AND_MOODS + ROCK}>
          <a>
            <ImageCard title="Pop" image="/images/Progressive_Rock.png" />
          </a>
        </Link>
        <Link href={BROWSE + GENRES_AND_MOODS + ROCK}>
          <a>
            <ImageCard title="Rock" image="/images/StarTalk.png" />
          </a>
        </Link>
        <ImageCard title="Country" image="/images/Progressive_Rock.png" />
        <Link href={BROWSE + GENRES_AND_MOODS + ROCK}>
          <a>
            <ImageCard title="Pop" image="/images/Progressive_Rock.png" />
          </a>
        </Link>
        <Link href={BROWSE + GENRES_AND_MOODS + ROCK}>
          <a>
            <ImageCard title="Rock" image="/images/StarTalk.png" />
          </a>
        </Link>
        <Link href={BROWSE + GENRES_AND_MOODS + ROCK}>
          <a>
            <ImageCard title="Hip - Hop" image="/images/Progressive_Rock.png" />
          </a>
        </Link>
        <Link href={BROWSE + GENRES_AND_MOODS + ROCK}>
          <a>
            <ImageCard title="Pop" image="/images/Progressive_Rock.png" />
          </a>
        </Link>
        <Link href={BROWSE + GENRES_AND_MOODS + ROCK}>
          <a>
            <ImageCard title="Rock" image="/images/StarTalk.png" />
          </a>
        </Link>
        <Link href={BROWSE + GENRES_AND_MOODS + ROCK}>
          <a>
            <ImageCard title="Hip - Hop" image="/images/Progressive_Rock.png" />
          </a>
        </Link>
        <Link href={BROWSE + GENRES_AND_MOODS + ROCK}>
          <a>
            <ImageCard title="Pop" image="/images/Progressive_Rock.png" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Genres;
