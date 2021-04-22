import React from "react";
import ItemForm from "./ItemForm";
import Vaccines from "../../utility/vaccine_list";

export default function Vaccine ({ setForm, navigation }){
  const { previous, next } = navigation;

  return (
    <div className="form">
      <h3>Vaccines </h3>
      <p>Please select the vaccines that you have received</p>
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
      <div>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};