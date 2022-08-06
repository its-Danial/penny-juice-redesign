import Image from "next/image";
import { FC } from "react";
import Wave from "react-wavify";
import drink from "../../public/svg/Lemonade_Isometric.svg";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { BsCupStraw } from "react-icons/Bs";
type MainIntroProps = {};

const MainIntro: FC<MainIntroProps> = (props) => {
  return (
    <div className="relative h-screen">
      <Wave
        className="h-[85vh] m-0 rotate-180 z-10"
        // #F8F0E3
        // @ts-ignore
        fill="#fde047"
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
        <div className="my-auto w-full mx-28 flex flex-row justify-between items-center">
          <div className="basis-[45%] flex flex-col">
            <h1 className="text-5xl tracking-wider text-eggshell font-extrabold">
              100% blended fruit juice concentrate specifically designed for childcare centers.
            </h1>
            <div className="flex flex-row space-x-4 mt-6">
              <button className="px-4 py-2 bg-green-600 text-eggshell hover:scale-105 hover:bg-green-700 rounded-lg">
                <div className="flex flex-row items-center space-x-2">
                  <FaGooglePlay size={30} />
                  <div className="flex flex-col items-start">
                    <p className="text-xs text-gray-100">Get it on</p>
                    <p className="font-semibold text-base">Google Play</p>
                  </div>
                </div>
              </button>
              <button className="px-4 py-2 bg-green-600 text-eggshell hover:scale-105 hover:bg-green-700   rounded-lg">
                <div className="flex flex-row items-center space-x-2">
                  <FaApple size={30} />
                  <div className="flex flex-col items-start">
                    <p className="text-xs text-gray-100">Download on the</p>
                    <p className="font-semibold text-base">Apple Store</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="group relative cursor-pointer">
            <Image className="basis-1/2 group-hover:opacity-50" src={drink} width={550} height={550} alt="drink" />
            <div className="invisible group-hover:visible absolute top-[45%] left-[40%]">
              <button className="px-4 py-2 bg-green-600 text-eggshell hover:scale-105 hover:bg-green-700   rounded-lg">
                <div className="flex flex-row items-center space-x-2">
                  <BsCupStraw size={30} />

                  <p className="font-semibold text-base">Order Now</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainIntro;
