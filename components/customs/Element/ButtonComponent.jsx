import React from "react";

function ButtonComponent({ style, content, url }) {
  return (
    <div>
      <a href={url}>
        <button style={style}>{content}</button>
      </a>
    </div>
  );
}

export default ButtonComponent;
