import React from "react";
import PropTypes, { InferProps } from "prop-types";
import Head from "next/head";
import Navbar from "../Navbar";
import AuthNavbar from "../Navbar/Auth";

export default function Parallax({
  auth,
  title,
  description,
  children,
}: InferProps<typeof Parallax.propTypes>) {
  return (
    <div
      className={`${
        !auth && "bg-landing"
      } "bg-cover bg-center h-screen overflow-auto md:overflow-hidden "`}
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/logo.svg" />
      </Head>
      {auth ? <AuthNavbar /> : <Navbar />}
      <div className="h-85vh flex items-center justify-center">{children}</div>
    </div>
  );
}

Parallax.propTypes = {
  auth: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logo: PropTypes.string,
  children: PropTypes.node.isRequired,
};
