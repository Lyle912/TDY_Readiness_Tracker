import React from "react";
import "../../styles/Vaccine.css";
export default function Review({ formData, navigation }) {
  const { go, previous } = navigation;

  function buildNewMember(data) {
    let vaccineArray = [];
    for (const [key, value] of Object.entries(data)) {
      if (value.toString() === "true") vaccineArray.push(key);
    }
    let newMember = {
      first_name: data.firstName,
      last_name: data.lastName,
      rank: data.rank.replace(/-/g, ""),
      mos: data.mos,
      age: parseInt(data.age),
      cac_expiration: data.cac.replace(/-/g, ""),
      gtc_expiration: data.gtc.replace(/-/g, ""),
      dl_expiration: data.dl.replace(/-/g, ""),
      vaccines: vaccineArray,
    };
    //console.log(newMember);
    return newMember;
  }

  function handleSubmit() {
    buildNewMember(formData);
    fetch(`http://localhost:5002/members`, {
      method: "POST",
      body: JSON.stringify(buildNewMember(formData)),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((foo) => {
      for (var field in formData) {
        delete formData[field];
      }
    });
  }

  function vaccineList() {
    var trueVac = [];
    for (var field in formData) {
      if (formData[field] === true) {
        trueVac.push(field);
      }
    }
    return trueVac;
  }

  return (
    <div className="container">
      <h3 className="heading">Review your data</h3>
      <div className="review_form">
        <h4>
          Personal Information
          <button onClick={() => go("names")}>Edit</button>
        </h4>
        <div className='pers_list'>
          First name: {`${formData["firstName"]}`}
          <br />
          Last Name: {`${formData["lastName"]}`}
          <br />
          Age: {`${formData["age"]}`}
          <br />
          Rank: {`${formData["rank"]}`}
          <br />
          MOS: {`${formData["mos"]}`}
        </div>

        <h4>
          Expiraton Dates:
          <button onClick={() => go("expiration")}>Edit</button>
        </h4>

        <div>
          CAC Expiration: {` ${new Date(formData["cac"])}`}
          <br />
          GTC Expiration: {`${new Date(formData["gtc"])}`}
          <br />
          DL Expiration: {`${new Date(formData["dl"])}`}
        </div>

        <h4>
          Vaccines:
          <button onClick={() => go("vaccine")}>Edit</button>
        </h4>

        <div>
          Vaccine List: {`${vaccineList()}`}
          <br />
        </div>
      </div>

      <div>
        <button className="button" onClick={previous}>
          Previous
        </button>
        <button
          className="button"
          onClick={() => {
            handleSubmit();
            go("submit");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
