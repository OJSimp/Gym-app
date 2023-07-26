"use client";

import "./SelectInput.scss";

import { useState, useEffect, useRef } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function SelectInput(props) {
  const selectRef = useRef(null);
  const [showSelect, setShowSelect] = useState(false);
  const [selectValue, setSelectValue] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleSelect = () => {
    setIsOpen(!isOpen);
  };

  const options = props.options;

  const handleSelectValue = (option) => {
    setSelectValue(option);
  };

  return (
    <div className="input-select" ref={selectRef}>
      <label
        htmlFor={props.id}
        className={`select-input__label ${
          isOpen || selectValue ? "select-input__label--up" : ""
        }`}
      >
        Gender
        {/* {selectValue ? selectValue : props.label} */}
      </label>
      <button
        className={`input-select__dropdown ${
          isOpen ? "input-select__dropdown--open" : ""
        }`}
        type="button"
        id={props.id}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onClick={handleSelect}
        name={props.name}
      >
        {selectValue ? selectValue : <span className="label-hide"></span>}
      </button>

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
