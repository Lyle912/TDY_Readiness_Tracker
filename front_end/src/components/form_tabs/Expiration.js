import React from "react";
import "../../styles/Expiration.css";
import ItemForm from "./ItemForm";

export default function Expiration({ setForm, formData, navigation }) {
  const { gtc, cac, dl } = formData;
  const { previous, next } = navigation;

  return (
    <div className="exp_container">
      <div className="exp_heading">
        <h3>Expiration Dates</h3>
        <p>Please enter the expiration dates for the corresponding items</p>
      </div>
      <div className="expiration_form">
        <ItemForm
          label="GTC Expiration"
          type="date"
          name="gtc"
          value={gtc}
          onChange={setForm}
        />
        <ItemForm
          label="CAC Expiration"
          name="cac"
          type="date"
          value={cac}
          onChange={setForm}
        />
        <ItemForm
          type="date"
          label="Driver's License Expiration"
          name="dl"
          value={dl}
          onChange={setForm}
        />
      </div>

      <div className="exp_buttonsss">
        <button className="button" onClick={previous}>
          Previous
        </button>
        <button className="button" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
}
