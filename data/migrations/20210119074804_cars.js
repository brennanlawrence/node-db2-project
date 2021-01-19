exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments();
    tbl.text("VIN", 17).unique().notNullable();
    tbl.text("make").notNullable();
    tbl.text("model").notNullable();
    tbl.real("miles").notNullable();
    tbl.text("transmission type");
    tbl.text("title status");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
