import React from "react";

function LogoComponent({ style, imageUrl, outerStyle }) {
  if (!imageUrl) return null; // Or render a fallback instead

  return (
    <div style={outerStyle}>
      <img src={imageUrl} style={style} alt="Logo" />
    </div>
  );
}

export default LogoComponent;
