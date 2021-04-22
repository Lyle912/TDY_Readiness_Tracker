import React, { useReducer, useEffect } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import countryList from "../utility/country_list";
import enlistedRankList from "../utility/enlisted_rank_list";
import officerRankList from "../utility/officer_rank_list";
import warrantRankList from "../utility/warrant_rank_list";

export default function SearchQuery() {
  const [state, dispatch] = useReducer(reducer, {
    desiredCountry: "",
    desiredRank: [],
    canDrive: false,
    cacExpired: false,
    gtcExpired: false,
    licenseExpired: false,
    open: false,
  });

  function reducer(state, action) {
    const { type } = action;
    switch (type) {
      case "updateDesiredRanks":
        return { ...state, desiredRank: action.newRanks };
      case "updateRentalEligibility":
        return { ...state, canDrive: !state.canDrive };
      case "updateCACStatus":
        return { ...state, cacExpired: !state.cacExpired };
      case "updateDLStatus":
        return { ...state, licenseExpired: !state.licenseExpired };
      case "updateGTCStatus":
        return { ...state, gtcExpired: !state.gtcExpired };
      case "handleOpenChange":
        return { ...state, open: !state.open };
      case "updateCountry":
        return { ...state, desiredCountry: action.country };
      default:
        return state;
    }
  }

  // let {
  //   desiredRank,
  //   desiredCountry,
  //   canDrive,
  //   cacExpired,
  //   gtcExpired,
  //   licenseExpired,
  //   open
  // } = state;

  useEffect(() => {
    console.log("Rank Array:  ", state.desiredRank);
    console.log("Can Drive:  ", state.canDrive);
    console.log("cacExpired:  ", state.cacExpired);
    console.log("licenseExpired:  ", state.licenseExpired);
    console.log("gtcExpired:  ", state.gtcExpired);
    console.log("Country:  ", state.desiredCountry);
  }, [state]);

  function handleRankChange(e) {
    var newRanks = state.desiredRank;
    newRanks.includes(e.target.name)
      ? (newRanks = newRanks.filter((value) => value !== e.target.name))
      : newRanks.push(e.target.name);
    dispatch({ type: "updateDesiredRanks", newRanks });
  }

  function submitForm(e) {
    e.preventDefault();
    fetch(
      `http://localhost:5000/members?country=${state.desiredCountry}&rank=${state.desiredRank}&rental=${state.canDrive}&cac=${state.cacExpired}&dl=${state.licenseExpired}&gtc=${state.gtcExpired}`,
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((jsonRes) => console.log(jsonRes));
  }

  return (
    <form onSubmit={submitForm}>
      <FormControl style={{ margin: "theme.spacing(1)", minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Country</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={state.open}
          onClose={() => dispatch({ type: "handleOpenChange" })}
          onOpen={() => dispatch({ type: "handleOpenChange" })}
          value={state.country}
          onChange={(e) =>
            dispatch({ type: "updateCountry", country: e.target.value })
          }
        >
          {countryList.map((country) => (
            <MenuItem value={country}>{country}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <section name="ranks">
        <label for="ranks">Ranks:</label>
        <section name="enlisted">
          {enlistedRankList.map((rank) => (
            <span>
              <input
                type="checkbox"
                id={rank}
                name={rank}
                onChange={handleRankChange}
              />
              <label for={rank}>{rank}</label>
            </span>
          ))}
        </section>
        <section name="warrant">
          {warrantRankList.map((rank) => (
            <span>
              <input
                type="checkbox"
                id={rank}
                name={rank}
                onChange={handleRankChange}
              />
              <label for={rank}>{rank}</label>
            </span>
          ))}
        </section>
        <section name="officer">
          {officerRankList.map((rank) => (
            <span>
              <input
                type="checkbox"
                id={rank}
                name={rank}
                onChange={handleRankChange}
              />
              <label for={rank}>{rank}</label>
            </span>
          ))}
        </section>
      </section>
      <section name="rentalCar">
        <label for="rental">Old Enough for Rental Car:</label>
        <input
          type="checkbox"
          id="rental"
          name="rental"
          onChange={() => dispatch({ type: "updateRentalEligibility" })}
        />
      </section>
      <section name="expirations">
        <label for="expirations">Cannot be Expired:</label>
        <input
          type="checkbox"
          id="expiredCAC"
          name="expiredCAC"
          onChange={() => dispatch({ type: "updateCACStatus" })}
        />
        <label for="expiredCAC">CAC</label>
        <input
          type="checkbox"
          id="expiredDL"
          name="expiredDL"
          onChange={() => dispatch({ type: "updateDLStatus" })}
        />
        <label for="expiredDL">Driver's License</label>
        <input
          type="checkbox"
          id="expiredGTC"
          name="expiredGTC"
          onChange={() => dispatch({ type: "updateGTCStatus" })}
        />
        <label for="expiredGTC">Government Travel Card</label>
      </section>
      <input type="submit" />
    </form>
  );
}
