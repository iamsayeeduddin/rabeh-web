// Hook for All Fonts
import { Inter } from "next/font/google";
import { Urbanist, Space_Grotesk, Manrope, Plus_Jakarta_Sans, Noto_Naskh_Arabic } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const urbanist = Urbanist({ subsets: ["latin"] });
const spaceG = Space_Grotesk({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const notoArabic = Noto_Naskh_Arabic({ subsets: ["arabic"] });

function useFonts() {
  return {
    inter,
    urbanist,
    spaceG,
    manrope,
    plusJakarta,
    notoArabic,
  };
}

export default useFonts;
