const express = require("express");
const router = express.Router();
const cors = require("cors");
const knex = require("../db/knexConfig");

router.use(cors());
/* GET users listing. */
function isCurrent(date) {
  return new Date(date).getTime() > new Date().getTime();
}
router.get("/", function (req, res, next) {
  let country = req.query.country;
  let rank = req.query.rank;
  let rental = req.query.rental==="true";
  let cac = req.query.cac==="true";
  let license = req.query.dl==="true";
  let gtc = req.query.gtc==="true";
  console.log(rental)

  var getCountryId = knex
    .select("id")
    .from("countries")
    .where("country_name", country);

  var getVaccinesNeeded = knex
    .select("vaccine_id")
    .from("vaccine_country")
    .whereIn("country_id", getCountryId);

  var getVaccinesNeededCount = knex
    .count("vaccine_id")
    .from("vaccine_country")
    .whereIn("country_id", getCountryId);

  var getMembersWithVaccine = knex
    .select("member_id")
    .count("member_id")
    .from("member_vaccine")
    .whereIn("vaccine_id", getVaccinesNeeded)
    .groupBy("member_id");

  var compareCounts = knex
    .select("member_id")
    .from(getMembersWithVaccine.as("m"))
    .where("m.count", getVaccinesNeededCount);

  var getNames = knex
    //.select(knex.raw("first_name || ' ' ||last_name as name"))
    .select("*")
    .from("members")
    .whereIn("members.id", compareCounts)

    .then((resultArray) => {
      if (rank) resultArray = resultArray.filter((person) => rank.includes(person.rank));
      if (rental) resultArray = resultArray.filter(person => person.age >= 25 && isCurrent(person.dl_expiration))
      if (cac) resultArray = resultArray.filter(person => isCurrent(person.cac_expiration))
      if (license) resultArray = resultArray.filter(person => isCurrent(person.dl_expiration))
      if (gtc) resultArray = resultArray.filter(person => isCurrent(person.gtc_expiration))
      return resultArray;
    })
    .then((data) => res.json(data));
});

router.post("/", (req, res, next) => {
  const {
    first_name,
    last_name,
    rank,
    mos,
    age,
    cac_expiration,
    gtc_expiration,
    dl_expiration,
    vaccines,
  } = req.body;

  const newMember = {
    first_name,
    last_name,
    rank,
    mos,
    age,
    cac_expiration,
    gtc_expiration,
    dl_expiration,
  };

  knex("members")
    .insert(newMember)
    .returning("id")
    .then((memberId) => {
      knex
        .select("*")
        .from("vaccines")
        .whereIn("vaccine_name", vaccines)
        .then((vaccines) => {
          vaccines.forEach((vaccine) => {
            knex("member_vaccine")
              .insert({
                member_id: memberId[0],
                vaccine_id: vaccine.id,
                expiration: "20300101",
              })
              .then();
          });
        });
    })
    .then(res.status(201).send("New Member Added"));
});

module.exports = router;
