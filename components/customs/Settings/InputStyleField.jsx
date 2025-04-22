import { Input } from "@/components/ui/input";
import React from "react";

function InputStyleField({ label, value, onHandleStyleChange, type = "px" }) {
  const FormattedValue = (value_) => {
    return Number(value_.toString().replace(type, ""));
  };
  return (
    <div className="mt-3">
      <label className="font-semibold">{label}</label>
      <div className="flex my-1">
        <Input
          type="text"
          value={FormattedValue(value)}
          onChange={(e) => onHandleStyleChange(e.target.value + type)}
        />
        <h2 className="p-1 bg-slate-100 rounded-r-lg -ml-5">{type}</h2>
      </div>
    </div>
  );
}

export default InputStyleField;
