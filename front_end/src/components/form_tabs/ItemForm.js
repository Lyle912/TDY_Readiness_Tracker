import React from "react";

export default function ItemForm ({ label, children, type = "text", ...otherProps }){
return (
  <div>
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