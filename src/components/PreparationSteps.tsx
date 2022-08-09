import { FC } from "react";
import Image from "next/image";
import prepareJuiceImage from "../../public/images/prepare-juice.png";

type PreparationStepsProps = {};

const PreparationSteps: FC<PreparationStepsProps> = (props) => {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between items-center">
        <div className="w-1/2 space-y-4">
          <h1 className="text-5xl text-orange-600 tracking-tight font-extrabold">How to make?</h1>
          <p className="text-gray-500 text-lg">
            Prepare all flavors using{" "}
            <span className="text-orange-600">seven parts water and one part juice concentrate.</span> You don’t need to
            refrigerate the concentrate before or after opening it.
          </p>
        </div>
        <Image src={prepareJuiceImage} alt="juices" />
      </div>
    </div>
  );
};
export default PreparationSteps;
