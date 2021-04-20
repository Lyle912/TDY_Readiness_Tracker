exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("visas")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("visas").insert([
        { member_id: 1, country_id: 2, expiration: 20241219 },
        { member_id: 1, country_id: 5, expiration: 20220215 },
        { member_id: 1, country_id: 6, expiration: 20220216 },
        { member_id: 1, country_id: 10, expiration: 20220217 },
        { member_id: 2, country_id: 4, expiration: 20220218 },
        { member_id: 2, country_id: 5, expiration: 20220219 },
        { member_id: 2, country_id: 7, expiration: 20190815 },
        { member_id: 2, country_id: 10, expiration: 20230122 },
        { member_id: 3, country_id: 2, expiration: 20190101 },
        { member_id: 3, country_id: 10, expiration: 20230105 },
        { member_id: 4, country_id: 2, expiration: 20180222 },
        { member_id: 4, country_id: 5, expiration: 20230115 },
        { member_id: 4, country_id: 9, expiration: 20241219 },
        { member_id: 4, country_id: 10, expiration: 20211216 },
        { member_id: 5, country_id: 2, expiration: 20210618 },
        { member_id: 5, country_id: 5, expiration: 20200120 },
        { member_id: 5, country_id: 9, expiration: 20300724 },
        { member_id: 6, country_id: 2, expiration: 20250316 },
        { member_id: 6, country_id: 4, expiration: 20220217 },
        { member_id: 6, country_id: 5, expiration: 20220218 },
        { member_id: 6, country_id: 6, expiration: 20220219 },
        { member_id: 6, country_id: 7, expiration: 20190815 },
        { member_id: 7, country_id: 2, expiration: 20221205 },
        { member_id: 7, country_id: 6, expiration: 20230122 },
        { member_id: 7, country_id: 10, expiration: 20190101 },
        { member_id: 8, country_id: 2, expiration: 20230105 },
        { member_id: 8, country_id: 4, expiration: 20180222 },
        { member_id: 8, country_id: 6, expiration: 20230115 },
        { member_id: 8, country_id: 7, expiration: 20241219 },
        { member_id: 8, country_id: 10, expiration: 20220215 },
        { member_id: 9, country_id: 4, expiration: 20220216 },
        { member_id: 9, country_id: 5, expiration: 20220217 },
        { member_id: 9, country_id: 6, expiration: 20220218 },
        { member_id: 9, country_id: 9, expiration: 20220219 },
        { member_id: 9, country_id: 10, expiration: 20190815 },
        { member_id: 10, country_id: 2, expiration: 20221205 },
        { member_id: 10, country_id: 4, expiration: 20230122 },
        { member_id: 10, country_id: 6, expiration: 20190101 },
        { member_id: 10, country_id: 7, expiration: 20230105 },
        { member_id: 10, country_id: 10, expiration: 20180222 },
        { member_id: 11, country_id: 2, expiration: 20230115 },
        { member_id: 11, country_id: 4, expiration: 20241219 },
        { member_id: 11, country_id: 5, expiration: 20211216 },
        { member_id: 11, country_id: 6, expiration: 20210618 },
        { member_id: 11, country_id: 7, expiration: 20200120 },
        { member_id: 11, country_id: 9, expiration: 20300724 },
        { member_id: 11, country_id: 10, expiration: 20250316 },
      ]);
    });
};
