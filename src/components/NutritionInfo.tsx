import { FC } from "react";
import NutritionLabel from "./NutritionLabel";

type NutritionInfoProps = {};

const NutritionInfo: FC<NutritionInfoProps> = (props) => {
  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-col w-[60%] justify-between bg-yellow-50 rounded-l-md overflow-hidden">
        <div className="space-y-3 p-4">
          <h2 className="text-4xl font-extrabold leading-none text-orange-600">Ingredients</h2>
          <p className="text-lg leading-none text-gray-800">
            Premium Quality 100% Fruit Juice Concentrate.{" "}
            <span className="text-xl font-bold text-orange-600">No Sugar Added.</span> Non Refrigerated
          </p>
          <div className="w-2/3 text-gray-600">
            <p className="text-base mb-3">Additional Information:</p>
            <ul className="grid grid-cols-2 gap-y-2 text-sm">
              <li>WIC Approved</li>
              <li>Non GMO</li>
              <li>Non GMO</li>
              <li>Made in USA</li>
              <li>Gluten Free</li>
              <li>No High Fructose Corn Syrup</li>
              <li>No Artificial Colors</li>
              <li>No Artificial Flavors</li>
              <li>No Artificial Sweeteners</li>
            </ul>
          </div>
        </div>

        {/* <img
          src="https://le-cdn.hibuwebsites.com/767557674d6e4362acfa088c81c84a89/dms3rep/multi/opt/Internal-C2-640w.jpg"
          alt=""
        /> */}
        <div className="h-full w-full flex items-end">
          <img
            src="https://le-cdn.hibuwebsites.com/767557674d6e4362acfa088c81c84a89/dms3rep/multi/opt/Internal-C1-640w.jpg"
            alt=""
            className="h-[90%] w-full"
          />
        </div>
      </div>
      <div className="w-[40%] bg-orange-200 flex justify-center rounded-r-md">
        <NutritionLabel />
      </div>
    </div>
  );
};
export default NutritionInfo;
