const express = require("express");
const router = express.Router();
const cors = require("cors");
const knex = require("../db/knexConfig");

router.use(cors());

router.delete("/:memberId", function (req, res, next) {
  knex("members")
    .where("id", req.params.memberId)
    .del()
    .then((foo) =>
      knex("member_vaccine")
        .where("member_vaccine.member_id", req.params.memberId)
        .del()
        .then(res.send("Deleted"))
    );
});

module.exports = router;
