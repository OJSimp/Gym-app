import "./IconTextInput.scss";
import "./TextInput.scss";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import { useState } from "react";

export default function TextInput(props) {
  // Show hide password

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="input-text">
      <input
        className={props.class ? `"input__text" ${props.class}` : "input__text"}
        placeholder=" "
        type={showPassword ? "text" : props.type}
        id={props.id}
        onChange={props.onChange}
        onFocus={props.onFocus}
        autoComplete="off"
        name={props.name}
      />
      <label className="text-input__label" htmlFor={props.id}>
        {props.label}
      </label>
      {/* If there is an error for this input return error message */}
      {props.error === "" ? null : (
        <div
          className={
            props.error
              ? "text-input__error-message hide"
              : "text-input__error-message"
          }
        >
          <span>
            <ErrorOutlineIcon />
          </span>
          {props.error}
        </div>
      )}
      {/* Show and hide password on click of eye icon */}
      <button
        type="button"
        className="text-input__icon btn-icon"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <span className="password-display">
            <VisibilityOffIcon />
          </span>
        ) : (
          <span className="password-hide">
            <VisibilityIcon />
          </span>
        )}
      </button>
    </div>
  );
}
