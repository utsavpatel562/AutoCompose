import Image from "next/image";
import React from "react";
import { Button } from "./button";
import { Code } from "lucide-react";
import { MdSaveAlt, MdOpenInNew } from "react-icons/md";
import { IoDesktopOutline } from "react-icons/io5";
import { FaMobileScreen } from "react-icons/fa6";
function EditorHeader() {
  return (
    <>
      <div className="p-4 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        {/* Logo hidden on mobile, visible on sm and up */}
        <Image
          src={"/logo.png"}
          width={180}
          height={180}
          alt="logo"
          className="hidden sm:block w-40 h-auto"
        />
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="text-violet-600 bg-violet-50 hover:bg-violet-100 hover:text-violet-500 cursor-pointer"
          >
            <IoDesktopOutline />
            Desktop
          </Button>
          <Button
            variant="ghost"
            className="text-violet-600 bg-violet-50 hover:bg-violet-100 hover:text-violet-500 cursor-pointer"
          >
            <FaMobileScreen />
            Mobile
          </Button>
        </div>
        <div className="flex items-center flex-wrap gap-2 sm:justify-end">
          <Button
            variant="ghost"
            className="cursor-pointer bg-violet-100 text-violet-600 hover:bg-violet-50"
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
