exports.up = function(knex) {
  return knex.schema.createTable("member_vaccine", (table) => {
      table.integer("member_id").notNullable();
      table.integer("vaccine_id").notNullable();
      table.date("expiration").notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("member_vaccine");
};
