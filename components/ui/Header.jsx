"use client";
import React from "react";
import { useState } from "react";
import { Button } from "./button";
import {
  CircleFadingPlus,
  LucideUserRound,
  Plus,
  UserRoundPlus,
} from "lucide-react";

function Header() {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
    { title: "Guides", path: "javascript:void(0)" },
    { title: "Partners", path: "javascript:void(0)" },
  ];
  return (
    <>
      <header>
        <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
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
            <li className="order-2 pb-5 md:pb-0 flex gap-1">
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
              {navigation.map((item, idx) => (
                <li
                  className="text-slate-100 md:text-gray-500 hover:text-violet-600 font-semibold"
                  key={idx}
                >
                  <a href={item.path}>{item.title}</a>
                </li>
              ))}
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
