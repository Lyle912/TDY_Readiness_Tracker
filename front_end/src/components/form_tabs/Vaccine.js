import React from "react";
import StateDrop from "./StateDrop";
import ItemForm from "./ItemForm";

export default function Vaccine ({ setForm, formData, navigation }){
  const { vaccine1, vaccine2, vaccine3, covid, influenza } = formData;
  const { previous, next } = navigation;

  return (
    <div className="form">
      <h3>Vaccines </h3>
      <p>Please select the vaccines that you have received</p>

      {/* <StateDrop label='Vaccine: ' name='vaccine1' value={vaccine1} onChange={setForm} /><br />
      <StateDrop label='Vaccine: ' name='vaccine2' value={vaccine2} onChange={setForm} /><br />
      <StateDrop label='Vaccine: ' name='vaccine3' value={vaccine3} onChange={setForm} /> */}
      <ItemForm
        label="Covid-19"
        name="covid"
        value={covid}
        onChange={setForm}
        type="checkbox"
      />
      <ItemForm
        label="Influenza"
        name="influenza"
        value={influenza}
        onChange={setForm}
        type="checkbox"
      />
      <div>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};