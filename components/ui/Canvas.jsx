"use client";
import {
  useDragElementLayout,
  useEmailTemplate,
  useScreenSize,
} from "@/app/provider";
import React, { useEffect, useRef, useState } from "react";
import { FiLayout } from "react-icons/fi";
import ColmunLayout from "../LayoutElements/ColmunLayout";
import ViewHTMLDialog from "./ViewHTMLDialog";

function Canvas({ viewHTMLCode, closeDialog }) {
  const htmlRef = useRef();
  const { screenSize } = useScreenSize();
  const { dragElementLayout } = useDragElementLayout();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();
  const [dragOver, setDragOver] = useState(false);
  const [htmlCode, setHTMLCode] = useState("");

  const onDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
    console.log("Over...");
  };

  const onDropHandle = () => {
    setDragOver(false);
    if (dragElementLayout?.dragLayout) {
      setEmailTemplate((prev) => [...prev, dragElementLayout.dragLayout]);
    }
  };

  const getLayoutComponent = (layout) => {
    if (layout?.type === "column") return <ColmunLayout layout={layout} />;
    return null;
  };

  useEffect(() => {
    if (viewHTMLCode) {
      GetHTMLCode();
    }
  }, [viewHTMLCode]);

  const GetHTMLCode = () => {
    if (htmlRef.current) {
      const htmlContent = htmlRef.current.innerHTML;
      setHTMLCode(htmlContent);
    }
  };

  return (
    <>
      <div className="mt-20 flex justify-center">
        <div
          className={`w-full border ${screenSize === "desktop" ? "max-w-3xl" : "max-w-md"} ${dragOver ? "bg-violet-50 p-4" : "bg-white p-6"}`}
          onDragOver={onDragOver}
          onDrop={onDropHandle}
          ref={htmlRef}
        >
          {Array.isArray(emailTemplate) && emailTemplate.length > 0 ? (
            emailTemplate.map((layout, index) => (
              <div key={index}>{getLayoutComponent(layout)}</div>
            ))
          ) : (
            <h2 className="flex items-center gap-2 justify-center bg-slate-50 border border-dashed rounded-sm p-4 text-center text-2xl font-semibold text-slate-500">
              <FiLayout />
              Add Layout Here
            </h2>
          )}
        </div>
        <ViewHTMLDialog
          openDialog={viewHTMLCode}
          htmlCode={htmlCode}
          closeDialog={closeDialog}
        />
      </div>
    </>
  );
}

export default Canvas;
