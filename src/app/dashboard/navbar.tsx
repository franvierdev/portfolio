"use client";
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  let [open, setOpen] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    open === false ? setOpen(true) : setOpen(false);

    console.log(open);
  };
  return (
    <div className="  flex w-full items-center justify-start p-2 py-2 bg-slate-50/10 sm:bg-transparent sm:mx-auto sm:mt-4 font-mono text-sm">
      <button onClick={handleSubmit} className="sm:hidden h-8">
        {open === false ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
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
            stroke="currentColor"
            className="h-8  absolute z-10 top-1"
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
        className="bg-gray-500  absolute right-2 top-1 sm:-ms-60 sm:left-0 p-1 ease-in duration-300"
        href="/"
      >
        <Image
          src="/imgs/icono.png"
          alt="iconoFS"
          width={300 / 2}
          height={300 / 2}
          className="w-8 "
        />
      </Link>
      <div
        className={
          open
            ? `text-xl bg-slate-700/40 backdrop-blur-md animate-fade-right max-w-md flex flex-col  w-full min-h-screen items-center justify-around mx-auto `
            : `backdrop-blur-sm animate-reverse  hidden max-w-md shadow-lg shadow-slate-500 rounded-xl sm:flex  w-full items-center justify-around mx-auto`
        }
      >
        <Link
          className="hover:underline text-blue-400 hover:bg-slate-50/30 ease-in duration-300"
          href="/"
        >
          Sobre mi
        </Link>

        <a
          className="hover:underline  text-blue-400 hover:bg-slate-50/30 ease-in duration-300"
          href="#"
        >
          Projects
        </a>

        <a
          className="hover:underline text-blue-600 hover:text-blue-900   hover:bg-slate-50/60  ease-in duration-300"
          href="#"
        >
          Contáctame
        </a>
      </div>
    </div>
  );
}
