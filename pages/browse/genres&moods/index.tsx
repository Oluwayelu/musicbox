import Parallax from "components/Parallax";
import { Genres, Moods } from "page-sections/BrowsePage";

const GenresAndMoods = () => {
  return (
    <Parallax title="Music Box: Genres & Moods" description="" auth browse>
      <div className="w-full h-full flex flex-col space-y-3">
        <Genres />
        <Moods />
      </div>
    </Parallax>
  );
};

export default GenresAndMoods;
