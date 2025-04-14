import Image from "next/image";
import React from "react";
import { Button } from "./button";
import { Code } from "lucide-react";
import { MdSaveAlt, MdOpenInNew } from "react-icons/md";

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

        <div className="flex items-center flex-wrap gap-2 sm:justify-end">
          <Button variant="ghost" className="cursor-pointer">
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
