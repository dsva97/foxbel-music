import type { NextPage } from "next";
import Head from "next/head";
import { IndexView } from "../views/IndexView";
import icon from "../assets/img/foxbel-music-icon.png";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Foxbel Music</title>
        <meta
          name="description"
          content="Millions of songs from your favorite artists and the moment. No credit card required. USE FREE FOXBEL MUSIC"
        />
        <link rel="icon" href={icon.src} />
      </Head>
      <IndexView />
    </>
  );
};

export default IndexPage;
