import React from "react";
import "../../styles/MultiStepForm.css";

export default function ItemForm ({ label, children, type = "text", ...otherProps }){
return (
  <div className="item">
    {type === "text" ? (
      <>
        <label>{label}</label>
        <input type={type} {...otherProps} />
      </>
    ) : (
      <>
        <label />
        <input type={type} {...otherProps} />
        {label}
      </>
    )}
  </div>
);
};