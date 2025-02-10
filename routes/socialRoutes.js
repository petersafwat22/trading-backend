const express = require("express");

const socialController = require("../controllers/socialController");

const router = express.Router();

router
  .route("/")
  .get(socialController.getAllSocials)
  .post(socialController.makeSocial)
  .delete(socialController.deleteSocials);

router
  .route("/:id")
  .patch(socialController.updateSocial)
  .get(socialController.getSocial)
  .delete(socialController.deleteSocial);

module.exports = router;
