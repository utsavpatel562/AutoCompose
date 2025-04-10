"use client";
import React from "react";
import { useState } from "react";
import { Button } from "./button";
import {
  CircleFadingPlus,
  FileCode2,
  FileUser,
  HomeIcon,
  Layers,
  LucideUserRound,
  Mail,
  Plus,
  UserRoundPlus,
} from "lucide-react";
import Link from "next/link";

function Header() {
  const [state, setState] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b-2">
        <nav className="items-center pt-5 pb-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
          <div className="flex justify-between">
            <a href="javascript:void(0)">
              <img src="/logo.png" width={180} height={180} alt="AutoCompose" />
            </a>
            <button
              className="text-gray-500 outline-none md:hidden"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <ul
            className={`flex-1 justify-between mt-12 md:flex md:mt-0 ${
              state ? "" : "hidden"
            }`}
          >
            <li className="order-2 pb-5 md:pb-0 flex gap-2">
              <Button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 p-5 rounded-sm cursor-pointer">
                Sign In
                <LucideUserRound />
              </Button>
              <Button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 p-5 rounded-sm cursor-pointer">
                Register Now
                <UserRoundPlus />
              </Button>
            </li>
            <div className="order-1 bg-slate-900 p-3 md:p-0 rounded-md md:bg-transparent flex-1 justify-center items-center space-y-5 md:flex md:space-x-6 md:space-y-0">
              <Link href={"/"}>
                <li className="flex items-center gap-2 hover:bg-violet-50 md:p-2 rounded-full md:pr-5 md:pl-5 text-slate-100 md:text-gray-500 hover:text-violet-600 font-semibold">
                  <HomeIcon className="w-4 h-4" />
                  Home
                </li>
              </Link>
              <Link href={"/#TopFeatures"}>
                <li className="flex items-center gap-2 hover:bg-violet-50 md:p-2 rounded-full md:pr-5 md:pl-5 text-slate-100 md:text-gray-500 hover:text-violet-600 font-semibold">
                  <Layers className="w-4 h-4" />
                  Features
                </li>
              </Link>
              <Link href={"/project_pages"}>
                <li className="flex items-center gap-2 hover:bg-violet-50 md:p-2 rounded-full md:pr-5 md:pl-5 text-slate-100 md:text-gray-500 hover:text-violet-600 font-semibold">
                  <FileCode2 className="w-4 h-4" />
                  Docs
                </li>
              </Link>
              <Link href={"/#Contact"}>
                <li className="flex items-center gap-2 hover:bg-violet-50 md:p-2 rounded-full md:pr-5 md:pl-5 text-slate-100 md:text-gray-500 hover:text-violet-600 font-semibold">
                  <Mail className="w-4 h-4" />
                  Contact
                </li>
              </Link>
              <Link href={"/about_me"}>
                <li className="flex items-center gap-2 hover:bg-violet-50 md:p-2 rounded-full md:pr-5 md:pl-5 text-slate-100 md:text-gray-500 hover:text-violet-600 font-semibold">
                  <FileUser className="w-4 h-4" />
                  About
                </li>
              </Link>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
