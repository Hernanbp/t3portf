import { type AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";
import Header from "../components/Header";
import { Heebo } from "@next/font/google";

const space = Heebo({ subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main
      style={space.style}
      className="my-0 mx-auto flex h-screen max-w-screen-2xl  flex-col gap-2 scroll-smooth  p-2"
    >
      <Header />
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
