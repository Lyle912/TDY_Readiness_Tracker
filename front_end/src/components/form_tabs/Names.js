import React from "react";

import ItemForm from "./ItemForm";
import RankDrop from "./RankDrop";

import "../../styles/Names.css"

export default function Names ({ setForm, formData, navigation }){
  const { firstName, lastName, age, mos, rank } = formData;
  const { next } = navigation;

  return (
    <div className="container">
      <div className="heading">
      <h3>Personal Information</h3>
      <p>Please enter your personal information</p>
      </div>
    <div className="form">
      <ItemForm
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={setForm}
        required
      />
      <ItemForm
        label="Last Name"
        name="lastName"
        value={lastName}
        onChange={setForm}
      />
      <ItemForm
        label="Age"
        name="age"
        value={age}
        onChange={setForm}
      />
      <ItemForm
      label="MOS"
      name="mos"
      value={mos}
      onChange={setForm}
      />
      <RankDrop
        label="Rank"
        name="rank"
        value={rank}
        onChange={setForm}
      />
      </div>
      <div className='buttonsss'>
        <button className="button" onClick={next}>Next</button>
      </div>
    </div>
  );
};