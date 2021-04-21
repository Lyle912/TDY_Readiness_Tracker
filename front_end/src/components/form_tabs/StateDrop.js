import React from "react";

const vaccines = [
  ['', 'Please select'],
  ["COVID-19", 'COVID'],["Influenza", 'Flu'],
  ["Small Pox", 'Small Pox'],["Anthrax", 'Anthrax'],
  ["Polio", 'Polio'], ["Tdap", 'Tdap']
]

export default function StateDrop ({ label, ...others }){
  return (
  <>
    <label>{label}</label>
      <select {...others}>
        {vaccines.map(([value, name]) => (
          <option value={value}>{name}</option>
      ))}
    </select>
  </>
  );
};