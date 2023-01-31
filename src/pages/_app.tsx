import { type AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";
import Header from "../components/Header";
import { Space_Grotesk } from "@next/font/google";

const space = Space_Grotesk({ subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main
      style={space.style}
      className="my-0 mx-auto flex h-screen max-w-screen-2xl flex-col gap-2  p-2"
    >
      <Header />
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
