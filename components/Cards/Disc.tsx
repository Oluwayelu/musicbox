/* eslint-disable @next/next/no-img-element */
import PropTypes, { InferProps } from "prop-types";

function DiscCard({
  title,
  likes,
  image,
}: InferProps<typeof DiscCard.propTypes>) {
  return (
    <div className="w-40 snap-start flex-none flex flex-col items-center transform transition ease-in-out duration-300 hover:translate-y-1 hover:scale-110">
      <img
        src={image}
        alt={title}
        className="w-full md:h-40 rounded-full filter object-cover object-center "
      />
      <p className="text-white">{title}</p>
      <div className="flex items-center space-x-1">
        <img src="/icons/heart.svg" alt="" />
        <p className="text-gray-200">{likes}</p>
      </div>
    </div>
  );
}

DiscCard.propTypes = {
  title: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default DiscCard;
