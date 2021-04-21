import React from "react";

const ranks = [
  ['', 'Please select'],
  ["E-1", 'E-1'],["E-2", 'E-2'],
  ["E-3", 'E-3'],["E-4", 'E-4'],['E-5', 'E-5'],
  ["E-6", 'E-6'], ["E-7", 'E-7'],
  ['E-8', 'E-8'], ['E-9', 'E-9'],
  ['O-1', 'O-1'], ['O-2', 'O-2'],
  ['O-3', 'O-3'], ['O-4', 'O-4'],
  ['O-5', 'O-5']
]

export default function RankDrop ({ label, ...others }){
  return (
  <>
    <label>{label}</label>
      <select {...others}>
        {ranks.map(([value, name]) => (
          <option value={value}>{name}</option>
      ))}
    </select>
  </>
  );
};