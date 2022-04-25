import React, { ButtonHTMLAttributes } from "react";
import "./custom-button.scss";

type CustomButtonProps = {
  text: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function CustomButton({ text, ...otherProps }: CustomButtonProps): JSX.Element {
  const { type } = otherProps;
  return (
    <button
      className={`custom-button ${type === "submit" ? "custom-button--green" : ""}`}
      {...otherProps}
    >
      {text}
    </button>
  );
}

export default CustomButton;
