const express = require("express");
const router = express.Router();
const {
  getDevelopers,
  getDeveloper,
  addDeveloper,
  deleteDeveloper,
  editDeveloper,
} = require("../controllers/developers");

router.route("/").get(getDevelopers).post(addDeveloper);

router
  .route("/:id")
  .get(getDeveloper)
  .delete(deleteDeveloper)
  .patch(editDeveloper);

module.exports = router;
