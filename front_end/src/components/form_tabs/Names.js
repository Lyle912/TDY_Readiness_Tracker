import React from "react";

import ItemForm from "./ItemForm";
import RankDrop from "./RankDrop";

export default function Names ({ setForm, formData, navigation }){
  const { firstName, lastName, age, rank } = formData;

  const { next } = navigation;

  return (
    <div className="form">
      
      <ItemForm
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={setForm}
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
      <RankDrop
        label="Rank"
        name="rank"
        value={rank}
        onChange={setForm}
      />

      <div>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};