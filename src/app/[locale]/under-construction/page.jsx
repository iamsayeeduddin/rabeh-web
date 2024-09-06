"use client";
import useFonts from "@/utils/useFonts";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { MdBuild } from "react-icons/md";

const Page = ({ params: { locale } }) => {
  const fonts = useFonts();
  const router = useRouter();
  const path = usePathname();
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [path]);

  return (
    <div className={"bg-secondary py-56 flex flex-col text-white gap-8 justify-center items-center text-3xl " + fonts.spaceG.className}>
      {/* <MdBuild className="text-5xl animate-spin" /> */}
      {!user?._id ? (
        <>
          <p className={"text-center " + fonts.notoArabic.className}>فضلا التسجيل لطلب صلاحية وصول الى هذه الصفحة</p>
          <p className="text-center">Please register to get access to this page.</p>
          <button className="bg-primary text-white text-base px-6 py-2 rounded-3xl" onClick={() => router.push("/sign-up")}>
            Register
          </button>
        </>
      ) : (
        <>
          <p className={"text-center " + fonts.notoArabic.className}>فضلا الانتظار لحين موافقه الادمن على تنشيط حسابكم</p>
          <p className="text-center">Thank you for your registration. Please wait until admin activates your account.</p>
        </>
      )}
    </div>
  );
};

export default Page;
