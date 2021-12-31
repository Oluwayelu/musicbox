import DiscCard from "components/Cards/Disc";
import RectCard from "components/Cards/Rect";

/* eslint-disable @next/next/no-img-element */
const RecentlyPlayed = () => {
  return (
    <div className="w-full px-5 md:px-32 py-5 text-white">
      <h1 className="text-xl sm:text-2xl font-bold">Recently Played</h1>
      <div className="w-full py-10 space-x-5 flex items-start overflow-x-auto">
        <DiscCard image="/images/Queen.png" title="Queen" likes="123,766" />
        <div className="w-40 flex flex-col transform transition ease-in-out duration-300 hover:translate-y-1 hover:scale-110">
          <img src="/images/70s_Rock_Anthems.png" alt="" />
          <p className="text-white">70s Rock Anthem</p>
        </div>
        <RectCard title="70s Rock Anthem" image="/images/70s_Rock_ANthems.png" />
        <div className="w-40 flex flex-col transform transition ease-in-out duration-300 hover:translate-y-1 hover:scale-110">
          <img src="/images/Progressive_Rock.png" alt="" />
          <p className="text-white">Progressive Rock</p>
          <p className="text-gray-200">128,045</p>
        </div>
        <div className="w-40 flex flex-col transform transition ease-in-out duration-300 hover:translate-y-1 hover:scale-110">
          <img src="/images/StarTalk.png" alt="" />
          <p className="text-white">StarTalk Radio</p>
          <p className="text-gray-200">87,444</p>
        </div>
        <div className="w-40 flex flex-col transform transition ease-in-out duration-300 hover:translate-y-1 hover:scale-110">
          <img src="/images/The_Next_Day.png" alt="" />
          <p className="text-white">The Next Day</p>
          <p className="text-gray-200">Album by David Bowie</p>
        </div>
      </div>
      <audio controls>
        <source src="/music/sample.mp3" />
      </audio>
    </div>
  );
};

export default RecentlyPlayed;
