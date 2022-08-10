import Image from "next/image";
import { FC } from "react";
import fruitSplash from "../../public/images/fruit-splash.png";
import blob1 from "../../public/svg/blob.svg";

import { motion } from "framer-motion";

import useScrollAnimation from "../hooks/useScrollAnimation";

type RainbowFlavourProps = {};

const RainbowFlavour: FC<RainbowFlavourProps> = (props) => {
  const animationProps = useScrollAnimation();

  return (
    <motion.div {...animationProps} className="w-full mt-40 flex relative">
      <div className="my-auto w-full mx-28 flex flex-row space-x-7">
        <div className="">
          <Image src={blob1} width={800} height={800} alt="blob" />
          <div className="absolute bottom-20 left-0">
            <Image src={fruitSplash} width={800} height={600} alt="blob" />
          </div>
        </div>
        <div className="basis-2/3 flex flex-col my-auto space-y-6">
          <h3 className="text-orange-500 text-5xl font-bold">Rainbows of exciting flavors!</h3>
          <p className="text-lg text-gray-500 font-medium">
            15 flavors available including 7 color free flavors. Each case contains 6 - ½ gallon bottles of your choice.
            We’ve designed them especially for childcare, daycare, preschool, basp and extended daycare. Get in touch
            with us today!
          </p>
          <button className="px-4 py-2 w-fit bg-green-600 text-eggshell hover:scale-105 hover:bg-green-700 font-semibold rounded-lg">
            Learn more
          </button>
        </div>
      </div>
    </motion.div>
  );
};
export default RainbowFlavour;
