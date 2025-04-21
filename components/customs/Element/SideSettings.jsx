"use client";

import { useSelectedElement } from "@/app/provider";
import React, { useEffect, useState } from "react";
import InputField from "../Settings/InputField";
import ColorPickerField from "../Settings/ColorPickerField";
import { motion, AnimatePresence } from "framer-motion";

function SideSettings() {
  const { selectedElement, setSelectedElement } = useSelectedElement();
  const [element, setElement] = useState();

  useEffect(() => {
    setElement(selectedElement?.layout?.[selectedElement?.index]);
  }, [selectedElement]);

  const onHandleInputChange = (fieldName, value) => {
    let updatedData = { ...selectedElement };
    updatedData.layout[selectedElement.index][fieldName] = value;
    setSelectedElement(updatedData);
  };

  const onHandleStyleChange = (fieldName, fieldValue) => {
    let updateElement = {
      ...selectedElement,
      layout: {
        ...selectedElement?.layout,
        [selectedElement?.index]: {
          ...selectedElement?.layout[selectedElement?.index],
          style: {
            ...selectedElement?.layout[selectedElement?.index]?.style,
            [fieldName]: [fieldValue],
          },
        },
      },
    };
    setSelectedElement(updateElement);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="p-5 flex-col gap-4">
      <h2 className="font-bold text-lg text-slate-700">Settings</h2>

      <AnimatePresence>
        {element?.content !== undefined && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeInUp}
            transition={{ duration: 0.3 }}
            key="content"
          >
            <InputField
              label={"Content"}
              value={element?.content}
              onHandleInputChange={(value) =>
                onHandleInputChange("content", value)
              }
            />
          </motion.div>
        )}

        {element?.url !== undefined && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeInUp}
            transition={{ duration: 0.3, delay: 0.05 }}
            key="url"
          >
            <InputField
              label={"URL / Link"}
              value={element?.url}
              onHandleInputChange={(value) => onHandleInputChange("url", value)}
            />
          </motion.div>
        )}

        {element?.style?.backgroundColor !== undefined && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeInUp}
            transition={{ duration: 0.3, delay: 0.1 }}
            key="background-color"
          >
            <ColorPickerField
              label="Background Color"
              value={element?.style?.backgroundColor}
              onHandleStyleChange={(value) =>
                onHandleStyleChange("backgroundColor", value)
              }
            />
          </motion.div>
        )}

        {element?.style?.color !== undefined && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeInUp}
            transition={{ duration: 0.3, delay: 0.15 }}
            key="text-color"
          >
            <ColorPickerField
              label="Text Color"
              value={element?.style?.color}
              onHandleStyleChange={(value) =>
                onHandleStyleChange("color", value)
              }
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SideSettings;
