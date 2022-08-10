import type { NextPage } from "next";
import Head from "next/head";
import ContactUs from "../src/components/buttons/ContactUs";
import FlavourChoice from "../src/components/FlavourChoice";
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
      <h5 className="text-center font-bold text-4xl text-orange-600 tracking-tight  bg-orange-50/70 py-6">
        A Wide Variety of Flavours.
      </h5>
      <FlavourChoice />
      <RainbowFlavour />
      <HealthyJuice />
      <PennyJuiceProducts />
      <ContactUs />
    </div>
  );
};

export default Home;
