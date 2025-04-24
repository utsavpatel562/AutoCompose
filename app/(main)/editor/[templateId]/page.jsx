"use client";
import SideSettings from "@/components/customs/Element/SideSettings";
import Canvas from "@/components/ui/Canvas";
import EditorHeader from "@/components/ui/EditorHeader";
import ElementSideBar from "@/components/ui/ElementSideBar";
import React, { useState } from "react";

function Editor() {
  const [viewHTMLCode, setViewHTMLCode] = useState();
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
