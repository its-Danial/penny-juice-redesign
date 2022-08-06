import { FC } from "react";
import Image from "next/image";
import blob2 from "../../public/svg/blob-2.svg";
import girlImg from "../../public/images/girl-drinking.png";

type HealthyJuiceProps = {};

const HealthyJuice: FC<HealthyJuiceProps> = (props) => {
  return (
    <div className="w-full  flex relative">
      <div className="my-auto w-full mx-28 flex flex-row space-x-7">
        <div className="basis-2/3 flex flex-col my-auto space-y-6">
          <h3 className="text-orange-500 text-5xl font-bold">Healthy Juice Concentrates for All Kids to Enjoy</h3>
          <p className="text-lg text-gray-500 font-medium">
            We provide a variety of flavors that all kids can enjoy! All the juice concentrates that we sell are
            compliant with the USDA and FDA guidelines. You don{"'"}t need to refrigerate the concentrates before or
            after opening them.
          </p>
          <div className="flex justify-end">
            <button className="px-4 py-2 w-fit bg-green-600 text-eggshell hover:scale-105 hover:bg-green-700 font-semibold rounded-lg">
              Learn more
            </button>
          </div>
        </div>
        <div className="">
          <Image src={blob2} width={800} height={800} alt="blob" />
          <div className="absolute bottom-20 right-36">
            <Image src={girlImg} width={500} height={400} alt="blob" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HealthyJuice;
