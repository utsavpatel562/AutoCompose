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
import TextAreaComponent from "../customs/Element/TextAreaComponent";
import { LuTrash2 } from "react-icons/lu";
import { ArrowDown, ArrowUp } from "lucide-react";

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
        col?.id === layout?.id
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
    } else if (element?.type == "TextArea") {
      return <TextAreaComponent {...element} />;
    }
    return element?.type;
  };
  const deleteLayout = (layoutId) => {
    const updateEmailTemplate = emailTemplate?.filter(
      (item) => item?.id != layoutId
    );
    setEmailTemplate(updateEmailTemplate);
    setSelectedElement(null);
  };
  // Logic for moveItemup and moveItemDown
  const moveItemUp = (layoutId) => {
    const index = emailTemplate.findIndex((item) => item?.id === layoutId);
    if (index > 0) {
      setEmailTemplate((prevItem) => {
        const updatedItems = [...prevItem];
        // Swap the current item const temp = updatedItems[index]; updatedItems[index] = updatedItems[index - 1]; updatedItems[index - 1] = temp;

        [updatedItems[index], updatedItems[index - 1]] = [
          updatedItems[index - 1],
          updatedItems[index],
        ];
        return updatedItems;
      });
    }
  };
  const moveItemDown = (layoutId) => {
    const index = emailTemplate.findIndex((item) => item?.id === layoutId);
    if (index > 0) {
      setEmailTemplate((prevItem) => {
        const updatedItems = [...prevItem];
        // Swap the current item const temp = updatedItems[index]; updatedItems[index] = updatedItems[index + 1]; updatedItems[index + 1] = temp;
        [updatedItems[index], updatedItems[index + 1]] = [
          updatedItems[index + 1],
          updatedItems[index],
        ];
        return updatedItems;
      });
    }
  };
  return (
    <>
      <div className="relative">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${layout?.numOfCol},1fr)`,
            gap: "0px",
          }}
          className={`${selectedElement?.layout?.id == layout?.id && "border border-dashed border-violet-600"}`}
        >
          {Array.from({ length: layout?.numOfCol }).map((_, index) => (
            <div
              key={index}
              className={`p-0 flex items-center justify-center cursor-pointer
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
          {selectedElement?.layout?.id == layout?.id && (
            <div className="absolute -right-10 flex gap-2 flex-col">
              <div
                className="bg-red-50 cursor-pointer hover:scale-105 transition-all hover:shadow-md p-2 rounded-full"
                onClick={() => deleteLayout(layout?.id)}
              >
                <LuTrash2 className="h-4 w-4 text-red-500 " />
              </div>
              <div
                className="bg-indigo-100 cursor-pointer hover:scale-105 transition-all hover:shadow-md p-2 rounded-full"
                onClick={() => moveItemUp(layout.id)}
              >
                <ArrowUp className="h-4 w-4 text-indigo-500 " />
              </div>
              <div
                className="bg-indigo-100 cursor-pointer hover:scale-105 transition-all hover:shadow-md p-2 rounded-full"
                onClick={() => moveItemDown(layout.id)}
              >
                <ArrowDown className="h-4 w-4 text-indigo-500 " />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ColmunLayout;
