"use client";
import { useUserDetail } from "@/app/provider";
import SideSettings from "@/components/customs/Element/SideSettings";
import Canvas from "@/components/ui/Canvas";
import EditorHeader from "@/components/ui/EditorHeader";
import ElementSideBar from "@/components/ui/ElementSideBar";
import { api } from "@/convex/_generated/api";
import { useConvex } from "convex/react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function Editor() {
  const [viewHTMLCode, setViewHTMLCode] = useState();
  const { templateId } = useParams();
  const { userDetail, setUserDetail } = useUserDetail();
  const convex = useConvex();

  useEffect(() => {
    if (userDetail) {
      GetTemplateData();
    }
  }, [userDetail]);

  const GetTemplateData = async () => {
    const result = await convex.query(api.emailTemplate.GetTemplateDesign, {
      tid: templateId,
      email: userDetail?.email,
    });
    console.log(result);
  };
  return (
    <div className="flex flex-col h-screen">
      {" "}
      {/* Set full screen height */}
      <EditorHeader viewHTMLCode={(v) => setViewHTMLCode(v)} />
      <div className="flex-1 grid grid-cols-1 md:grid-cols-5 overflow-hidden">
        {/* Sidebar */}
        <div className="md:col-span-1 overflow-y-auto">
          <ElementSideBar />
        </div>

        {/* Canvas */}
        <div className="md:col-span-3 bg-slate-100 overflow-y-auto">
          <Canvas
            viewHTMLCode={viewHTMLCode}
            closeDialog={() => setViewHTMLCode(false)}
          />
        </div>

        {/* Settings */}
        <div className="md:col-span-1 overflow-y-auto">
          <SideSettings />
        </div>
      </div>
    </div>
  );
}

export default Editor;
