import React from "react";

function ColorPickerField({ label, value, onHandleStyleChange }) {
  return (
    <div className="flex items-center gap-2 mt-2">
      <label className="font-semibold">{label}</label>
      <input
        className="cursor-pointer w-8 h-8"
        type="color"
        value={value}
        onChange={(e) => onHandleStyleChange(e.target.value)}
      />
    </div>
  );
}

export default ColorPickerField;
