import useFonts from "@/utils/useFonts";
import Image from "next/image";

const TrustedBy = () => {
  const fonts = useFonts();
  return (
    <section className="py-[24px] px-[72px] flex justify-between items-center gap-0">
      <div className={"text-[#A3A3A3] text-[14px] font-medium " + fonts.inter.className}>
        Trusted by Venture capital
        <br /> investment funds
      </div>
      <div>
        <img src="/image2451.png" alt="Logo 1" width={125.37} height={100} />
      </div>
      <div>
        <img src="/image2448.png" alt="Logo 2" width={107.92} height={100} />
      </div>
      <div>
        <img src="/image2449.png" alt="Logo 3" width={131.59} height={100} />
      </div>
      <div>
        <img src="/image2450.png" alt="Logo 4" width={137.11} height={100} />
      </div>
    </section>
  );
};

export default TrustedBy;
