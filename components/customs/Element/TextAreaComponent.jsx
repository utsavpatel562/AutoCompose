import React from "react";

function TextAreaComponent({ style, textarea }) {
  return (
    <div>
      <h1 style={style}>{textarea}</h1>
    </div>
  );
}

export default TextAreaComponent;
