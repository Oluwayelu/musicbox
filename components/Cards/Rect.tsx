/* eslint-disable @next/next/no-img-element */
import PropTypes, { InferProps } from "prop-types";

function RectCard({
  title,
  subtitle,
  likes,
  image,
}: InferProps<typeof RectCard.propTypes>) {
  return (
    <div className="w-40 flex flex-col transform transition ease-in-out duration-300 hover:translate-y-1 hover:scale-110">
      <img
        src={image}
        alt=""
        className="w-full h-40 rounded-lg filter object-cover object-center "
      />
      <p className="text-white">{title}</p>
      <p>{subtitle}</p>
      <div className="flex items-center space-x-1">
        <img src="/icons/heart.svg" alt="" />
        <p className="text-gray-200">{likes}</p>
      </div>
    </div>
  );
}

RectCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  likes: PropTypes.string,
  image: PropTypes.string.isRequired,
};

export default RectCard;
