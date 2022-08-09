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

      <div className=" mt-24 relative h-full">
        <AboutUs />
        <div className="my-12 bg-yellow-50/50 h-40 flex flex-row justify-around items-center">
          <div className="flex flex-col text-center space-y-1">
            <h2 className="text-5xl font-extrabold text-orange-600">48</h2>
            <p className="font-medium text-base text-orange-500">States</p>
          </div>
          <div className="flex flex-col text-center space-y-1">
            <h2 className="text-5xl font-extrabold text-orange-600">200+</h2>
            <p className="font-medium text-base text-orange-500">Childcare centers</p>
          </div>
          <div className="flex flex-col text-center space-y-1">
            <h2 className="text-5xl font-extrabold text-orange-600">30,000+</h2>
            <p className="font-medium text-base text-orange-500">Purchases</p>
          </div>
          <div className="flex flex-col text-center space-y-1">
            <h2 className="text-5xl font-extrabold text-orange-600">16</h2>
            <p className="font-medium text-base text-orange-500">Flavours</p>
          </div>
        </div>
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
