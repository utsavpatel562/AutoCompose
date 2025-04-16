"use client";
import { useDragElementLayout, useEmailTemplate } from "@/app/provider";
import React, { useState } from "react";

function ColmunLayout({ layout }) {
  const [dragOver, setDragOver] = useState();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();
  const { dragElementLayout, setDragElementLayout } = useDragElementLayout();
  const onDragOverHandle = (event, index) => {
    event.preventDefault();
    setDragOver({
      index: index,
      columnId: layout?.id,
    });
  };
  const onDropHandle = () => {
    const index = dragOver.index;
    setEmailTemplate((prevItem) =>
      prevItem?.map((col) =>
        col.id === layout?.id
          ? { ...col, [index]: dragElementLayout?.dragElement }
          : col
      )
    );
    setDragOver(null);
  };
  const GetElementComponent = (element) => {
    console.log(element);
    return element?.type;
  };
  return (
    <>
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${layout?.numOfCol},1fr)`,
            gap: "0px",
          }}
        >
          {Array.from({ length: layout?.numOfCol }).map((_, index) => (
            <div
              key={index}
              className={`p-2 flex items-center border border-dashed justify-center 
                ${index === dragOver?.index && dragOver?.columnId ? "bg-green-100" : "bg-slate-100"}`}
              onDragOver={(event) => onDragOverHandle(event, index)}
              onDrop={onDropHandle}
            >
              {GetElementComponent(layout?.[index]) ?? "Drag Element Here"}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ColmunLayout;
