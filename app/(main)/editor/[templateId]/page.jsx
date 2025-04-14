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
        <div className="grid grid-cols-5">
          <ElementSideBar />
          <div className="col-span-3 bg-slate-100">
            <Canvas />
          </div>
          <Settings />
        </div>
      </div>
    </>
  );
}

export default Editor;
