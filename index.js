const express = require("express");
const server = express();
server.use(express.json());

const Cars = require("./data/db");

server.get("/api/cars", (req, res, next) => {
  Cars.find()
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch((err) => {
      next(err);
    });
});

server.get("/api/cars/:id", (req, res, next) => {
  const { id } = req.params;
  Cars.findById(id)
    .then((car) => {
      if (!car) {
        res.status(404).json({ message: `Car with id: ${id}, does not exist` });
      } else {
        res.status(200).json(car);
      }
    })
    .catch((err) => {
      next(err);
    });
});

server.post("/api/cars", (req, res, next) => {
  //console.log(req.body);
  const car = req.body;
  Cars.insert(car)
    .then((car) => {
      res.status(201).json(car);
    })
    .catch((err) => {
      next(err);
    });
});

server.get("/", (req, res) => {
  res.status(200).json({ message: "Success, welcome to the server!" });
});

server.use((err, req, res, next) => {
  res.status(500).json({ message: err.message, stack: err.stack });
});

server.listen(5000, () => console.log("Server running on port 5000..."));
