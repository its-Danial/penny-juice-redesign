import { FC } from "react";
import Image from "next/image";
import guyDrinkingImg from "../../public/images/guy-drinking.png";

type FactsHeaderProps = {};

const FactsHeader: FC<FactsHeaderProps> = (props) => {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between items-center">
        <Image src={guyDrinkingImg} height={400} width={400} alt="juices" />
        <div className="w-1/2 space-y-4">
          <h1 className="text-5xl text-orange-600 tracking-tight font-extrabold">Standards.</h1>
          <p className="text-gray-500 text-lg">
            Our <span className="text-orange-600">speedy delivery</span> will see that you receive our product at its
            freshest, however, Penny Juice can be <span className="text-orange-600">stored without refrigeration.</span>{" "}
            Penny Juice products comply with all requirements for subsidy and nutrition set forth by the FDA.
          </p>
        </div>
      </div>
    </div>
  );
};
export default FactsHeader;
