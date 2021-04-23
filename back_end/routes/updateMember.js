const express = require("express");
const router = express.Router();
const cors = require("cors");
const knex = require("../db/knexConfig");

router.use(cors());

router.put("/", function (req, res, next) {
  const { id, first, last, rank, job, age, cac, gtc, dl } = req.query;
  knex("members")
    .where("id", id)
    .update({
      first_name: first,
      last_name: last,
      rank: rank,
      mos: job,
      age: age,
      cac_expiration: cac,
      gtc_expiration: gtc,
      dl_expiration: dl,
    })
    .then(res.send("Complete"));
});

module.exports = router;
