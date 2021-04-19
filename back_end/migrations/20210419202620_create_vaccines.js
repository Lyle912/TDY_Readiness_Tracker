exports.up = function (knex) {
    return knex.schema.createTable("vaccines", (table) => {
      table.increments();
      table.string("vaccine_name").notNullable();      
    });
  };
  
  exports.down = function (knex) {
      return knex.schema.dropTableIfExists('vaccines');
  };
  