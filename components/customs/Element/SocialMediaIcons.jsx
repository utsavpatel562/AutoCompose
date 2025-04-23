import React from "react";

function SocialMediaIcons({ style, socialIcons = [], outerStyle }) {
  return (
    <div className="flex items-center gap-3" style={outerStyle}>
      {socialIcons.map((iconObj, index) => (
        <a
          key={index}
          href={iconObj.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={iconObj.icon}
            alt={`Social Icon ${index + 1}`}
            style={style}
          />
        </a>
      ))}
    </div>
  );
}

export default SocialMediaIcons;
