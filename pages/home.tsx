/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import {
  ArtistSection,
  FlowSection,
  RecentlyPlayed,
} from "page-sections/HomePage";
import { Parallax, Player } from "components";

const Home: NextPage = () => {
  return (
    <div className="pb-16 relative">
      <Parallax title="Music Box: Home Page" description="" auth>
        <div className="w-full h-full flex flex-col">
          <FlowSection />
          <RecentlyPlayed />
        </div>
      </Parallax>
      {/* <Player /> */}
      <FlowSection />
      <FlowSection />
      <ArtistSection />
      <FlowSection />
      <FlowSection />
      <ArtistSection />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
