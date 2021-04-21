import React, { useReducer, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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

  // let {
  //   desiredRank,
  //   desiredCountry,
  //   canDrive,
  //   cacExpired,
  //   gtcExpired,
  //   licenseExpired,
  // } = state;

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
    console.log("hello")
    var requestOptions = {
      method: "GET",
      //redirect: "follow",
    };
    fetch(
      `http://localhost:5000/members?country=${state.desiredCountry}&rank=${state.desiredRank}&rental=${state.canDrive}&cac=${state.cacExpired}&dl=${state.licenseExpired}&gtc=${state.gtcExpired}`,
      //'http://localhost:5000/members',
      requestOptions
    )
      .then((res) => res.json())
      .then((jsonRes) => console.log(jsonRes));
  }

  const useStyles = makeStyles((theme) => ({
    button: {
      display: "block",
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

  const classes = useStyles();
  return (
    <form onSubmit={submitForm}>
      <FormControl className={classes.formControl}>
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
          <MenuItem value={"Bahrain"}>Bahrain</MenuItem>
          <MenuItem value={"Brazil"}>Brazil</MenuItem>
          <MenuItem value={"Jordan"}>Jordan</MenuItem>
          <MenuItem value={"Kenya"}>Kenya</MenuItem>
          <MenuItem value={"Kuwait"}>Kuwait</MenuItem>
          <MenuItem value={"Moroco"}>Morocco</MenuItem>
          <MenuItem value={"Oman"}>Oman</MenuItem>
          <MenuItem value={"Paraguay"}>Paraguay</MenuItem>
          <MenuItem value={"Qatar"}>Qatar</MenuItem>
          <MenuItem value={"Saudi Arabia"}>Saudi Arabia</MenuItem>
          <MenuItem value={"UAE"}>UAE</MenuItem>
        </Select>
      </FormControl>
      <section name="ranks">
        <label for="ranks">Ranks:</label>
        <section name="enlisted">
          <input
            type="checkbox"
            id="E1"
            name="E1"
            onChange={handleRankChange}
          />
          <label for="E1">E-1</label>
          <input
            type="checkbox"
            id="E2"
            name="E2"
            onChange={handleRankChange}
          />
          <label for="E2">E-2</label>
          <input
            type="checkbox"
            id="E3"
            name="E3"
            onChange={handleRankChange}
          />
          <label for="E3">E-3</label>
          <input
            type="checkbox"
            id="E4"
            name="E4"
            onChange={handleRankChange}
          />
          <label for="E4">E-4</label>
          <input
            type="checkbox"
            id="E5"
            name="E5"
            onChange={handleRankChange}
          />
          <label for="E5">E-5</label>
          <input
            type="checkbox"
            id="E6"
            name="E6"
            onChange={handleRankChange}
          />
          <label for="E6">E-6</label>
          <input
            type="checkbox"
            id="E7"
            name="E7"
            onChange={handleRankChange}
          />
          <label for="E7">E-7</label>
          <input
            type="checkbox"
            id="E8"
            name="E8"
            onChange={handleRankChange}
          />
          <label for="E8">E-8</label>
          <input
            type="checkbox"
            id="E9"
            name="E9"
            onChange={handleRankChange}
          />
          <label for="E9">E-9</label>
        </section>
        <section name="warrant">
          <input
            type="checkbox"
            id="W1"
            name="W1"
            onChange={handleRankChange}
          />
          <label for="W1">W-1</label>
          <input
            type="checkbox"
            id="W2"
            name="W2"
            onChange={handleRankChange}
          />
          <label for="W2">W-2</label>
          <input
            type="checkbox"
            id="W3"
            name="W3"
            onChange={handleRankChange}
          />
          <label for="W3">W-3</label>
          <input
            type="checkbox"
            id="W4"
            name="W4"
            onChange={handleRankChange}
          />
          <label for="W4">W-4</label>
          <input
            type="checkbox"
            id="W5"
            name="W5"
            onChange={handleRankChange}
          />
          <label for="W5">W-5</label>
        </section>
        <section name="officer">
          <input
            type="checkbox"
            id="O1"
            name="O1"
            onChange={handleRankChange}
          />
          <label for="O1">O-1</label>
          <input
            type="checkbox"
            id="O2"
            name="O2"
            onChange={handleRankChange}
          />
          <label for="O2">O-2</label>
          <input
            type="checkbox"
            id="O3"
            name="O3"
            onChange={handleRankChange}
          />
          <label for="O3">O-3</label>
          <input
            type="checkbox"
            id="O4"
            name="O4"
            onChange={handleRankChange}
          />
          <label for="O4">O-4</label>
          <input
            type="checkbox"
            id="O5"
            name="O5"
            onChange={handleRankChange}
          />
          <label for="O5">O-5</label>
          <input
            type="checkbox"
            id="O6"
            name="O6"
            onChange={handleRankChange}
          />
          <label for="O6">O-6</label>
          <input
            type="checkbox"
            id="O7"
            name="O7"
            onChange={handleRankChange}
          />
          <label for="O7">O-7</label>
          <input
            type="checkbox"
            id="O8"
            name="O8"
            onChange={handleRankChange}
          />
          <label for="O8">O-8</label>
          <input
            type="checkbox"
            id="O9"
            name="O9"
            onChange={handleRankChange}
          />
          <label for="O9">O-9</label>
          <input
            type="checkbox"
            id="O10"
            name="O10"
            onChange={handleRankChange}
          />
          <label for="O10">O-10</label>
        </section>
      </section>
      <section name="rentalCar">
        <label for="rental">Can get rental:</label>
        <input
          type="checkbox"
          id="rental"
          name="rental"
          onChange={() => dispatch({ type: "updateRentalEligibility" })}
        />
      </section>
      <section name="expirations">
        <label for="expirations">Expirations:</label>
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
      <input type="submit"  />
    </form>
  );
}
