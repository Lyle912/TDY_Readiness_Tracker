const express = require("express");
const router = express.Router();
const cors = require("cors");
const knex = require("../db/knexConfig");

router.use(cors());

router.get("/:memberId", function (req, res, next) {
  knex
  .select('*')
  .from("member_vaccine")
  .innerJoin("vaccines", "vaccine_id", "vaccines.id")
  .where("member_id", req.params.memberId)
  .then(data => res.json(data))

})


module.exports = router;