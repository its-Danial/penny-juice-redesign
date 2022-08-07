import { useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

const useScrollAnimation = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const boxVariant = {
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0, x: 100 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return { ref: ref, variants: boxVariant, initial: "hidden", animate: control };
};
export default useScrollAnimation;
