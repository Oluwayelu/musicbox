import React from "react";
import PropTypes, { InferProps } from "prop-types";
import Head from "next/head";
import Navbar from "../Navbar";

export default function Parallax({
  title,
  description,
  children,
}: InferProps<typeof Parallax.propTypes>) {
  return (
    <div className="bg-landing-1 bg-cover bg-center max-h-screen sm:overflow-hidden">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Navbar />
      <div className="h-screen flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

Parallax.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logo: PropTypes.string,
  children: PropTypes.node.isRequired,
};
