import useFonts from "@/utils/useFonts";
import { MdBuild } from "react-icons/md";

const Page = () => {
  const fonts = useFonts();
  return (
    <div className={"bg-secondary py-72 flex flex-col text-white gap-8 justify-center items-center text-3xl " + fonts.spaceG.className}>
      <MdBuild className="text-5xl animate-spin" />
      <p className={"text-center " + fonts.notoArabic.className}>
        نعتذر عن الإزعاج. <br /> !الصفحة قيد الإنشاء وسيتم نشرها قريبًا
      </p>
      <p className="text-center">
        Apologies for the inconvenience. <br /> The page is under construction and will be live soon!
      </p>
    </div>
  );
};

export default Page;
