exports.up = function (knex) {
  return knex.schema.createTable("members", (table) => {
    table.increments();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("rank").notNullable();
    table.string("mos").notNullable();
    table.integer("age").notNullable();
    table.date("cac_expiration");
    table.date("gtc_expiration");
    table.date("dl_expiration");
  });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('members');
};
