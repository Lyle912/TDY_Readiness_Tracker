
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('countries').del()
    .then(function () {
      // Inserts seed entries
      return knex('countries').insert([
        {country_name: "Bahrain", visa_required: false},
        {country_name: "UAE", visa_required: true},
        {country_name: "Kuwait", visa_required: false},
        {country_name: "Oman", visa_required: true},
        {country_name: "Saudi Arabia", visa_required: true},
        {country_name: "Jordan", visa_required: true},
        {country_name: "Lebanon", visa_required: true},
        {country_name: "Qatar", visa_required: false},
      ]);
    });
};
