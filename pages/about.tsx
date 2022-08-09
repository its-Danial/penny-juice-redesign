import type { NextPage } from "next";
import Head from "next/head";
import AboutUs from "../src/components/AboutUs";
import ContactUs from "../src/components/buttons/ContactUs";
import HealthyJuice from "../src/components/HealthyJuice";
import MainIntro from "../src/components/MainIntro";
import PennyJuiceProducts from "../src/components/PennyJuiceProducts";
import RainbowFlavour from "../src/components/RainbowFlavour";
import Testimonials from "../src/components/Testimonials";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Penny Juice Redesign</title>
        <meta name="description" content="Penny Juice Redesign" />
      </Head>

      <div className="mx-28 mt-24 relative h-full">
        <AboutUs />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
