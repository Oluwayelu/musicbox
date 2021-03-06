import "../styles/globals.css";
import "../styles/login.css";
import { lazy, Suspense } from "react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-600">
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
