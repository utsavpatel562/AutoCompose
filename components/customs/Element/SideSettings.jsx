"use client";
import { useSelectedElement } from "@/app/provider";
import React, { useEffect, useState } from "react";
import InputField from "../Settings/InputField";
import ColorPickerField from "../Settings/ColorPickerField";
function SideSettings() {
  const { selectedElement, setSelectedElement } = useSelectedElement();
  const [element, setElement] = useState();
  useEffect(() => {
    setElement(selectedElement?.layout?.[selectedElement?.index]);
  }, [selectedElement]);

  const onHandleInputChange = (fieldName, value) => {
    console.log(fieldName, "value" + value);
    // Copy of Current SelectedElement
    const updatedData = { ...selectedElement };
    // Update the Specific Field
    updatedData.layout[selectedElement.index][fieldName] = value;
    // Update Orginal SelectedElement
    setSelectedElement(updatedData);
  };

  return (
    <div className="p-5">
      <h2 className="font-bold text-lg text-slate-700">Settings</h2>
      {element?.content && (
        <InputField
          label={"Content"}
          value={element?.content}
          onHandleInputChange={(value) => onHandleInputChange("content", value)}
        />
      )}
      {element?.style?.backgroundColor && (
        <ColorPickerField
          label="Background Color"
          value={element?.style?.backgroundColor}
          onHandleInputChange={(value) =>
            onHandleInputChange("backgroundColor", value)
          }
        />
      )}
    </div>
  );
}

export default SideSettings;
