import { FC } from "react";

type CarouselItemProps = {
  color: string;
  image: JSX.Element;
  fruitName: string;
};

const CarouselItem: FC<CarouselItemProps> = (props) => {
  const bgColor = "bg-orange-50/50";
  console.log(bgColor);

  return (
    <div className={`flex flex-row w-full justify-around`}>
      {props.image}
      <div className="py-40">
        <h1 className="text-6xl text-orange-600 font-extrabold">100% pure {props.fruitName}</h1>
        <p className="text-base">No sugar or additional preservative.</p>
      </div>
    </div>
  );
};
export default CarouselItem;
