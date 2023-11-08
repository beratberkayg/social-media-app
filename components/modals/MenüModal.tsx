"use client";

import { useAppDispatch } from "@/redux/hooks";
import { loginModalFunc, registerModalFunc } from "@/redux/slices/modalSlice";

const MenüModal = () => {
  const dispatch = useAppDispatch();
  return (
    <div
      className="absolute top-20 right-5
        w-[200px] h-[150px] border border-[#7042f861] bg-[#0300145e] rounded-lg text-white text-2xl flex flex-col items-center justify-center gap-5 z-10"
    >
      <div
        onClick={() => {
          dispatch(loginModalFunc());
        }}
        className="border border-[#7042f861] bg-[#0300145e] rounded-full py-2 px-5 cursor-pointer hover:bg-[#7042f861]
          hover:bg-opacity-50 hover:transition-all"
      >
        Giriş Yap
      </div>
      <div
        onClick={() => {
          dispatch(registerModalFunc());
        }}
        className="border border-[#7042f861] bg-[#0300145e] rounded-full py-2 px-7 cursor-pointer hover:bg-[#7042f861] hover:bg-opacity-50 hover:transition-all"
      >
        Kayıt Ol
      </div>
    </div>
  );
};

export default MenüModal;
