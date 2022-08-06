import type { NextPage } from "next";
import Head from "next/head";

const OrderNow: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Order Now</title>
        <meta name="description" content="Penny Juice Order now" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline">Order Now</h1>
    </div>
  );
};

export default OrderNow;
