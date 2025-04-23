import React, { useState } from "react";
import { Check } from "lucide-react"; // optional icon, if you're using lucide

function ColorPickerField({ label, value, onHandleStyleChange }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof value === "string") {
      navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className="flex flex-col gap-2 mt-4">
      {/* Label */}
      <label className="text-sm font-semibold text-slate-700 tracking-wide">
        {label}
      </label>

      {/* Color Input + Hex Badge */}
      <div className="flex items-center gap-4">
        {/* Color Picker Input */}
        <input
          type="color"
          value={value}
          onChange={(e) => onHandleStyleChange(e.target.value)}
          className="h-10 w-full cursor-pointer transition-transform duration-200 hover:scale-105"
        />
        {/* Hex Value & Copy */}
      </div>
    </div>
  );
}

export default ColorPickerField;
