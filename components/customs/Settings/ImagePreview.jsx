import React from "react";

function ImagePreview({ label, value, onHandleInputChange }) {
  return (
    <div>
      <label className="font-semibold">{label}</label>
      <img
        src={value}
        alt="image"
        className="w-full h-[150px] object-contain border border-slate-300 rounded-md p-4 my-1"
      />
    </div>
  );
}

export default ImagePreview;
