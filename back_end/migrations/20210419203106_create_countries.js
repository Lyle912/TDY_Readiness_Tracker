exports.up = function (knex) {
  return knex.schema.createTable("countries", (table) => {
    table.increments();
    table.string("country_name").notNullable();
    table.boolean("visa_required")
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("countries");
};
