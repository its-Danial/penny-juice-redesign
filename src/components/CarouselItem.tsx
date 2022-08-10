import { FC } from "react";

type CarouselItemProps = {
  image: JSX.Element;

  title: string;
  text: string;
};

const CarouselItem: FC<CarouselItemProps> = (props) => {
  const bgColor = "bg-orange-50/50";
  console.log(bgColor);

  return (
    <div className={`flex flex-row w-full justify-around`}>
      {props.image}
      <div className="py-40 space-y-8">
        <h1 className="text-6xl max-w-xl text-orange-600 font-extrabold">{props.title}</h1>
        <p className="text-lg text-gray-500 max-w-lg">{props.text}</p>
      </div>
    </div>
  );
};
export default CarouselItem;
