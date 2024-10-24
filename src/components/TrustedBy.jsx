"use client";

import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useFonts from "@/utils/useFonts";

const TrustedBy = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation will trigger only once
    threshold: 0.2, // Adjust the threshold as needed
  });
  const fonts = useFonts();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      className="py-[24px] px-[72px] flex flex-col justify-center items-center gap-5 md:flex-row md:justify-between md:gap-0"
    >
      <div className={`text-[#A3A3A3] text-center md:text-left text-lg md:text-[14px] font-medium mb-4 md:mb-0 ${fonts.inter.className}`}>
        Trusted by Venture capital
        <br /> investment funds
      </div>
      <div className="py-5 px-10 hover:shadow-2xl hover:scale-125 transition-all">
        <img src="/assets/logos/pif.jpg" alt="Logo 1" width={150} />
      </div>
      <div className="py-5 px-10 hover:shadow-2xl hover:scale-125 transition-all">
        <img src="/assets/logos/kaust.jpg" alt="Logo 2" width={150} />
      </div>
      <div className="py-5 px-10 hover:shadow-2xl hover:scale-125 transition-all">
        <img src="/assets/logos/vision.jpg" alt="Logo 3" width={150} />
      </div>
      <div className="py-5 px-10 hover:shadow-2xl hover:scale-125 transition-all">
        <img src="/assets/logos/raed.jpg" alt="Logo 4" width={150} />
      </div>
    </motion.section>
  );
};

export default TrustedBy;
