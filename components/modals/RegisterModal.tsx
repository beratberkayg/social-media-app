"use client";
import { useAppDispatch } from "@/redux/hooks";
import { loginModalFunc, registerModalFunc } from "@/redux/slices/modalSlice";
import { GrClose } from "react-icons/gr";
const RegisterModal = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="bg-black bg-opacity-70 flex items-center justify-center w-full h-full absolute top-0 left-0 text-black">
      <div className=" bg-slate-400 w-2/3 h-2/3 rounded-md flex flex-col gap-10">
        <div className="mt-10 text-3xl border-b border-black flex justify-between mx-3 pb-2">
          <p>Kayıt Ol</p>
          <GrClose
            cursor={"pointer"}
            onClick={() => dispatch(registerModalFunc())}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
