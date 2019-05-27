
var express = require("express");
var router = express.Router();
const MongoHelper = require("../db/mongo_helper.js");

/* GET full customers listing. */
router.get("/", function(req, res) {
  MongoHelper.get("customers").then(results => {
    res.status(200).json(results);
  });
});

/* Create a new customer */
router.post("/", function(req, res) {
  MongoHelper.create("customers", req.body).then(results => {
    res.status(201).json("New customer created");
  });
});

/* Update an existing customer by id */
router.put("/:id", function(req, res) {
  MongoHelper.update("customers", req.params.id, req.body).then(results => {
    res.status(200).json("Customer data updated");
  });
});

/* Delete an existing customer by id */
router.delete("/:id", function(req, res) {
  MongoHelper.delete("customers", req.params.id).then(results => {
    res.status(200).json("Customer deleted");
  });
});

/* Add new account */
router.post("/:cust_id/accounts", function(req, res) {
  MongoHelper.addAcct("customers", req.params.cust_id, req.body).then(
    results => {
      res.status(201).json("New account created");
    }
  );
});

module.exports = router;
