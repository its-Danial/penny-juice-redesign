import { FC } from "react";
import Image from "next/image";
import motherKidJuice from "../../public/images/mother-give-juice.png";

type WhyKidsProps = {};

const WhyKids: FC<WhyKidsProps> = (props) => {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between items-center">
        <Image src={motherKidJuice} width={500} height={500} alt="juices" />
        <div className="w-[60%] space-y-4">
          <h1 className="text-5xl text-orange-600 tracking-tight font-extrabold">Designed for childcare settings.</h1>

          <ul className="text-gray-500 text-lg list-disc ml-4 space-y-4 w-[92%]">
            <li>
              Penny Juice is designed for childcare settings because, kids love penny juice concentrates as it’s
              available in various <span className="text-orange-600 font-semibold">exciting flavors and colors.</span>
            </li>
            <li>
              Each case contains <span className="text-orange-600 font-semibold">six half-gallon bottles</span> of
              different <span className="text-orange-600 font-semibold">flavors </span>
              at low cost.This means every childcare centers can afford to give their children the joy that Penny Juice
              offers.
            </li>
            <li>
              Penny Juice can be stored without refrigeration, which means a{" "}
              <span className="text-orange-600 font-semibold">lower electric bill</span> for the childcare center, and{" "}
              <span className="text-orange-600 font-semibold">more resourced for the children.</span>
            </li>
            <li>
              Penny Juices has no additional sugar which means its{" "}
              <span className="text-orange-600 font-semibold">healthy</span> and safe for all children.
            </li>
            <li>
              <span className="text-orange-600 font-semibold">Reduce cost per ounce,</span> storage and handling
              requirements.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default WhyKids;
