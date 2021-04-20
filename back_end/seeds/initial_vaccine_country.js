exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("vaccine_country")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("vaccine_country").insert([
        { vaccine_id: 1, country_id: 1 },
        { vaccine_id: 2, country_id: 1 },
        { vaccine_id: 3, country_id: 2 },
        { vaccine_id: 4, country_id: 2 },
        { vaccine_id: 5, country_id: 2 },
        { vaccine_id: 2, country_id: 3 },
        { vaccine_id: 3, country_id: 3 },
        { vaccine_id: 1, country_id: 4 },
        { vaccine_id: 3, country_id: 4 },
        { vaccine_id: 4, country_id: 4 },
        { vaccine_id: 5, country_id: 4 },
        { vaccine_id: 2, country_id: 5 },
        { vaccine_id: 3, country_id: 5 },
        { vaccine_id: 4, country_id: 5 },
        { vaccine_id: 1, country_id: 6 },
        { vaccine_id: 2, country_id: 6 },
        { vaccine_id: 4, country_id: 6 },
        { vaccine_id: 5, country_id: 6 },
        { vaccine_id: 1, country_id: 7 },
        { vaccine_id: 2, country_id: 7 },
        { vaccine_id: 3, country_id: 7 },
        { vaccine_id: 4, country_id: 7 },
        { vaccine_id: 5, country_id: 7 },
        { vaccine_id: 2, country_id: 9 },
        { vaccine_id: 3, country_id: 9 },
        { vaccine_id: 4, country_id: 9 },
        { vaccine_id: 2, country_id: 10 },
        { vaccine_id: 4, country_id: 10 },
        { vaccine_id: 5, country_id: 10 },
        { vaccine_id: 1, country_id: 11 },
        { vaccine_id: 3, country_id: 11 },
        { vaccine_id: 4, country_id: 11 },
        { vaccine_id: 1, country_id: 12 },
        { vaccine_id: 2, country_id: 12 },
        { vaccine_id: 3, country_id: 12 },
      ]);
    });
};
