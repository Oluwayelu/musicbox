import React from "react";
import PropTypes, { InferProps } from "prop-types";

function Button({ color, children }: InferProps<typeof Button.propTypes>) {
  return (
    <button
      className={
        color === "primary"
          ? "mx-3 my-2 rounded-full px-10 py-2 text-white text-center bg-gradient-to-r from-primaryLight to-secondary"
          : "mx-3 my-2 border-2 border-white rounded-full px-10 py-2 text-white text-center"
      }
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary"]),
  children: PropTypes.node.isRequired,
};

export default Button;
