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
          <p className="text-gray-500 text-lg">
            Kids love penny juice concentrates because it’s available in various exciting flavors and colors.
            <p>Each case contains six half-gallon bottles of different flavors.</p>
          </p>
        </div>
      </div>
    </div>
  );
};
export default WhyKids;
