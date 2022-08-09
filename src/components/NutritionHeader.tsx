import { FC } from "react";
import Image from "next/image";
import guyDrinkingImg from "../../public/images/guy-drinking.png";

type NutritionHeaderProps = {};

const NutritionHeader: FC<NutritionHeaderProps> = (props) => {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between items-center">
        <div className="w-1/2 space-y-4 pl-6">
          <h1 className="text-5xl text-orange-600 tracking-tight font-extrabold">Nutrition Information</h1>
          <p className="text-gray-500 text-lg">
            Penny Juice is 100% blended fruit juice concentrate. We only use the{" "}
            <span className="text-orange-600">freshest</span> fruit juices and{" "}
            <span className="text-orange-600">highest quality</span> ingredients to ensure the best product for your
            children. Our focus on real fresh fruit juice is what sets Penny Juice above the rest.
          </p>
        </div>
        <Image src={guyDrinkingImg} height={400} width={400} alt="juices" />
      </div>
    </div>
  );
};
export default NutritionHeader;
