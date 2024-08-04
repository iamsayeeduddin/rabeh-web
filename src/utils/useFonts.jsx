// Hook for All Fonts
import { Inter } from "next/font/google";
import { Urbanist, Space_Grotesk, Manrope } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const urbanist = Urbanist({ subsets: ["latin"] });
const spaceG = Space_Grotesk({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });

function useFonts() {
  return {
    inter,
    urbanist,
    spaceG,
    manrope,
  };
}

export default useFonts;
