"use client";
import { useScreenSize } from "@/app/provider";
import React from "react";

function Canvas() {
  const { screenSize, setScreenSize } = useScreenSize();
  return (
    <>
      <div className="mt-20 flex justify-center">
        <div
          className={`bg-white p-6 w-full border ${screenSize == "desktop" ? "max-w-3xl" : "max-w-md"}`}
        ></div>
      </div>
    </>
  );
}

export default Canvas;
