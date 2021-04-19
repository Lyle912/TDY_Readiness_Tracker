exports.up = function(knex) {
  return knex.schema.createTable("visas", (table) => {
      table.integer("member_id").notNullable();
      table.integer("country_id").notNullable();
      table.date("expiration").notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("visas");
};
