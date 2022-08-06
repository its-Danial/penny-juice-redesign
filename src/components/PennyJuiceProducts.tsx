import Image from "next/image";
import { FC } from "react";
import blob1 from "../../public/svg/blob.svg";
import juices from "../../public/images/juices.png";

type PennyJuiceProductsProps = {};

const PennyJuiceProducts: FC<PennyJuiceProductsProps> = (props) => {
  return (
    <div className="w-full  flex relative">
      <div className="my-auto w-full mx-28 flex flex-row space-x-7">
        <div className="">
          <Image src={blob1} width={800} height={800} alt="blob" />
          <div className="absolute bottom-24 left-8">
            <Image src={juices} width={730} height={430} alt="blob" />
          </div>
        </div>
        <div className="basis-2/3 flex flex-col my-auto space-y-3">
          <h3 className="text-orange-500 text-4xl font-bold">
            Penny Juice Products Comply With All Requirements for CACFP, Subsidy, and Nutrition Set Forth by the FDA
          </h3>
          <p className="text-lg text-gray-500 font-medium">
            If you{"'"}re running a childcare center and want to serve healthy beverages to kids every day, order
            quality juice concentrates from Penny Juice of America.
          </p>
          <p className="text-lg text-gray-500 font-medium">
            Our system is fast and easy to use. Penny Juice greatly reduces storage and handling requirements. 1 gallon
            pre-measured mix pitchers available to assure cost control and flavor consistency
          </p>
          <button className="px-4 py-2 w-fit bg-green-600 text-eggshell hover:scale-105 hover:bg-green-700 font-semibold rounded-lg">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};
export default PennyJuiceProducts;
