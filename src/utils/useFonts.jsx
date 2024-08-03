// Hook for All Fonts
import { Inter } from "next/font/google";
import { Urbanist, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const urbanist = Urbanist({ subsets: ["latin"] });
const spaceG = Space_Grotesk({ subsets: ["latin"] });

function useFonts() {
  return {
    inter,
    urbanist,
    spaceG,
  };
}

export default useFonts;
