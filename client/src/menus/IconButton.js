import React from "react";

const IconButton = ({ app: { img, href, alt, color, txt, name } }) => {
  return (
    <a
      href={href}
      className="btn login-btn"
      style={{ backgroundColor: color, margin: 5, display: "block" }}
      title={txt}
    >
      <img src={img} style={{ height: "20px" }} alt={alt} />
      <span className="btn-txt login-name">{name.toUpperCase()} Login</span>
    </a>
  );
};

export default IconButton;
