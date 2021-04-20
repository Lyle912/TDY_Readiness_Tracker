exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("member_vaccine")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("member_vaccine").insert([
        { member_id: 1, vaccine_id: 1, expiration: 20220215 },
        { member_id: 1, vaccine_id: 2, expiration: 20220216 },
        { member_id: 1, vaccine_id: 3, expiration: 20220217 },
        { member_id: 1, vaccine_id: 4, expiration: 20220218 },
        { member_id: 1, vaccine_id: 5, expiration: 20220219 },
        { member_id: 3, vaccine_id: 1, expiration: 20190815 },
        { member_id: 3, vaccine_id: 2, expiration: 20221205 },
        { member_id: 3, vaccine_id: 3, expiration: 20230122 },
        { member_id: 4, vaccine_id: 1, expiration: 20190101 },
        { member_id: 4, vaccine_id: 2, expiration: 20230105 },
        { member_id: 4, vaccine_id: 3, expiration: 20180222 },
        { member_id: 4, vaccine_id: 4, expiration: 20230115 },
        { member_id: 4, vaccine_id: 5, expiration: 20241219 },
        { member_id: 5, vaccine_id: 2, expiration: 20211216 },
        { member_id: 6, vaccine_id: 4, expiration: 20210618 },
        { member_id: 6, vaccine_id: 5, expiration: 20200120 },
        { member_id: 7, vaccine_id: 1, expiration: 20300724 },
        { member_id: 7, vaccine_id: 2, expiration: 20250316 },
        { member_id: 7, vaccine_id: 3, expiration: 20220618 },
        { member_id: 7, vaccine_id: 4, expiration: 20200825 },
        { member_id: 7, vaccine_id: 5, expiration: 20221025 },
        { member_id: 9, vaccine_id: 1, expiration: 20201025 },
        { member_id: 9, vaccine_id: 2, expiration: 20210920 },
        { member_id: 9, vaccine_id: 3, expiration: 20250316 },
        { member_id: 9, vaccine_id: 4, expiration: 20220618 },
        { member_id: 9, vaccine_id: 5, expiration: 20200825 },
        { member_id: 10, vaccine_id: 3, expiration: 20221025 },
        { member_id: 11, vaccine_id: 4, expiration: 20201025 },
        { member_id: 11, vaccine_id: 5, expiration: 20210920 },
      ]);
    });
};
