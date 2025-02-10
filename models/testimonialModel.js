const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "A testimonial must have an author name"],
    trim: true,
  },
  role: {
    type: String,
    required: [true, "A testimonial must have an author role"],
    trim: true,
  },
  description: {
    type: String,
    required: [
      true,
      "Review description is required. Please provide the testimonial content",
    ],
    trim: true,
  },
});

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

module.exports = Testimonial;
