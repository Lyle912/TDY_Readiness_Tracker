import React from "react";
import "../../styles/Vaccine.css";
export default function Review({ formData, navigation }) {
  const { go, previous } = navigation;

  function buildNewMember(data) {
    let vaccineArray = [];
    for (const [key, value] of Object.entries(data)) {
      if (value.toString() === "true") vaccineArray.push(key);
    }
    if (!data.cac) data.cac = new Date().toISOString().slice(0, 10);
    if (!data.gtc) data.gtc = new Date().toISOString().slice(0, 10);
    if (!data.dl) data.dl = new Date().toISOString().slice(0, 10);
    if(!data.rank) data.rank = "E1"
    if(!data.firstName) data.firstName = "Airman"
    if(!data.lastName) data.lastName = "Snuffy"
    if(!data.age) data.age = "1"
    if(!data.mos) data.mos = "XXXXX"

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
    return trueVac.join(", ");
  }

  return (
    <div className="container">
      <h3 className="heading">Review your data</h3>
      <div className="review_form">
        <div>
          <h3>
            <button onClick={() => go("names")}>Edit</button>
            <u>Personal:</u>
          </h3>
          <div className="pers_listgr">
            <strong>First name: </strong>
            {`${formData["firstName"]}`}
            <br />
            <strong>Last Name: </strong> {`${formData["lastName"]}`}
            <br />
            <strong>Age: </strong>
            {`${formData["age"]}`}
            <br />
            <strong>Rank: </strong>
            {`${formData["rank"]}`}
            <br />
            <strong>MOS: </strong>
            {`${formData["mos"]}`}
          </div>
        </div>

        <div>
          <h3>
            <button onClick={() => go("expiration")}>Edit</button>
            <u>Dates:</u>
          </h3>

          <div>
            <strong>CAC Expiration:</strong>{" "}
            {` ${ formData["cac"] ? new Date(formData["cac"]).toISOString().slice(0, 10) :  new Date().toISOString().slice(0, 10)}`}
            <br />
            <strong>GTC Expiration:</strong>{" "}
            {` ${ formData["gtc"] ? new Date(formData["gtc"]).toISOString().slice(0, 10) :  new Date().toISOString().slice(0, 10)}`}
            <br />
            <strong>License Expiration:</strong>{" "}
            {` ${ formData["dl"] ? new Date(formData["dl"]).toISOString().slice(0, 10) :  new Date().toISOString().slice(0, 10)}`}
          </div>
        </div>

        <div>
          <h3>
            <button onClick={() => go("vaccine")}>Edit</button>
            <u>Vaccines:</u>
          </h3>

          <div>
            {`${vaccineList()}`}
            <br />
          </div>
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
