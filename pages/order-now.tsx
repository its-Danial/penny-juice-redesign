import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SearchBar from "../src/components/SearchBar";

import apple from "../public/images/juices/apple.png";
import grape from "../public/images/juices/grape.png";
import orange from "../public/images/juices/orange.png";
import peach from "../public/images/juices/peach.png";
import strawberry from "../public/images/juices/strawberry.png";
import watermelon from "../public/images/juices/watermelon.png";
import OrderItem from "../src/components/OrderItem";

const OrderNow: NextPage = () => {
  const images = [
    { name: "Apple", price: 2, image: apple },
    { name: "Grape", price: 2, image: grape },
    { name: "Orange", price: 2, image: orange },
    { name: "Peach", price: 2, image: peach },
    { name: "Strawberry", price: 2, image: strawberry },
    { name: "Watermelon", price: 2, image: watermelon },
  ];

  return (
    <div>
      <Head>
        <title>Penny Juice | Order Now</title>
        <meta name="description" content="Penny Juice Order now" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mt-24 relative h-full">
        <SearchBar />
      </div>
      <div className="mx-28 mt-12">
        <p className="text-gray-500 text-lg tracking-tight">
          Customers prefer our products for their benefits, features, variety, service, and competitive pricing.
        </p>
        <div className="my-12 grid grid-cols-3 gap-6">
          {images.map((item, index) => (
            <OrderItem
              name={item.name}
              price={item.price}
              key={index}
              image={<Image src={item.image} width={200} height={400} alt={item.name} />}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
