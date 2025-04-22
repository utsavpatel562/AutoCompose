"use client";

import { useSelectedElement } from "@/app/provider";
import React, { useEffect, useState } from "react";
import InputField from "../Settings/InputField";
import ColorPickerField from "../Settings/ColorPickerField";
import InputStyleField from "../Settings/InputStyleField";
import SliderField from "../Settings/SliderField";
import { motion, AnimatePresence } from "framer-motion";

function SideSettings() {
  const { selectedElement, setSelectedElement } = useSelectedElement();
  const [element, setElement] = useState();

  useEffect(() => {
    setElement(selectedElement?.layout?.[selectedElement?.index]);
  }, [selectedElement]);

  const onHandleInputChange = (fieldName, value) => {
    const updatedData = { ...selectedElement };
    updatedData.layout[selectedElement.index][fieldName] = value;
    setSelectedElement(updatedData);
  };

  const onHandleStyleChange = (fieldName, fieldValue) => {
    const updated = {
      ...selectedElement,
      layout: {
        ...selectedElement.layout,
        [selectedElement.index]: {
          ...selectedElement.layout[selectedElement.index],
          style: {
            ...selectedElement.layout[selectedElement.index]?.style,
            [fieldName]: fieldValue,
          },
        },
      },
    };
    setSelectedElement(updated);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="p-5 flex flex-col gap-4">
      <h2 className="font-bold text-lg text-slate-700">Settings</h2>

      <AnimatePresence>
        {element?.content !== undefined && (
          <motion.div
            key="content"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeInUp}
          >
            <InputField
              label="Content"
              value={element.content}
              onHandleInputChange={(value) =>
                onHandleInputChange("content", value)
              }
            />
          </motion.div>
        )}

        {element?.url !== undefined && (
          <motion.div
            key="url"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeInUp}
          >
            <InputField
              label="Add Link"
              value={element.url}
              onHandleInputChange={(value) => onHandleInputChange("url", value)}
            />
          </motion.div>
        )}

        {element?.style?.backgroundColor !== undefined && (
          <motion.div
            key="bg"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeInUp}
          >
            <ColorPickerField
              label="Background Color"
              value={element.style.backgroundColor}
              onHandleStyleChange={(value) =>
                onHandleStyleChange("backgroundColor", value)
              }
            />
          </motion.div>
        )}

        {element?.style?.color !== undefined && (
          <motion.div
            key="text-color"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeInUp}
          >
            <ColorPickerField
              label="Text Color"
              value={element.style.color}
              onHandleStyleChange={(value) =>
                onHandleStyleChange("color", value)
              }
            />
          </motion.div>
        )}

        {element?.style?.fontSize !== undefined && (
          <motion.div
            key="font-size"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeInUp}
          >
            <InputStyleField
              label="Font Size"
              value={element.style.fontSize}
              onHandleStyleChange={(value) =>
                onHandleStyleChange("fontSize", value)
              }
            />
          </motion.div>
        )}

        {element?.style?.padding !== undefined && (
          <motion.div
            key="padding"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeInUp}
          >
            <InputStyleField
              label="Padding"
              value={element.style.padding}
              onHandleStyleChange={(value) =>
                onHandleStyleChange("padding", value)
              }
            />
          </motion.div>
        )}

        {element?.style?.borderRadius !== undefined && (
          <motion.div
            key="border-radius"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeInUp}
          >
            <SliderField
              label="Border Radius"
              value={element.style.borderRadius}
              onHandleStyleChange={(value) =>
                onHandleStyleChange("borderRadius", value)
              }
            />
          </motion.div>
        )}

        {element?.style?.width !== undefined && (
          <motion.div
            key="width"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeInUp}
          >
            <SliderField
              label="Width"
              value={element.style.width}
              type="%"
              onHandleStyleChange={(value) =>
                onHandleStyleChange("width", value)
              }
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SideSettings;
