import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  console.log(otherProps);
  return (
    <div className="group">
      <input {...otherProps} className="form-input" />
      {label && (
        <label
          htmlFor=""
          className={`form-input-label ${otherProps.value.length && "shrink"}`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
