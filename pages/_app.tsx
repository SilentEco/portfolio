import "../styles/index.scss";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="gloabalWrapper">
      <Navbar />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
