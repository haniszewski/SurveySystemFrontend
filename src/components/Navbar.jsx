"use client";
import { usePathname, useRouter } from "next/navigation";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NavTabs from "./atoms/user-bar/nav-tab";
import { useUser } from "@/hooks/useUser";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("black");
  const [textColor, setTextColor] = useState("white");
  const { isAuthenticated } = useUser();
  const pathname = usePathname();
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={`${
        pathname === "/" ? "bg-black " : "bg-blue-600"
      } fixed left-0 top-0 z-10 w-full duration-300 ease-in`}
    >
      <div className="m-auto flex max-w-[1240px] items-center justify-between p-4 text-white">
        <Link href="/">
          <h1
            style={{ color: `${textColor}` }}
            className={`text-4xl font-bold`}
          >
            Ankiety anonimowe
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          {/* <li className="p-4 ">
            <Link href="/">
              <span className="nav-text">Strona główna</span>
            </Link>
          </li> */}

          <li className="p-4">
            <span className="nav-text">
              <NavTabs />
            </span>
          </li>
          {/* <li className="p-4">
            <Link href="/contact">
              {" "}
              <span className="nav-text">Kontakt</span>
            </Link>
          </li> */}
        </ul>

        {/* Mobile Button */}
        <div
          onClick={handleNav}
          className="nav-text z-10 block cursor-pointer sm:hidden"
        >
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "absolute bottom-0 left-0 right-0 top-0 flex h-screen w-full items-center justify-center bg-black text-center duration-300 ease-in sm:hidden"
              : "absolute bottom-0 left-[-100%] right-0 top-0 flex h-screen w-full items-center justify-center bg-black text-center duration-300 ease-in sm:hidden"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Strona główna</Link>
            </li>
            {isAuthenticated ? (
              <>
                <li
                  onClick={handleNav}
                  className="p-4 text-4xl hover:text-gray-500"
                >
                  <Link href="/user-panel">Moje ankiety</Link>
                </li>
                <li
                  onClick={handleNav}
                  className="p-4 text-4xl hover:text-gray-500"
                >
                  <Link href="/auth/logout">Wyloguj się</Link>
                </li>
              </>
            ) : (
              <li
                onClick={handleNav}
                className="p-4 text-4xl hover:text-gray-500"
              >
                <Link href="/auth/login">Zaloguj się</Link>
              </li>
            )}
            {/* <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/contact">Kontakt</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
