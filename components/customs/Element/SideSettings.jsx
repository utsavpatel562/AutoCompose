"use client";
import { useSelectedElement } from "@/app/provider";
import React, { useEffect, useState } from "react";
import InputField from "../Settings/InputField";
import ColorPickerField from "../Settings/ColorPickerField";
import InputStyleField from "../Settings/InputStyleField";
import SliderField from "../Settings/SliderField";
import { motion, AnimatePresence } from "framer-motion";
import TextAreaField from "../Settings/TextAreaField";
import ToggleGroupField from "../Settings/ToggleGroupField";
import {
  AArrowUp,
  AlignCenter,
  AlignLeft,
  AlignRight,
  CaseLowerIcon,
  CaseUpperIcon,
} from "lucide-react";

const TextAlignOptions = [
  {
    value: "left",
    icon: AlignLeft,
  },
  {
    value: "center",
    icon: AlignCenter,
  },
  {
    value: "right",
    icon: AlignRight,
  },
];

const TextTransformOptions = [
  {
    value: "uppercase",
    icon: CaseUpperIcon,
  },
  {
    value: "lowercase",
    icon: CaseLowerIcon,
  },
  {
    value: "capitalize",
    icon: AArrowUp,
  },
];

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
        {element?.textarea !== undefined && (
          <motion.div
            key="textarea"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeInUp}
          >
            <TextAreaField
              label="Paragraph"
              value={element.textarea}
              onHandleInputChange={(value) =>
                onHandleInputChange("textarea", value)
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

        {/* Wrapping the ToggleGroupField with motion.div */}
        {element?.style.textAlign && (
          <motion.div
            key="text-align"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeInUp}
          >
            <ToggleGroupField
              label={"Text Align"}
              value={element?.style.textAlign}
              options={TextAlignOptions}
              onHandleStyleChange={(value) =>
                onHandleStyleChange("textAlign", value)
              }
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

        {element?.style.textTransform && (
          <motion.div
            key="textTransform"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeInUp}
          >
            <ToggleGroupField
              label={"Text Transform"}
              value={element?.style.textTransform}
              options={TextTransformOptions}
              onHandleStyleChange={(value) =>
                onHandleStyleChange("textTransform", value)
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
      </AnimatePresence>
    </div>
  );
}

export default SideSettings;
