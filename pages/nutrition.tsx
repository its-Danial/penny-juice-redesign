import type { NextPage } from "next";
import Head from "next/head";
import NutritionHeader from "../src/components/NutritionHeader";
import NutritionInfo from "../src/components/NutritionInfo";
import NutritionLabel from "../src/components/NutritionLabel";

const Nutrition: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Order Now</title>
        <meta name="description" content="Penny Juice Order now" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-28 mt-24 relative h-full">
        <NutritionHeader />
        <NutritionInfo />
      </div>
    </div>
  );
};

export default Nutrition;
