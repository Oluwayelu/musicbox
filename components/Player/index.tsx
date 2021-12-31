import PropTypes from "prop-types";

const Player = () => {
  return (
    <div className="px-3 opacity-90 fixed flex items-center justify-between w-full h-16 rounded-xl bg-gray-300 text-white bottom-3 left-0 z-20">
      <div className="inline-flex items-center space-x-3">
        <img
          src="/images/The_Next_Day.png"
          alt="cover"
          className="h-12 w-12 rounded-md filter object-cover object-center"
        />
        <div className="text-xs">
          <p>Rebel Rebel</p>
          <p className="text-gray-200">Davie Bowie</p>
        </div>
      </div>
      <p>Controls</p>
      <p>Widgets</p>
    </div>
  );
};

Player.propTypes = {};

export default Player;
