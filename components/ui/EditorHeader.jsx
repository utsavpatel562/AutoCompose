"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./button";
import { Code } from "lucide-react";
import { MdSaveAlt, MdOpenInNew } from "react-icons/md";
import { IoDesktopOutline } from "react-icons/io5";
import { FaMobileScreen } from "react-icons/fa6";
import { useScreenSize } from "@/app/provider";
import Link from "next/link";
function EditorHeader() {
  const { screenSize, setScreenSize } = useScreenSize();
  return (
    <>
      <div className="p-4 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        {/* Logo hidden on mobile, visible on sm and up */}
        <Link href="/">
          <Image
            src={"/logo.png"}
            width={180}
            height={180}
            alt="logo"
            className="hidden sm:block w-40 h-auto"
          />
        </Link>
        <div className="flex items-center gap-2 justify-center m-auto">
          <Button
            variant="ghost"
            onClick={() => setScreenSize("desktop")}
            className={`${screenSize == "desktop" && "bg-violet-50 text-violet-600"} cursor-pointer`}
          >
            <IoDesktopOutline />
            Desktop
          </Button>
          <Button
            variant="ghost"
            onClick={() => setScreenSize("mobile")}
            className={`${screenSize == "mobile" && "bg-violet-50 text-violet-600"} cursor-pointer`}
          >
            <FaMobileScreen />
            Mobile
          </Button>
        </div>
        <div className="flex items-center m-auto md:m-0 flex-wrap gap-2 sm:justify-end">
          <Button
            variant="ghost"
            className="cursor-pointer bg-violet-50 text-violet-500 hover:bg-violet-100 hover:text-violet-500"
          >
            <Code />
          </Button>
          <Button
            className="flex items-center border border-slate-300 rounded-sm cursor-pointer gap-1"
            variant="outline"
          >
            Send Test Email
            <MdOpenInNew />
          </Button>
          <Button className="flex items-center bg-violet-600 rounded-sm cursor-pointer hover:bg-violet-700 gap-1">
            Save Template
            <MdSaveAlt />
          </Button>
        </div>
      </div>
    </>
  );
}

export default EditorHeader;
