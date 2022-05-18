import React from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={props.className}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
