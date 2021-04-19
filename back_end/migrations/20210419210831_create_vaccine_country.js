exports.up = function(knex) {
  return knex.schema.createTable("vaccine_country", (table) => {
    table.integer("vaccine_id").notNullable();
    table.integer("country_id").notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("vaccine_country");
};
