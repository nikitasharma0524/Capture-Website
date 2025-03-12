import { useInView } from "react-intersection-observer";
import { useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export const useScroll = () => {
  const controls = useAnimationControls();
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return [ref, controls];
};
