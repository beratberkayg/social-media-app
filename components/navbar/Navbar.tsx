"use client";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toogleMenüFunc } from "@/redux/slices/menüSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();

  return (
    <div
      className="text-white 
  w-full h-[65px] fixed top-10 shadow-lg shadow-[#2a0e61]/50 bg-[#03001417] backdrop-blur-md px-10 flex justify-between items-center z-[1]"
    >
      <div className="text-3xl">
        <Link href="/">BBG</Link>
      </div>
      <div
        onClick={() => {
          dispatch(toogleMenüFunc());
        }}
        className="border border-[#7042f861] bg-[#0300145e] rounded-full text-white px-5 py-2 cursor-pointer flex justify-center items-center "
      >
        <AiOutlineUser size={25} />
        <GiHamburgerMenu size={25} />
      </div>
    </div>
  );
};

export default Navbar;
