// Hook for All Fonts
import { Inter } from "next/font/google";
import { Urbanist, Space_Grotesk, Manrope, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const urbanist = Urbanist({ subsets: ["latin"] });
const spaceG = Space_Grotesk({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

function useFonts() {
  return {
    inter,
    urbanist,
    spaceG,
    manrope,
    plusJakarta,
  };
}

export default useFonts;
