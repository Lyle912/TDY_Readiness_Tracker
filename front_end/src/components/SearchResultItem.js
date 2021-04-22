import React, { useState } from "react";

import "../styles/SearchResults.css";

export default function SearchResultItem({ member }) {
  const [showDetails, toggleDetails] = useState(false);
  const [vaccines, setVaccines] = useState([]);
  const {
    id,
    first_name,
    last_name,
    rank,
    age,
    mos,
    cac_expiration,
    dl_expiration,
    gtc_expiration,
  } = member;

  function getHiddenStyle() {
    return {
      display: showDetails ? "grid" : "none",
    };
  }
  function isCurrent(date) {
    return new Date(date).getTime() > new Date().getTime();
  }
  return (
    <div>
      <div
        className="member-item"
        onClick={() => {
          toggleDetails(!showDetails);
          if (!showDetails) fetch(`http://localhost:5002/fetchVaccines/${id}`, { method: "GET" })
            .then((res) => res.json())
            .then((jsonRes) => setVaccines(jsonRes))
        }}
      >
        <span className="member-name"><strong>Name: </strong>{first_name} {last_name}</span>
        <span className="member-paygrade"><strong>Pay Grade: </strong>{rank}</span>
        <span className="member-jobcode"><strong>Job Code: </strong>{mos}</span>
        <span className="member-cac"> <strong>CAC: </strong>{isCurrent(cac_expiration) ? "Valid" : "Expired"}</span>
        <span className="member-dl"><strong>Driver's License: </strong>{isCurrent(dl_expiration) ? "Valid" : "Expired"}</span>
        <span className="member-gtc"><strong>GTC: </strong>{isCurrent(gtc_expiration) ? "Valid" : "Expired"}</span>
      </div>
      <div style={getHiddenStyle()} className="member-container">
        <div className="member-details">
          <span className="member-details-id"><strong>DOD ID: </strong>{id}</span>
          <span className="member-details-rank"><strong>Rank: </strong>{rank}</span>
          <span className="member-details-cac"><strong>CAC Expiration: </strong>{cac_expiration.slice(0,10)}</span>
          <span className="member-details-firstName"><strong>First Name: </strong>{first_name}</span>
          <span className="member-details-jobcode"><strong>Job Code: </strong>{mos}</span>
          <span className="member-details-dl"><strong>License Exipration: </strong>{dl_expiration.slice(0,10)}</span>
          <span className="member-details-lastName"><strong>Last Name: </strong>{last_name}</span>
          <span className="member-details-age"><strong>Age: </strong>{age}</span>
          <span className="member-details-gtc"><strong>GTC Expiration: </strong>{gtc_expiration.slice(0,10)}</span>
          <span className="member-details-buttons">
          <button type="button">Update</button>
          <div class="divider"/>
          <button type="button">Delete</button>
          </span>
        </div>
        <div className="member-details-right">
        <label for="member-details-right"><strong>Vaccines:</strong></label>
          <span className="member-details-vaccines">
            {vaccines.map(vaccine => <div className="member-vaccine">{vaccine.vaccine_name}</div>)}
          </span>
        </div>
      </div>
    </div> 
  );
}
