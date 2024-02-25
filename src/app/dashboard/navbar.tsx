"use client";
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  let [open, setOpen] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    open === false ? setOpen(true) : setOpen(false);
  };
  return (
    <div className="z-10 max-sm:relative flex items-center  justify-start p-2 sm:right-1/3 bg-slate-800/70 max-sm:pt-3 max-sm:backdrop-blur-sm sm:bg-transparent   sm:mt-4 text-sm">
      <button onClick={handleSubmit} className="sm:hidden h-8">
        {open === false ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="h-8 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="h-8 animate-fade-right absolute z-10 top-4 left-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>
      <Link
        className="bg-slate-800/70 backdrop-blur  rounded w-10 sm:w-10 sm:h-10 sm:ms-10 absolute right-2 top-1 sm:top-5 sm:left-0  ease-in duration-300 sm:shadow-lg sm:shadow-slate-500/70"
        href="/"
      >
        <Image
          src="/imgs/iconos/icono3.png"
          alt="iconoFS"
          width={300}
          height={300}
          priority={true}
          className=" sm:mx-auto sm:mt-[5px] rounded sm:w-7"
        />
      </Link>
      <div
        className={
          open
            ? `absolute max-sm:top-1 -ms-2 -mt-1 bg-slate-800 backdrop-blur-lg text-2xl rounded-lg animate-fade-right flex flex-col  w-full h-screen items-center justify-center  gap-5 mx-auto shadow-slate-500 text-white `
            : `text-xl backdrop-blur-lg  bg-slate-800/70 animate-reverse hidden max-w-md shadow-lg shadow-slate-500/70 rounded-lg sm:flex  w-full items-center justify-center mx-auto text-gray-300`
        }
      >
        <Link
          className="p-2  px-3 hover:underline hover:bg-slate-50/30 ease-in duration-300"
          href="/"
        >
          Home
        </Link>
        <Link
          className=" p-2 px-3 hover:underline hover:bg-slate-50/30 ease-in duration-300"
          href="/"
        >
          Sobre mi
        </Link>

        <a
          className="p-2 px-3 hover:underline  hover:bg-slate-50/30 ease-in duration-300"
          href="#p "
        >
          Projects
        </a>

        <a
          className="p-2 px-3 hover:underline text-blue-500 hover:text-blue-800   hover:bg-slate-50/60  ease-in duration-300"
          href="#"
        >
          Contáctame
        </a>
      </div>
    </div>
  );
}
