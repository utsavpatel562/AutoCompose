import React from "react";

function TextAreaComponent({ style, textarea }) {
  return (
    <div className="w-full">
      <h1 style={style}>{textarea}</h1>
    </div>
  );
}

export default TextAreaComponent;
