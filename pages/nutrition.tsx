import type { NextPage } from "next";
import Head from "next/head";
import FactsHeader from "../src/components/FactsHeader";
import NutritionHeader from "../src/components/NutritionHeader";
import NutritionInfo from "../src/components/NutritionInfo";
import NutritionLabel from "../src/components/NutritionLabel";
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
      <h5 className="text-center font-bold text-4xl text-orange-600 tracking-tight  bg-orange-50/50 py-6">
        Additional Information.
      </h5>
      <div className="mx-28 mt-16 relative h-full">
        <FactsHeader />
        <PreparationSteps />
      </div>
      <h5 className="text-center font-bold text-2xl text-gray-400 tracking-tight mx-0 bg-orange-50/50 py-6">
        <span className="text-orange-600">Reduce cost per ounce,</span> storage and handling requirements.
      </h5>
      <div className="mx-28 mt-16 relative h-full">
        <WhyKids />
      </div>
    </div>
  );
};

export default Nutrition;
