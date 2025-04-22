import { Textarea } from "@/components/ui/textarea";
import React from "react";

function TextAreaField({ label, value, onHandleInputChange }) {
  return (
    <div>
      <label className="font-semibold">{label}</label>
      <Textarea
        className="my-1"
        value={value}
        onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  );
}

export default TextAreaField;
