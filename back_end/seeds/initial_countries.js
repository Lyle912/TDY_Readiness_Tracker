exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("countries")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("countries").insert([
        { country_name: "Bahrain" },
        { country_name: "Brazil" },
        { country_name: "Colombia" },
        { country_name: "France" },
        { country_name: "Germany" },
        { country_name: "Italy" },
        { country_name: "Japan" },
        { country_name: "Kenya" },
        { country_name: "Kuwait" },
        { country_name: "Libya" },
        { country_name: "Morocco" },
        { country_name: "Paraguay" },
        { country_name: "South Korea" },
        { country_name: "Thailand" },
        { country_name: "UAE" },
      ]);
    });
};
