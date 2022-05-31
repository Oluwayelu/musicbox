import Link from "next/link";
import Parallax from "components/Parallax";
import { GENRES_AND_MOODS, BROWSE, ROCK } from "routes/CONSTANTS";
import RectCard from "components/Cards/Rect";
import NavItem from "components/Navbar/Item";
import { useState } from "react";
import DiscCard from "components/Cards/Disc";
import { artists } from "utils/_DATA";

const Rock = () => {
  const [active, setActive] = useState({
    secondary: "",
  });
  return (
    <Parallax
      title="Genre: ROCK"
      description=""
      left={
        <div className="text-gray-100">
          <Link href={BROWSE + GENRES_AND_MOODS}>
            <a>Genres & Moods/</a>
          </Link>
          <span className="text-white font-bold uppercase">Rock</span>
        </div>
      }
      auth
    >
      <div className="self-start w-full px-5 md:px-32 py-5 text-white space-y-5">
        <div className="w-full flex items-end space-x-10 bg-gray-600">
          <h1 className="text-2xl sm:text-5xl font-bold">Rock</h1>

          <NavItem
            name="OVERVIEW"
            active={active}
            setActive={setActive}
            route={BROWSE + GENRES_AND_MOODS + ROCK}
          />
          <NavItem
            name="PLAYLISTS"
            active={active}
            setActive={setActive}
            route={BROWSE + GENRES_AND_MOODS + ROCK + "/playlist"}
          />
          <NavItem
            name="NEW RELEASES"
            active={active}
            setActive={setActive}
            route={BROWSE + GENRES_AND_MOODS + ROCK}
          />
          <NavItem
            name="ARTISTS"
            active={active}
            setActive={setActive}
            route={BROWSE + GENRES_AND_MOODS + ROCK + "/playlist"}
          />
        </div>
        <div id="">
          <p className="text-xl sm:text-2xl font-semibold">
            Popular in this week
          </p>
          <div className="w-full px-10 py-5 space-x-5 flex flex-shrink-0 items-start overflow-x-auto scroll-p-5 snap-x scroll-smooth cursor-pointer">
            <RectCard
              image="/images/70s_Rock_Anthems.png"
              title="70s Rock Anthem"
            />
            <RectCard
              title="70s Rock Anthem"
              image="/images/70s_Rock_ANthems.png"
            />
            <RectCard
              image="/images/Progressive_Rock.png"
              title="Progrssive Rock"
              likes="128,045"
            />
            <RectCard
              image="/images/StarTalk.png"
              title="StarTalk Radio"
              likes="87,444"
            />
            <RectCard
              image="/images/The_Next_Day.png"
              title="The Next Day"
              subtitle="Album by David Bowie"
            />
            <RectCard
              title="70s Rock Anthem"
              image="/images/70s_Rock_ANthems.png"
            />
            <RectCard
              image="/images/Progressive_Rock.png"
              title="Progrssive Rock"
              likes="128,045"
            />
          </div>
        </div>
        <div id="playlists">
          <div className="w-full flex items-center justify-between">
            <p className="text-xl sm:text-2xl font-semibold">Playlists</p>
            <p className="text-gray-100">View all</p>
          </div>
          <div className="w-full px-10 py-5 space-x-5 flex flex-shrink-0 items-start overflow-x-auto scroll-p-5 snap-x scroll-smooth cursor-pointer">
            <RectCard
              image="/images/70s_Rock_Anthems.png"
              title="70s Rock Anthem"
            />
            <RectCard
              title="70s Rock Anthem"
              image="/images/70s_Rock_ANthems.png"
            />
            <RectCard
              image="/images/Progressive_Rock.png"
              title="Progrssive Rock"
              likes="128,045"
            />
            <RectCard
              image="/images/StarTalk.png"
              title="StarTalk Radio"
              likes="87,444"
            />
            <RectCard
              image="/images/The_Next_Day.png"
              title="The Next Day"
              subtitle="Album by David Bowie"
            />
            <RectCard
              title="70s Rock Anthem"
              image="/images/70s_Rock_ANthems.png"
            />
            <RectCard
              image="/images/Progressive_Rock.png"
              title="Progrssive Rock"
              likes="128,045"
            />
          </div>
        </div>
        <div id="new-release">
          <div className="w-full flex items-center justify-between">
            <p className="text-xl sm:text-2xl font-semibold">New Release</p>
            <p className="text-gray-100">View all</p>
          </div>
          <div className="w-full px-10 py-5 space-x-5 flex flex-shrink-0 items-start overflow-x-auto scroll-p-5 snap-x scroll-smooth cursor-pointer">
            <RectCard
              image="/images/70s_Rock_Anthems.png"
              title="70s Rock Anthem"
            />
            <RectCard
              title="70s Rock Anthem"
              image="/images/70s_Rock_ANthems.png"
            />
            <RectCard
              image="/images/Progressive_Rock.png"
              title="Progrssive Rock"
              likes="128,045"
            />
            <RectCard
              image="/images/StarTalk.png"
              title="StarTalk Radio"
              likes="87,444"
            />
            <RectCard
              image="/images/The_Next_Day.png"
              title="The Next Day"
              subtitle="Album by David Bowie"
            />
            <RectCard
              title="70s Rock Anthem"
              image="/images/70s_Rock_ANthems.png"
            />
            <RectCard
              image="/images/Progressive_Rock.png"
              title="Progrssive Rock"
              likes="128,045"
            />
          </div>
        </div>
        <div id="new-release">
          <div className="w-full flex items-center justify-between">
            <p className="text-xl sm:text-2xl font-semibold">Artists</p>
            <p className="text-gray-100">View all</p>
          </div>
          <div className="w-full px-10 py-5 space-x-5 flex flex-shrink-0 items-start overflow-x-auto scroll-p-5 snap-x scroll-smooth cursor-pointer">
            {artists &&
              artists.map((artist, index) => (
                <DiscCard
                  key={index}
                  title={artist.name}
                  image={artist.image}
                  likes={artist.likes}
                />
              ))}
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Rock;
