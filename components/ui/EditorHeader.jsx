"use client";
import Image from "next/image";
import React, { useState } from "react"; // <-- import useState
import { Button } from "./button";
import { Code } from "lucide-react";
import { MdSaveAlt, MdOpenInNew } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";
import { IoDesktopOutline } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { FaMobileScreen } from "react-icons/fa6";
import { useEmailTemplate, useScreenSize } from "@/app/provider";
import Link from "next/link";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";

function EditorHeader({ viewHTMLCode }) {
  const { screenSize, setScreenSize } = useScreenSize();
  const updatedEmailTemplate = useMutation(
    api.emailTemplate.UpdateTemplateDesign
  );
  const { templateId } = useParams();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();

  const [isSaved, setIsSaved] = useState(false); // <-- new state for "saved"

  const onSaveTemplate = async () => {
    await updatedEmailTemplate({
      tid: templateId,
      design: JSON.stringify(emailTemplate),
    });
    setIsSaved(true); // <-- set saved true after save
    setTimeout(() => setIsSaved(false), 2000); // <-- hide "saved" after 2 seconds
  };

  return (
    <>
      <div className="p-4 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
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
            onClick={() => viewHTMLCode(true)}
          >
            <Code />
          </Button>
          <Link href="/dashboard">
            <Button
              className="flex items-center border border-slate-300 rounded-sm cursor-pointer gap-1"
              variant="outline"
            >
              Dashboard
              <MdSpaceDashboard />
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Button
              onClick={onSaveTemplate}
              className="flex items-center bg-violet-600 rounded-sm cursor-pointer hover:bg-violet-700 gap-1"
            >
              {isSaved ? (
                <span className="text-slate-50 font-semibold text-sm flex items-center gap-1">
                  Saved! <FaRegSave />
                </span>
              ) : (
                <>
                  Save Template <FaRegSave />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditorHeader;
