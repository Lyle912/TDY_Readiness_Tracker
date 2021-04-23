import React from "react";

const ranks = [
  ['', 'Please select'],
  ["E-1", 'E-1'],["E-2", 'E-2'],
  ["E-3", 'E-3'],["E-4", 'E-4'],['E-5', 'E-5'],
  ["E-6", 'E-6'], ["E-7", 'E-7'],
  ['E-8', 'E-8'], ['E-9', 'E-9'],
  ['W-1', 'W-1'], ['W-2', 'W-2'],
  ['W-3', 'W-3'], ['W-4', 'W-4'], ['W-5', 'W-5'],
  ['O-1', 'O-1'], ['O-2', 'O-2'],
  ['O-3', 'O-3'], ['O-4', 'O-4'],
  ['O-5', 'O-5'], ['O-6', 'O-6'],
  ['O-7', 'O-7'], ['O-8', 'O-8'],
  ['O-9', 'O-9'], ['O-10', 'O-10'],
]

export default function RankDrop ({ label, ...others }){
  return (
  <>
    <label className='label'>{label}</label>
      <select className='input' {...others}>
        {ranks.map(([value, name], k) => (
          <option value={value} key={k}>{name}</option>
      ))}
    </select>
  </>
  );
};