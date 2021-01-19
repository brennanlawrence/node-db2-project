const knex = require("knex");
const config = require("../knexfile");
const db = knex(config.development);

module.exports = { find, findById, insert };

function find() {
  return db("cars");
}

function findById(id) {
  return db("cars").where("id", id).first();
}

function insert(car) {
  return db("cars")
    .insert(car)
    .then(() => {
      return db("cars");
    });
}
