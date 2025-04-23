import { Input } from "@/components/ui/input";
import React from "react";

function ImagePreview({ label, value, onHandleInputChange }) {
  const hasImage = value && value.trim() !== "";

  return (
    <div>
      <label className="font-semibold">{label}</label>
      {hasImage ? (
        <img
          src={value}
          alt="image"
          className="w-full h-[150px] object-contain border border-slate-300 rounded-md p-4 my-1"
        />
      ) : (
        <div className="w-full h-[150px] flex items-center justify-center border-1 border-dashed border-slate-400 rounded-md p-4 my-1 text-slate-400">
          No image preview
        </div>
      )}
      <label className="font-semibold">Image Link</label>
      <Input
        className="mt-1 rounded-sm"
        placeholder="Your Image Link"
        value={value}
        onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  );
}

export default ImagePreview;
