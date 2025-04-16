import React from "react";

function ImageComponent({ style, content, outStyle }) {
  return (
    <div>
      <img src={content} alt="image" style={style} />
    </div>
  );
}

export default ImageComponent;
