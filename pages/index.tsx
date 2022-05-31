/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import { Parallax, Button, Footer } from "../components";
import FlowSection from "../page-sections/landingPage/FlowSection";
import ListenSection from "../page-sections/landingPage/ListenSection";
import MusicSection from "../page-sections/landingPage/MusicSection";
import PremiumSection from "../page-sections/landingPage/PremiumSection";

const Landing: NextPage = () => {
  return (
    <div>
      <Parallax title="Music Box: Welcome to Music Box" description="">
        <div className="w-full flex flex-col items-center justify-center">
          <p className="text-center text-white text-4xl">
            Open the world of music.
          </p>
          <p className="text-center text-white text-4xl">It's all here.</p>
          <div className="flex flex-col-reverse md:flex-row mt-10 md:mt-20">
            <Button color="primary">MUSICBOX PREMIUM</Button>
            <Button color="secondary">MUSICBOX FREE</Button>
          </div>
          <p className="mt-5 text-center text-white text-xl">
            1-month free trial <span className="text-primaryLight">$7.99</span>
            /month after
          </p>
        </div>
      </Parallax>
      <FlowSection />
      <main className="">
        <ListenSection />
        <MusicSection />
        <PremiumSection />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
