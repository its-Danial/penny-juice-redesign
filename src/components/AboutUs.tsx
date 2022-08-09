import Image from "next/image";
import { FC } from "react";
import kidJuicesImg from "../../public/images/kid-juices.png";

type AboutUsProps = {};

const AboutUs: FC<AboutUsProps> = (props) => {
  return (
    <div className="mx-28 mt-36">
      <div className="flex flex-row justify-between items-center">
        <div className="w-1/2 space-y-4 pl-6">
          <h1 className="text-5xl text-orange-600 tracking-tight font-extrabold">About us</h1>
          <p className="text-gray-500 text-lg">
            We{"'"}re a <span className="text-orange-600">family-owned business</span> that was founded in 2001. We have
            over <span className="text-orange-600">40 years</span> of experience in the beverage industry.
          </p>
          <p className="text-gray-500 text-lg">
            Penny Juice was formulated specifically for children, and for use in childcare centres. Our juice
            concentrate comes in a <span className="text-orange-600">wide variety of flavours</span> that all mix easily
            with water and can be stored without refrigeration.
          </p>
          <p className="text-gray-500 text-lg">
            We are proud to say that we have distribution centres in <span className="text-orange-600">48 states</span>{" "}
            with free delivery across the country for <span className="text-orange-600">your convenience.</span>
          </p>
        </div>
        <Image src={kidJuicesImg} alt="juices" />
      </div>
    </div>
  );
};
export default AboutUs;
