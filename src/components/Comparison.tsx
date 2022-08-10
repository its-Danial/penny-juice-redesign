import Image from "next/image";
import { FC } from "react";
import welchsJuiceImage from "../../public/images/juices/welchs-juice.png";
import pennyJuice from "../../public/images/juices/apple.png";
import ComparisonItem from "./ComparisonItem";

type ComparisonProps = {};

const Comparison: FC<ComparisonProps> = (props) => {
  return (
    <div className="mx-20">
      <div className="flex flex-col">
        <div className="grid grid-cols-3 mx-40">
          <div className="flex flex-col items-center justify-between">
            <Image src={welchsJuiceImage} height={700} width={700} alt="welchsJuiceImage" />
            <h3 className="text-2xl text-orange-600 font-bold mt-3">Welch{"'"}s 100% Apple Juice</h3>
          </div>
          <div className="flex justify-center items-center">
            <h1 className="text-9xl font-bold text-orange-600">VS</h1>
          </div>
          <div className="flex flex-col items-center justify-between">
            <div className="mt-12">
              <Image src={pennyJuice} height={280} width={120} alt="welchsJuiceImage" />
            </div>
            <h3 className="text-2xl text-orange-600 font-bold">Our 100% Apple Juice</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-10">
        <ComparisonItem title="Price" valueOne="$2.15" valueTwo="$1" />
        <ComparisonItem title="Sugar" valueOne="15.2g" valueTwo="0g" />
        <ComparisonItem title="Vitamin C" valueOne="12mg" valueTwo="16mg" />
        <ComparisonItem title="Artificial ingredients" valueOne="Yes" valueTwo="No" />
        <ComparisonItem title="Calories" valueOne="210" valueTwo="140" />
        <ComparisonItem title="Serving Size" valueOne="220mL" valueTwo="240ML" />
        <ComparisonItem title="Refrigeration" valueOne="Yes" valueTwo="No" />
      </div>
    </div>
  );
};
export default Comparison;
