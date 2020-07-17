const express = require("express");
const router = express.Router();
const {
  getDevelopers,
  getDeveloper,
  addDeveloper,
  deleteDeveloper,
} = require("../controllers/developers");

router.route("/").get(getDevelopers).post(addDeveloper);

router.route("/:id").get(getDeveloper).delete(deleteDeveloper);

module.exports = router;
