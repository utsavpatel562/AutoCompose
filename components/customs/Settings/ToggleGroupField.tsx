import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import React from "react";

function ToggleGroupField({ label, value, options, onHandleStyleChange }) {
  return (
    <>
      <div>
        <label className="font-semibold">{label}</label>
        <ToggleGroup
          className="w-full border-2 pr-1 pt-1 pb-1 pl-1 mt-1"
          type="single"
          defaultValue={value}
          onValueChange={(v) => onHandleStyleChange(v)}
        >
          {options.map((option, index) => (
            <ToggleGroupItem
              className="cursor-pointer"
              key={index}
              value={option?.value}
            >
              <option.icon />
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </>
  );
}

export default ToggleGroupField;
