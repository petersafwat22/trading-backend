const Course = require("../models/courseModel");
const factory = require("./handlerFactory");

exports.getAllCourses = factory.getAll(Course);
exports.makeCourse = factory.createOne(Course);
exports.updateCourse = factory.updateOne(Course);
exports.getCourse = factory.getOne(Course);
exports.deleteCourse = factory.deleteOne(Course);
exports.deleteCourses = factory.deleteMany(Course);
