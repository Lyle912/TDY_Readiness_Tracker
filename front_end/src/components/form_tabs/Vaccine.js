import React from "react";
import ItemForm from "./ItemForm";
import Vaccines from "../../utility/vaccine_list";
import "../../styles/Vaccine.css"

export default function Vaccine ({ setForm, navigation }){
  const { previous, next } = navigation;

  return (
    <div className='container'>
    <div className='heading'>
      <h3>Vaccines </h3>
      
      <p>Please select the vaccines that you have received</p>
      </div>
      <div className="vac_form">
      {Vaccines.map((vacc, k) => (
        <ItemForm
        key={k}
        label={vacc}
        name={vacc}
        value={vacc}
        onChange={setForm}
        type="checkbox"
        />
      ))}
      </div>
      <div className="buttonsss">
        <button className="button" onClick={previous}>Previous</button>
        <button className="button" onClick={next}>Next</button>
      </div>
    </div>
  );
};