import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

function DropDownField({ label, value, options, onHandleStyleChange }) {
  return (
    <div>
      <label className="font-semibold">{label}</label>
      <Select
        defaultValue={value}
        onValueChange={(v) => onHandleStyleChange(v)}
      >
        <SelectTrigger className="w-full my-1">
          <SelectValue placeholder={value} />
        </SelectTrigger>
        <SelectContent>
          {options?.map((option, index) => (
            <SelectItem value={option} key={index}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default DropDownField;
