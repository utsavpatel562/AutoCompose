import React from "react";

function TextComponent({ style, content }) {
  return (
    <div>
      <h1 style={style}>{content}</h1>
    </div>
  );
}

export default TextComponent;
