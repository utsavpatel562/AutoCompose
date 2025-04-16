"use client";
import Layout from "@/Data/Layout";
import React from "react";
import ElementLayoutCard from "./ElementLayoutCard";
import ElementList from "@/Data/ElementList";
import { useDragElementLayout } from "@/app/provider";

function ElementSideBar() {
  const { dragElementLayout, setDragElementLayout } = useDragElementLayout();
  const onDragLayoutStart = (layout) => {
    setDragElementLayout({
      dragLayout: {
        ...layout,
        id: Date.now(),
      },
    });
  };
  return (
    <>
      <div className="p-5 h-screen shadow-sm">
        <h2 className="font-bold text-lg text-slate-700">Layouts</h2>
        <div className="grid grid-cols-3 md:grid-cols-2 gap-3 mt-3">
          {Layout.map((layout, index) => (
            <div
              key={index}
              draggable
              onDragStart={() => onDragLayoutStart(layout)}
            >
              {" "}
              {/* use draggable attribute to make the element draggable */}
              <ElementLayoutCard layout={layout} />
            </div>
          ))}
        </div>
        <h2 className="font-bold text-lg text-slate-700 mt-4">Elements</h2>
        <div className="grid grid-cols-3 md:grid-cols-2 gap-3 mt-3">
          {ElementList.map((element, index) => (
            <ElementLayoutCard layout={element} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ElementSideBar;
