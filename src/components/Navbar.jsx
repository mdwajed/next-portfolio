"use client";
// import { Menu } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/contact", title: "Contact" },
  { url: "/portfolio", title: "Portfolio" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-24 flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 text-lg">
      {/* LINK */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title}></NavLink>
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:justify-center xl:w-1/3">
        <Link
          href="/"
          className="text-base font-semibold bg-black py-1 px-2 rounded-md flex justify-center items-center"
        >
          <span className="text-white mr-1">Wajed</span>
          <span className="bg-white text-black py-1 px-1 w-12 h-8 rounded  ">
            .com
          </span>
        </Link>
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex justify-end gap-4 w-1/3">
        <Image src="/github.png" alt="" width={24} height={24} />
        <Image src="/instagram.png" alt="" width={24} height={24} />
        <Image src="/dribbble.png" alt="" width={24} height={24} />
        <Image src="/facebook.png" alt="" width={24} height={24} />
        <Image src="/pinterest.png" alt="" width={24} height={24} />
        <Image src="/linkedin.png" alt="" width={24} height={24} />
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
      
          <button
            className="w-10 h-7 flex flex-col justify-between relative z-50"
        onClick={() => setOpen((prev) => !prev)} 
        
          >
            <div className="w-10 h-1 bg-red-900 rounded"></div>
            <div className="w-10 h-1 bg-red-900 rounded"></div>
            <div className="w-10 h-1 bg-red-900 rounded"></div>
          </button>
    
        {/* MENU ITEMS*/}
        {open && (
          <div className="absolute left-0 top-0  w-screen h-screen flex flex-col justify-center items-center text-4xl gap-8 bg-black text-white">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
