import { Input } from "@/components/ui/input";
import { FaEdit } from "react-icons/fa";
import React from "react";

function InputField({ label, value, onHandleInputChange }) {
  return (
    <div className="mt-3">
      <label className="flex items-center gap-2 font-semibold">
        {label}
        <FaEdit />
      </label>
      <Input
        className="rounded-sm my-1"
        value={value}
        onChange={(event) => onHandleInputChange(event.target.value)}
      />
    </div>
  );
}

export default InputField;
