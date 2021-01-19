
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: 'rowValue1', make: "Subaru", model: "Forester", miles: 124443},
        {id: 2, VIN: 'rowValue2', make: "Ford", model: "F150", miles: 12424},
        {id: 3, VIN: 'rowValue3', make: "VW", model: "Bug", miles: 244444}
      ]);
    });
};
