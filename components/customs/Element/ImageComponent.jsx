import React from "react";

function ImageComponent({ imageUrl, style, outerStyle }) {
  if (!imageUrl || imageUrl.trim() === "") return null;

  return (
    <div style={outerStyle}>
      <img src={imageUrl} alt="image" style={style} />
    </div>
  );
}

export default ImageComponent;
