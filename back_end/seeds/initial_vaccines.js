exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("vaccines")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("vaccines").insert([
        { vaccine_name: "Anthrax" },
        { vaccine_name: "Chickenpox" },
        { vaccine_name: "COVID-19" },
        { vaccine_name: "Hepatitis A" },
        { vaccine_name: "Hepatitis B" },
        { vaccine_name: "Influenza" },
        { vaccine_name: "Japanese Encephalitis" },
        { vaccine_name: "M-M-R" },
        { vaccine_name: "Pneumococcal" },
        { vaccine_name: "Polio" },
        { vaccine_name: "Rabies" },
        { vaccine_name: "Smallpox" },
        { vaccine_name: "Tdap" },
        { vaccine_name: "Typhoid" },
        { vaccine_name: "Yellow Fever" },
      ]);
    });
};
