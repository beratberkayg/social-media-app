"use client";

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { menüModalFunc } from "@/redux/slices/modalSlice";
import MenüModal from "../modals/MenüModal";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { menüModal } = useAppSelector((state) => state.modal);

  return (
    <div className="w-full h-[65px] shadow-lg shadow-[#2a0e61]/50 bg-[#03001417] backdrop-blur-md px-10 flex justify-between items-center text-white ">
      <div className="text-3xl">
        <Link href="/">BBG</Link>
      </div>
      <div
        onClick={() => {
          dispatch(menüModalFunc());
        }}
        className="border border-[#7042f861] bg-[#0300145e] rounded-full text-white px-5 py-2 cursor-pointer flex justify-center items-center hover:bg-white  hover:text-black hover:transition-all "
      >
        <AiOutlineUser size={25} />
        <GiHamburgerMenu size={25} />
      </div>
      {menüModal && <MenüModal />}
    </div>
  );
};

export default Navbar;
