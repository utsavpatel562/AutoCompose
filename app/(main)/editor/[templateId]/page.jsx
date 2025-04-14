import Canvas from "@/components/ui/Canvas";
import EditorHeader from "@/components/ui/EditorHeader";
import ElementSideBar from "@/components/ui/ElementSideBar";
import Settings from "@/components/ui/Settings";
import React from "react";

function Editor() {
  return (
    <>
      <div>
        <EditorHeader />
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Sidebar full width on mobile, 1 column on medium and up */}
          <div className="md:col-span-1">
            <ElementSideBar />
          </div>
          {/* Canvas center section full width on mobile, 3 columns on medium and up */}
          <div className="md:col-span-3 bg-slate-100">
            <Canvas />
          </div>
          {/* Settings full width on mobile, 1 column on medium and up */}
          <div className="md:col-span-1">
            <Settings />
          </div>
        </div>
      </div>
    </>
  );
}

export default Editor;
