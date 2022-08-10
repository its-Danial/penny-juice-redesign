import { FC } from "react";

type ComparisonItemProps = {
  title: string;
  valueOne: string;
  valueTwo: string;
};

const ComparisonItem: FC<ComparisonItemProps> = (props) => {
  return (
    <div className="flex flex-row items-center justify-center border-b border-orange-100">
      <div className="bg-orange-100/50 w-56 h-32 rounded-l-md flex justify-center items-center ">
        <h1 className="text-2xl font-bold text-center text-orange-600">{props.title}</h1>
      </div>
      <div className="w-full flex justify-between text-center mr-36">
        <h1 className="w-1/3 text-3xl text-gray-600 font-bold">{props.valueOne}</h1>

        <h1 className="w-1/3 text-3xl text-green-600 font-bold">{props.valueTwo}</h1>
      </div>
    </div>
  );
};
export default ComparisonItem;
