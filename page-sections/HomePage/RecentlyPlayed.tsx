import DiscCard from "components/Cards/Disc";
import RectCard from "components/Cards/Rect";

/* eslint-disable @next/next/no-img-element */
const RecentlyPlayed = () => {
  return (
    <div className="w-full px-5 md:px-32 py-5 text-white space-y-5">
      <h1 className="text-xl sm:text-2xl font-bold">Recently Played</h1>
      <div className="w-full p-10 space-x-5 flex flex-shrink-0 items-start overflow-x-auto scroll-p-5 snap-x scroll-smooth cursor-pointer">
        <DiscCard image="/images/Queen.png" title="Queen" likes="123,766" />
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
      </div>
      {/* <audio controls>
        <source src="/music/sample.mp3" />
      </audio> */}
    </div>
  );
};

export default RecentlyPlayed;
