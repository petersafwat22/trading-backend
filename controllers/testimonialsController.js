const Testimonial = require("../models/testimonialModel");
const factory = require("./handlerFactory");

exports.getAllTestimonials = factory.getAll(Testimonial);
exports.makeTestimonial = factory.createOne(Testimonial);
exports.updateTestimonial = factory.updateOne(Testimonial);
exports.getTestimonial = factory.getOne(Testimonial);
exports.deleteTestimonial = factory.deleteOne(Testimonial);
exports.deleteTestimonials = factory.deleteMany(Testimonial);
