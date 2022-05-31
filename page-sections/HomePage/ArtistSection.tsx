import DiscCard from "components/Cards/Disc";
import { artists } from "utils/_DATA";

const ArtistSection = () => {
  return (
    <div className="w-full px-5 md:px-32 py-5 text-white space-y-5">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold">
          You might like these artists
        </h1>
        <p className="text-white">...</p>
      </div>
      <div className="w-full p-10 space-x-5 flex flex-shrink-0 items-start overflow-x-auto scroll-p-5 snap-x scroll-smooth cursor-pointer">
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
  );
};

export default ArtistSection;
