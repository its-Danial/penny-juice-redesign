import { FC } from "react";
import Wave from "react-wavify";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaCcVisa, FaCcMastercard, FaCcDiscover, FaCcPaypal } from "react-icons/fa";

type ContactUsProps = {};

const ContactUs: FC<ContactUsProps> = (props) => {
  return (
    <div className="w-full h-full m-0 p-0 relative">
      <Wave
        className="h-[50vh] m-0 p-0 z-10"
        // #F8F0E3
        // @ts-ignore
        fill="#047857"
        paused={false}
        options={{
          height: 20,
          amplitude: 45,
        }}
      />
      <div
        className="absolute w-full h-full flex top-[50%] left-[50%] overflow-hidden bg-transparent"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="my-auto w-full mx-28 flex flex-row  items-center">
          <div className="w-1/3">
            <div className="flex flex-col space-y-6">
              <AiFillTwitterCircle
                size={70}
                className="text-gray-300 hover:scale-110 cursor-pointer hover:text-gray-400"
              />

              <BsFacebook size={60} className="text-gray-300 hover:scale-x-110 cursor-pointer hover:text-gray-400" />
            </div>
          </div>
          <div className="w-1/3 flex flex-col">
            <h5 className="text-gray-100 text-xl font-bold underline underline-offset-4 mb-3">Contact Us</h5>
            <p className="w-[70%] text-base text-gray-200">Penny Juice of America 915 40th Ave Bettendorf, IA 52722</p>
            <p className="w-[70%] text-base text-gray-200">pennyjuice@hotmail.com</p>
            <p className="w-[70%] text-base text-gray-200">Phone: 563-386-1999</p>
            <p className="w-[70%] text-base text-gray-200">Fax: 563-386-6200</p>
          </div>
          <div className="w-1/3 flex flex-col">
            <h5 className="text-gray-100 text-xl font-bold underline underline-offset-4 mb-3">Payment Methods</h5>
            <div className="flex flex-row space-x-2">
              <FaCcVisa size={60} className="text-gray-300 hover:scale-110 cursor-pointer hover:text-gray-400" />
              <FaCcMastercard size={60} className="text-gray-300 hover:scale-110 cursor-pointer hover:text-gray-400" />
              <FaCcDiscover size={60} className="text-gray-300 hover:scale-110 cursor-pointer hover:text-gray-400" />
              <FaCcPaypal size={60} className="text-gray-300 hover:scale-110 cursor-pointer hover:text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
