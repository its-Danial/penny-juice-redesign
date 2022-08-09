import type { NextPage } from "next";
import Head from "next/head";
import FactsHeader from "../src/components/FactsHeader";
import FlavourChoice from "../src/components/FlavourChoice";
import NutritionHeader from "../src/components/NutritionHeader";
import NutritionInfo from "../src/components/NutritionInfo";
import PreparationSteps from "../src/components/PreparationSteps";
import WhyKids from "../src/components/WhyKids";

const Nutrition: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Penny Juice | Nutrition</title>
        <meta name="description" content="Penny Juice | Nutrition" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-28 mt-24 relative h-full">
        <NutritionHeader />
        <NutritionInfo />
      </div>
      <h5 className="text-center font-bold text-4xl text-orange-600 tracking-tight  bg-orange-50/70 py-6">
        Additional Information.
      </h5>
      <div className="mx-28 mt-12 relative h-full">
        <WhyKids />
        <PreparationSteps />
        <FactsHeader />
      </div>
      <h5 className="text-center font-bold text-4xl text-orange-600 tracking-tight  bg-orange-50/70 py-6">
        A Wide Variety of Flavours.
      </h5>
      <div className="mx-14 mt-12 relative h-full">
        <FlavourChoice />
      </div>
    </div>
  );
};

export default Nutrition;
