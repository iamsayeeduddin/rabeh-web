import { PiWarningOctagonDuotone } from "react-icons/pi";

const NotFound = () => {
  return (
    <div className={"bg-secondary py-48 flex flex-col text-white gap-8 justify-center items-center text-3xl "}>
      <PiWarningOctagonDuotone className="text-9xl" />

      <p className={"text-center "}>عذرًا، لم نتمكن من العثور على الصفحة التي كنت تبحث عنها.</p>
      <p className="text-center">Sorry, we couldn’t find the page you were looking for.</p>
    </div>
  );
};

export default NotFound;
