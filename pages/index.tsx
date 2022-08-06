import type { NextPage } from "next";
import Head from "next/head";
import ContactUs from "../src/components/buttons/ContactUs";
import HealthyJuice from "../src/components/HealthyJuice";
import MainIntro from "../src/components/MainIntro";
import PennyJuiceProducts from "../src/components/PennyJuiceProducts";
import RainbowFlavour from "../src/components/RainbowFlavour";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Penny Juice Redesign</title>
        <meta name="description" content="Penny Juice Redesign" />
      </Head>

      <MainIntro />
      <RainbowFlavour />
      <HealthyJuice />
      <PennyJuiceProducts />
      <ContactUs />
    </div>
  );
};

export default Home;
