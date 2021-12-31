import { FunctionComponent } from "react";
import Image from "next/image";
import { FlowInterface } from "interface/types";

const FlowCard: FunctionComponent<FlowInterface> = ({
  cover,
  icon,
  title,
  subTitle,
  footer,
  backgroundImage,
}) => {
  return (
    <div className="w-full h-40 md:h-60 flex items-center p-5 relative transform transition ease-in-out delay-150  duration-300 hover:translate-y-1 hover:scale-90">
      <Image
        src={backgroundImage}
        alt="background image"
        layout="fill"
        className="w-full rounded-xl filter object-cover object-center z-0"
      />
      <Image
        src="/background/flowPath.svg"
        alt=""
        layout="fill"
        className="w-full rounded-xl filter object-cover object-center"
      />
      <div className="absolute blur rounded-xl inset-0 opacity-50 bg-gray-500" />
      <div className="w-full flex space-x-3 z-30">
        <div className="w-1/2 flex justify-center items-center relative">
          <div className="w-12  md:w-20 md:h-40">
            <Image
              src={cover}
              alt="cover"
              layout="fill"
              className=" filter object-cover object-center"
            />
          </div>
          <div className="absolute w-16 h-16 flex items-center justify-center rounded-full bg-gray-400 opacity-75 -bottom-7">
            <Image src={icon} width={30} height={30} alt="icon" />
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-between items-center text-center text-sm  text-gray-100">
          <div className="mt-5 ">
            <h1 className="opacity-50 text-white text-2xl sm:text-4xl font-bold">
              {title}
            </h1>
            <p className="text-white">{subTitle}</p>
          </div>
          <p className=" self-end text-xs">{footer}</p>
        </div>
      </div>
    </div>
  );
};

export default FlowCard;
