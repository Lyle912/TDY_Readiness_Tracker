exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('vaccines').del()
    .then(function () {
      // Inserts seed entries
      return knex('vaccines').insert([
        {vaccine_name: 'COVID-19'},
        {vaccine_name: 'Flu'},
        {vaccine_name: 'Anthrax'},
        {vaccine_name: 'Rabies'},
        {vaccine_name: 'Small Pox'},
      ]);
    });
};
