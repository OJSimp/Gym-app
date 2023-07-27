"use client";

import "./DateInput.scss";

import { useState, useEffect, useRef } from "react";

import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function SelectInput(props) {
  const selectRef = useRef(null);
  const [hasDateValue, setHasDateValue] = useState(null);
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

  const handleDate = () => {
    setIsOpen(!isOpen);
  };

  const handleDateValue = (e) => {
    setHasDateValue(e.target.value);
    props.setDateValue(e.target.value);
    return hasDateValue;
  };

  return (
    <div className="input-date" ref={selectRef}>
      <label
        htmlFor={props.id}
        className={`date-input__label ${
          isOpen || hasDateValue ? "date-input__label--up" : ""
        }`}
      >
        {props.label}
      </label>
      <input
        className={`input-date__dropdown ${
          isOpen ? "input-date__dropdown--open" : ""
        }`}
        type="date"
        id={props.id}
        onChange={handleDateValue}
        onFocus={props.onFocus}
        onClick={handleDate}
        name={props.name}
        autoFocus
      />

      {/* If there is an error for this input return error message */}
      {props.error === "" ? null : (
        <div
          className={
            props.error
              ? "date-input__error-message hide"
              : "date-input__error-message"
          }
        >
          <span>
            <ErrorOutlineIcon />
          </span>
          {props.error}
        </div>
      )}
      <span className="date-input__icon">
        {props.label === "Date of birth" ? (
          <PermContactCalendarIcon />
        ) : (
          <DateRangeIcon />
        )}
      </span>
    </div>
  );
}
