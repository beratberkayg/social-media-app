"use client";

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";

import { useState } from "react";

const Navbar = () => {
  const [openMenü, setOpenMenü] = useState(false);

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
          setOpenMenü(!openMenü);
        }}
        className="border border-[#7042f861] bg-[#0300145e] rounded-full text-white px-5 py-2 cursor-pointer flex justify-center items-center hover:bg-white  hover:text-black hover:transition-all "
      >
        <AiOutlineUser size={25} />
        <GiHamburgerMenu size={25} />
      </div>
      {openMenü && (
        <div
          className="absolute top-20 right-5
        w-[200px] h-[150px] border border-[#7042f861] bg-[#0300145e] rounded-lg text-white text-2xl flex flex-col items-center justify-center gap-5"
        >
          <div
            className="border border-[#7042f861] bg-[#0300145e] rounded-full py-2 px-5 cursor-pointer hover:bg-[#7042f861]
          hover:bg-opacity-50 hover:transition-all"
          >
            Giriş Yap
          </div>
          <div className="border border-[#7042f861] bg-[#0300145e] rounded-full py-2 px-7 cursor-pointer hover:bg-[#7042f861] hover:bg-opacity-50 hover:transition-all">
            Kayıt Ol
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
