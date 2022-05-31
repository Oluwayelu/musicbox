/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes, { InferProps } from "prop-types";

function ImageCard({
  center,
  image,
  title,
}: InferProps<typeof ImageCard.propTypes>) {
  return (
    <div className="relative w-full h-32 rounded-xl flex items-center justify-center">
      <div className="absolute inset-0 bg-secondary rounded-xl opacity-60" />
      <img
        src={image}
        alt={title}
        className="w-full h-full filter object-cover object-center rounded-xl"
      />
      <p
        className={`${
          !center && "bottom-5 right-5"
        } "p-5 absolute font-bold uppercase"`}
      >
        {title}
      </p>
    </div>
  );
}

ImageCard.propTypes = {
  center: PropTypes.bool,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ImageCard;
