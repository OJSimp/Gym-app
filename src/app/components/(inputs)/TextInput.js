import "./TextInput.scss";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function TextInput(props) {
  return (
    <div className="input-text">
      <input
        className={props.class ? `"input__text" ${props.class}` : "input__text"}
        placeholder=" "
        type={props.type}
        id={props.id}
        autoComplete="off"
        onChange={props.onChange}
        onFocus={props.onFocus}
        name={props.name}
        autoFocus
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
    </div>
  );
}
