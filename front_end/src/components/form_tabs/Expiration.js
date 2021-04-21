import React from "react";

import ItemForm from "./ItemForm";


export default function Expiration ({ setForm, formData, navigation }){
  const { gtc, cac, dl } = formData;

  const { previous, next } = navigation;

  return (
    <div className="form">
      <h3>Expiration Dates</h3>
      <p>Please enter the expiration dates for the corresponding items</p>
      
      
      <ItemForm label="GTC Expiration" type ='date' name="gtc" value={gtc} onChange={setForm} />
      <ItemForm label="CAC Expiration" name="cac" type ='date' value={cac} onChange={setForm} />
      <ItemForm type="date" label="DL Expiration" name="dl" value={dl} onChange={setForm} />
      <div>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};