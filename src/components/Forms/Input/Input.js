import React from "react";
import './Input.css';

const Input = (props) => {
  const inputClassName = props.hasError
    ? "form-control invalid"
    : "form-control";

  let formElement;

  if (props.control === "input") {
    formElement = (
      <input
        type={props.type}
        id={props.id}
        required={props.required}
        value={props.value}
        placeholder={props.placeholder}
        onChange= {props.onChange}
        onBlur={props.onBlur}
      />
    );
  } else if (props.control === "textarea") {
    formElement = (
      <textarea
        id={props.id}
        rows={props.rows}
        required={props.required}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    );
  }

  return (
    <div className={inputClassName}>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      {formElement}

      {props.hasError && (
        <p className="error-text"> {props.errorMessage} </p>
      )}
    </div>
  );
};

export default Input;
