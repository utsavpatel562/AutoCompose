import React from "react";

function LogoComponent({ style, imageUrl, outerStyle }) {
  return (
    <div>
      <img src={imageUrl} style={style} alt="Logo" />
    </div>
  );
}

export default LogoComponent;
