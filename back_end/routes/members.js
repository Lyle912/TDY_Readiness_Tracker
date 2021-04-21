const express = require("express");
const router = express.Router();
const knex = require("../db/knexConfig");

/* GET users listing. */
router.get("/", function (req, res, next) {
  var countryId = knex
    .select("id")
    .from("countries")
    .where("country_name", "UAE");

  var vaccinesNeeded = knex
    .select("vaccine_id")
    .from("vaccine_country")
    .whereIn("country_id", countryId);

  var vaccinesNeededCount = knex
    .count("vaccine_id")
    .from("vaccine_country")
    .whereIn("country_id", countryId);

  var memberWithVaccine = knex
    .select("member_id")
    .count("member_id")
    .from("member_vaccine")
    .whereIn("vaccine_id", vaccinesNeeded)
    .groupBy("member_id");

  var countStuff = knex
    .select("member_id")
    .from(memberWithVaccine.as("m"))
    .where("m.count", vaccinesNeededCount)

  var getNames = knex
    .select(knex.raw("first_name || ' ' ||last_name as name"))
    //.select('*')
    .from('members')
    .whereIn('members.id', countStuff)
    // .innerJoin("visas", "members.id", "visas.member_id")
    // .innerJoin("countries", "visas.country_id", "countries.id")
    // .where("country_name", "UAE")


    .then((data) => res.json(data));
});

//res.send('respond with a resource');
// var query = knex("members");
// if (2 > 1) {
//   query
    // .innerJoin("visas", "members.id", "visas.member_id")
    // .innerJoin("countries", "visas.country_id", "countries.id")
    // .where("country_name", "UAE")
// }
// if(3>2){
//   query
//     .innerJoin("member_vaccine", "members.id", "member_vaccine.member_id" )
//     .innerJoin("vaccines", "vaccine_id", "vaccines.id")
//     .where("last_name", "Rubin")
//     .select("vaccine_name", "expiration")

//SELECT a.name FROM airlines a LEFT OUTER JOIN airlines_destinations ad
//ON (a.id=ad.airlineId) AND ad destinationId=4 WHERE ad.destinationId IS NULL;

// }

//.innerJoin("")

// .where("age", ">", 30)
// .andWhere("rank", "O3")
// query.then((data) => res.json(data));
// });

router.post("/", (req, res, next) => {
  const newMember = req.body;
  const {
    first_name,
    last_name,
    rank,
    mos,
    age,
    cac_expiration,
    gtc_expiration,
    dl_expiration,
  } = req.body;
  knex("members").then(res.send("New User Added"));
  // .insert(newMember)
  //console.log(first_name, last_name)
});

module.exports = router;