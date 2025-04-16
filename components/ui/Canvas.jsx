"use client";
import {
  useDragElementLayout,
  useEmailTemplate,
  useScreenSize,
} from "@/app/provider";
import React, { useState } from "react";
import { FiLayout } from "react-icons/fi";
import ColmunLayout from "../LayoutElements/ColmunLayout";
function Canvas() {
  const { screenSize, setScreenSize } = useScreenSize();
  const { dragElementLayout, setDragElementLayout } = useDragElementLayout();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();
  const [dragOver, setDragOver] = useState(false);
  const onDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
    console.log("Over...");
  };
  const onDropHandle = () => {
    setDragOver(false);
    if (dragElementLayout?.dragLayout) {
      setEmailTemplate((prev) => [...prev, dragElementLayout?.dragLayout]);
    }
  };
  const getLayoutComponent = (layout) => {
    if (layout?.type == "column") return <ColmunLayout layout={layout} />;
  };
  return (
    <>
      <div className="mt-20 flex justify-center">
        <div
          className={`w-full border ${
            screenSize === "desktop" ? "max-w-3xl" : "max-w-md"
          } ${dragOver ? "bg-violet-50 p-4" : "bg-white p-6"}`}
          onDragOver={onDragOver}
          onDrop={onDropHandle}
        >
          {emailTemplate?.length > 0 ? (
            emailTemplate?.map((layout, index) => (
              <div key={index}>{getLayoutComponent(layout)}</div>
            ))
          ) : (
            <h2 className="flex items-center gap-2 justify-center bg-slate-50 border border-dashed rounded-sm p-4 text-center text-2xl font-semibold text-slate-500">
              <FiLayout />
              Add Layout Here
            </h2>
          )}
        </div>
      </div>
    </>
  );
}

export default Canvas;
