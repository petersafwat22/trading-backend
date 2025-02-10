const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseCategory: {
    type: String,
    required: [
      true,
      "Course category is required. Please specify the category of the course",
    ],
    trim: true,
  },
  packageName: {
    type: String,
    required: [
      true,
      "Package name is required. Please provide a name for this package",
    ],
    trim: true,
  },
  packageDescription: {
    type: String,
    required: [
      true,
      "Package description is required. Please provide details about this package",
    ],
    trim: true,
  },
  packagePrice: {
    type: String,
    required: [
      true,
      "Package price is required. Please specify the price for this package",
    ],
    trim: true,
  },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
