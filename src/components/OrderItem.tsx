import { FC, useState } from "react";

type OrderItemProps = {
  image: JSX.Element;
  name: string;
  price: number;
};

const OrderItem: FC<OrderItemProps> = (props) => {
  const [orderItems, setOrderItems] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mx-auto">{props.image}</div>
      <p className="text-xl text-orange-600 font-bold">{props.name} Juice</p>
      <p className="text-xl text-green-600 font-bold">${props.price}</p>
      <div className="flex justify-center space-x-3 items-center">
        <button
          onClick={() => setOrderItems((prevNumber) => prevNumber + 1)}
          className="py-1  hover:bg-orange-50 px-3 border border-orange-600 rounded-lg text-xl text-orange-600"
        >
          +
        </button>
        <h6 className="text-3xl font-bold text-gray-500">{orderItems}</h6>
        <button
          onClick={() => setOrderItems((prevNumber) => prevNumber - 1)}
          className="py-1 flex hover:bg-orange-50 px-3 border border-orange-600 rounded-lg text-xl text-orange-600"
        >
          -
        </button>
      </div>
      <button className="w-1/3 hover:bg-orange-50 mt-4 text-base px-2 py-2 text-orange-600 border border-orange-600 rounded-lg">
        Add to Cart
      </button>
    </div>
  );
};
export default OrderItem;
