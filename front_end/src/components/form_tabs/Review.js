import React from "react";

export default function Review ({ setForm, formData, navigation }){
  const {
    firstName,
    lastName,
    cac,
    gtc,
    dl,
    age,
    rank
  
    } = formData;

    function vaccineList (){
      var trueVac = [];
      for(var field in formData){
        if (formData[field] === true){
          trueVac.push(field);
        }
      }
      return trueVac;
    }

  const { go } = navigation;

  return (
    <div className="form">
      <h3>Review your data</h3>
      <h4>
        Name
        <button onClick={() => go("names")}>Edit</button>
      </h4>
      <div>
        {" "}
        First name: {`${firstName}`},
        <br />
        Last Name: {`${lastName}`},
        <br />
        Age: {`${age}`}
        <br />
        Rank: {`${rank}`}

      </div>
      
      <h4>
        Expiraton Dates:
        <button onClick={() => go("expiration")}>Edit</button>
      </h4>

      <div>
        CAC Expiration: {` ${new Date (cac)}`},
        <br />
        GTC Expiration: {`${new Date(gtc)}`},
        <br />
        DL Expiration: {`${new Date(dl)}`}
      </div>

      <h4>
        Vaccines:
        <button onClick={() => go("vaccine")}>Edit</button>
      </h4>

      <div>
        Vaccine List: {`${vaccineList()}`}

        <br />
        
      </div>

      <div>
        <button onClick={() => go("submit")}>Submit</button>
      </div>
    </div>
  );
};