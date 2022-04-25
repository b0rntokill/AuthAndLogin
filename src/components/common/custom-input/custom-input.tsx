import React, { InputHTMLAttributes, useState } from "react";
import "./custom-input.scss";

type CustomInputProps = {
  label?: string;
  error?: boolean;
  message?: string;
} & InputHTMLAttributes<HTMLInputElement>;

function CustomInput({ label, error, message, ...otherProps }: CustomInputProps): JSX.Element {
  const [showMessage, setShowMessage] = useState(false);
  const { name } = otherProps;
  return (
    <div className="custom-input">
      {label ? <label htmlFor={name}>{label}</label> : ""}
      <input
        className={`custom-input__input ${error ? "custom-input__input--error" : ""}`}
        onFocus={() => setShowMessage(true)}
        onBlur={() => setShowMessage(false)}
        {...otherProps}
      />
      <span className={`custom-input__message ${error ? "custom-input__message--error" : ""}`}>
        {showMessage || error ? message : ""}
      </span>
    </div>
  );
}

export default CustomInput;
