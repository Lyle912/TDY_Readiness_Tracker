import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/SearchResults.css";

export default function SearchResultItem({ member }) {
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
  const [showDetails, toggleDetails] = useState(false);
  const [vaccines, setVaccines] = useState([]);
  const [isUpdating, toggleUpdate] = useState(false);
  const [currentFirst, updateFirst] = useState(first_name);
  const [currentLast, updateLast] = useState(last_name);
  const [currentRank, updateRank] = useState(rank);
  const [currentJob, updateJob] = useState(mos);
  const [currentAge, updateAge] = useState(age);
  const [currentCAC, updateCAC] = useState(cac_expiration.slice(0, 10));
  const [currentDL, updateDL] = useState(dl_expiration.slice(0, 10));
  const [currentGTC, updateGTC] = useState(gtc_expiration.slice(0, 10));
  var history = useHistory();

  function isCurrent(date) {
    return new Date(date).getTime() > new Date().getTime();
  }
  function getHiddenStyle() {
    return {
      display: showDetails ? "grid" : "none",
    };
  }
  function getFormStyleText() {
    return {
      display: isUpdating ? "none" : "inline",
    };
  }
  function getFormStyleInput() {
    return {
      display: isUpdating ? "inline" : "none",
    };
  }

  function updateUser() {
    fetch(
      `http://localhost:5002/updateMember?id=${id}&first=${currentFirst}&last=${currentLast}&rank=${currentRank}&age=${currentAge}&job=${currentJob}&cac=${currentCAC.replace(/-/g, "")}&dl=${currentDL.replace(/-/g, "")}&gtc=${currentGTC.replace(/-/g, "")}`
      ,{ method: "PUT" }
    )
    .then(foo => toggleUpdate(!isUpdating))
    .then(history.push(`${window.location.pathname}/`))
  }

  function deleteUser() {
    fetch(`http://localhost:5002/deleteMember/${id}`, {
      method: "DELETE",
    }).then(history.push(`${window.location.pathname}/`));
  }
  return (
    <div>
      <div
        className="member-item"
        onClick={() => {
          toggleDetails(!showDetails);
          if (!showDetails)
            fetch(`http://localhost:5002/fetchVaccines/${id}`, {
              method: "GET",
            })
              .then((res) => res.json())
              .then((jsonRes) => setVaccines(jsonRes));
        }}
      >
        <span className="member-name">
          <strong>Name: </strong>
          {first_name} {last_name}
        </span>
        <span className="member-paygrade">
          <strong>Pay Grade: </strong>
          {rank}
        </span>
        <span className="member-jobcode">
          <strong>Job Code: </strong>
          {mos}
        </span>
        <span className="member-cac">
          {" "}
          <strong>CAC: </strong>
          {isCurrent(cac_expiration) ? "Valid" : "Expired"}
        </span>
        <span className="member-dl">
          <strong>Driver's License: </strong>
          {isCurrent(dl_expiration) ? "Valid" : "Expired"}
        </span>
        <span className="member-gtc">
          <strong>GTC: </strong>
          {isCurrent(gtc_expiration) ? "Valid" : "Expired"}
        </span>
      </div>
      <div style={getHiddenStyle()} className="member-container">
        <div className="member-details">
          <span className="member-details-id">
            <strong>DOD ID: </strong>
            {id}
          </span>
          <span className="member-details-rank">
            <strong>Rank: </strong>
            <span style={getFormStyleText()}>{rank}</span>
            <input
              style={getFormStyleInput()}
              type="text"
              value={currentRank}
              onChange={(event) => updateRank(event.target.value)}
            ></input>
          </span>
          <span className="member-details-cac">
            <strong>CAC Expiration: </strong>
            <span style={getFormStyleText()}>
              {cac_expiration.slice(0, 10)}
            </span>
            <input
              style={getFormStyleInput()}
              type="text"
              value={currentCAC}
              onChange={(event) => updateCAC(event.target.value)}
            ></input>
          </span>
          <span className="member-details-firstName">
            <strong>First Name: </strong>
            <span style={getFormStyleText()}>{first_name}</span>
            <input
              style={getFormStyleInput()}
              type="text"
              value={currentFirst}
              onChange={(event) => updateFirst(event.target.value)}
            ></input>
          </span>
          <span className="member-details-jobcode">
            <strong>Job Code: </strong>
            <span style={getFormStyleText()}>{mos}</span>
            <input
              style={getFormStyleInput()}
              type="text"
              value={currentJob}
              onChange={(event) => updateJob(event.target.value)}
            ></input>
          </span>
          <span className="member-details-dl">
            <strong>License Exipration: </strong>
            <span style={getFormStyleText()}>{dl_expiration.slice(0, 10)}</span>
            <input
              style={getFormStyleInput()}
              type="text"
              value={currentDL}
              onChange={(event) => updateDL(event.target.value)}
            ></input>
          </span>
          <span className="member-details-lastName">
            <strong>Last Name: </strong>
            <span style={getFormStyleText()}>{last_name}</span>
            <input
              style={getFormStyleInput()}
              type="text"
              value={currentLast}
              onChange={(event) => updateLast(event.target.value)}
            ></input>
          </span>
          <span className="member-details-age">
            <strong>Age: </strong>
            <span style={getFormStyleText()}>{age}</span>
            <input
              style={getFormStyleInput()}
              type="text"
              value={currentAge}
              onChange={(event) => updateAge(event.target.value)}
            ></input>
          </span>
          <span className="member-details-gtc">
            <strong>GTC Expiration: </strong>
            <span style={getFormStyleText()}>
              {gtc_expiration.slice(0, 10)}
            </span>
            <input
              style={getFormStyleInput()}
              type="text"
              value={currentGTC}
              onChange={(event) => updateGTC(event.target.value)}
            ></input>
          </span>
          <span className="member-details-buttons">
            <button
              style={getFormStyleText()}
              type="button"
              onClick={() => toggleUpdate(!isUpdating)}
            >
              Update
            </button>
            <button
              style={getFormStyleInput()}
              type="button"
              onClick={() => updateUser()}
            >
              Confirm Updates
            </button>
            <div class="divider" />
            <button type="button" onClick={() => deleteUser()}>
              Delete
            </button>
          </span>
        </div>
        <div className="member-details-right">
          <label for="member-details-right">
            <strong>Vaccines:</strong>
          </label>
          <span className="member-details-vaccines">
            {vaccines.map((vaccine) => (
              <div className="member-vaccine">{vaccine.vaccine_name}</div>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
