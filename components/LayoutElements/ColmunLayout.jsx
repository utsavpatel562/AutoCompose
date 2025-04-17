"use client";
import {
  useDragElementLayout,
  useEmailTemplate,
  useSelectedElement,
} from "@/app/provider";
import React, { useState } from "react";
import ButtonComponent from "../customs/Element/ButtonComponent";
import TextComponent from "../customs/Element/TextComponent";
import ImageComponent from "../customs/Element/ImageComponent";
import LogoComponent from "../customs/Element/LogoComponent";
import DviderComponent from "../customs/Element/DviderComponent";
import SocialMediaIcons from "../customs/Element/SocialMediaIcons";

function ColmunLayout({ layout }) {
  const [dragOver, setDragOver] = useState();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();
  const { dragElementLayout, setDragElementLayout } = useDragElementLayout();
  const { selectedElement, setSelectedElement } = useSelectedElement();
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
    console.log(emailTemplate);
    setDragOver(null);
  };
  const GetElementComponent = (element) => {
    if (element?.type == "Button") {
      return <ButtonComponent {...element} />;
    } else if (element?.type == "Text") {
      return <TextComponent {...element} />;
    } else if (element?.type == "Image") {
      return <ImageComponent {...element} />;
    } else if (element?.type == "Logo") {
      return <LogoComponent {...element} />;
    } else if (element?.type == "Divider") {
      return <DviderComponent {...element} />;
    } else if (element?.type == "SocialIcons") {
      return <SocialMediaIcons {...element} />;
    }

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
              className={`p-2 flex items-center justify-center cursor-pointer
                ${!layout?.[index]?.type && "bg-slate-100 border border-dashed"}
                ${index === dragOver?.index && dragOver?.columnId && "bg-green-100"}
                ${selectedElement?.layout?.id == layout?.id && selectedElement?.index == index && "border-2 border-violet-500 border-dashed"}`}
              onDragOver={(event) => onDragOverHandle(event, index)}
              onDrop={onDropHandle}
              onClick={() =>
                setSelectedElement({ layout: layout, index: index })
              }
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
