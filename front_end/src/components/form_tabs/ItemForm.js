import React from "react";

export default function ItemForm ({ label, children, type = "text", ...otherProps }){
return (
  <div className="item">
    
      <>
        <label className='label'>{label}</label>
        <input className='input' type={type} {...otherProps} />
      </>
    
  </div>
);
};