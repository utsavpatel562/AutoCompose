import { Input } from "@/components/ui/input";
import React from "react";

function InputField({ label, value, onHandleInputChange }) {
  return (
    <div className="mt-3">
      <label className="flex items-center gap-2 font-semibold">{label}</label>
      <Input
        className="rounded-sm my-1"
        value={value}
        onChange={(event) => onHandleInputChange(event.target.value)}
      />
    </div>
  );
}

export default InputField;
