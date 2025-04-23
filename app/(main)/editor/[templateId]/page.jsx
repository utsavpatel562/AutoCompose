import SideSettings from "@/components/customs/Element/SideSettings";
import Canvas from "@/components/ui/Canvas";
import EditorHeader from "@/components/ui/EditorHeader";
import ElementSideBar from "@/components/ui/ElementSideBar";
import React from "react";

function Editor() {
  return (
    <div className="flex flex-col h-screen">
      {" "}
      {/* Set full screen height */}
      <EditorHeader />
      <div className="flex-1 grid grid-cols-1 md:grid-cols-5 overflow-hidden">
        {/* Sidebar */}
        <div className="md:col-span-1 overflow-y-auto">
          <ElementSideBar />
        </div>

        {/* Canvas */}
        <div className="md:col-span-3 bg-slate-100 overflow-y-auto">
          <Canvas />
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
