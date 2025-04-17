import React from "react";

function ImageComponent({ style, content, outerStyle }) {
  return (
    <div style={outerStyle}>
      <img src={content} alt="image" style={style} />
    </div>
  );
}

export default ImageComponent;
