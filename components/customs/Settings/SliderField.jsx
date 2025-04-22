import { Slider } from "@/components/ui/slider";
import React from "react";

function SliderField({ label, value, onHandleStyleChange, type = "px" }) {
  const FormattedValue = (value_) => {
    return Number(value_.toString().replace(type, ""));
  };
  return (
    <div>
      <label className="font-semibold">{label}</label>
      <Slider
        className="my-2 cursor-pointer"
        defaultValue={[FormattedValue(value)]}
        max={100}
        step={1}
        onValueChange={(v) => onHandleStyleChange(v + type)}
      />
    </div>
  );
}

export default SliderField;
