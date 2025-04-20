import { Input } from "@/components/ui/input";
import React from "react";

function InputField({ label, value, onHandleInputChange }) {
  return (
    <div>
      <label>{label}</label>
      <Input
        className="rounded-sm my-2"
        value={value}
        onChange={(event) => onHandleInputChange(event.target.value)}
      />
    </div>
  );
}

export default InputField;
