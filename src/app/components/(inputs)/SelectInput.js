"use client";

import "./SelectInput.scss";

import { useState } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function SelectInput(props) {
  // Show hide password

  const [showSelect, setShowSelect] = useState(false);
  const [selectValue, setSelectValue] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = () => {
    setIsOpen(!isOpen);
  };

  const options = props.options;

  const handleSelectValue = (option) => {
    setSelectValue(option);
  };

  return (
    <div className="input-select">
      <button
        className={
          props.class ? `"input__select" ${props.class}` : "input__select"
        }
        placeholder=" "
        type="button"
        // type={showSelect ? "text" : props.type}
        id={props.id}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onClick={handleSelect}
        name={props.name}
      >
        {selectValue ? selectValue : <span className="label-hide">s</span>}
      </button>

      <label className="select-input__label" htmlFor={props.id}>
        {props.label}
      </label>
      {/* If there is an error for this input return error message */}
      {props.error === "" ? null : (
        <div
          className={
            props.error
              ? "select-input__error-message hide"
              : "select-input__error-message"
          }
        >
          <span>
            <ErrorOutlineIcon />
          </span>
          {props.error}
        </div>
      )}
      {/* Show and hide password on click of eye icon */}
      <button type="button" className="select-input__icon btn-icon">
        {showSelect ? (
          <span className="password-display">
            <ExpandLessIcon />
          </span>
        ) : (
          <span className="password-hide">
            <ExpandMoreIcon />
          </span>
        )}
      </button>

      {/* Select options */}
      {isOpen && (
        <ul className="input-select__options">
          {props.options.map((option) => {
            return (
              <li key={option}>
                <button
                  className="btn btn-select"
                  type="button"
                  id={option}
                  onClick={() => handleSelectValue(option)}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
