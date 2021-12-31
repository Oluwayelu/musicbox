/* eslint-disable @next/next/no-img-element */
import FlowCard from "./components/FlowCard";
import { Flows } from "utils/_DATA";

const FlowSection = () => {
  return (
    <div className="w-full px-5 md:px-32 py-5 space-y-5">
      <div className="w-full flex justify-between items-center text-white ">
        <h1 className="text-xl sm:text-2xl font-bold">Flow</h1>
        <button>
          <img src="/icons/more.svg" alt="more" />
        </button>
      </div>
      <div className="flex flex-col md:flex-row items-stretch space-y-3 md:space-y-0 md:space-x-5">
        {Flows &&
          Flows.map((Flow, index) => (
            <FlowCard
              key={index}
              title={Flow.title}
              subTitle={Flow.subTitle}
              footer={Flow.footer}
              icon={Flow.icon}
              cover={Flow.cover}
              backgroundImage={Flow.backgroundImage}
            />
          ))}
      </div>
    </div>
  );
};

export default FlowSection;
