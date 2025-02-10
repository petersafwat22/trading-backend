const express = require("express");

const testimonialController = require("../controllers/testimonialsController");

const router = express.Router();

router
  .route("/")
  .get(testimonialController.getAllTestimonials)
  .post(testimonialController.makeTestimonial)
  .delete(testimonialController.deleteTestimonials);

router
  .route("/:id")
  .patch(testimonialController.updateTestimonial)
  .get(testimonialController.getTestimonial)
  .delete(testimonialController.deleteTestimonial);

module.exports = router;
