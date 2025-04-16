"use client";
import { useDragElementLayout, useScreenSize } from "@/app/provider";
import React from "react";

function Canvas() {
  const { screenSize, setScreenSize } = useScreenSize();
  const { dragElementLayout, setDragElementLayout } = useDragElementLayout();
  const onDragOver = (e) => {
    e.preventDefault();
    console.log("Over...");
  };
  const onDropHandle = () => {
    console.log(dragElementLayout?.dragLayout);
  };
  return (
    <>
      <div className="mt-20 flex justify-center">
        <div
          className={`bg-white p-6 w-full border ${screenSize == "desktop" ? "max-w-3xl" : "max-w-md"}`}
          onDragOver={onDragOver}
          onDrop={() => onDropHandle()}
        ></div>
      </div>
    </>
  );
}

export default Canvas;
