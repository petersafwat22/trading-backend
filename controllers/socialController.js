const Social = require("../models/socialModel");
const factory = require("./handlerFactory");

exports.getAllSocials = factory.getAll(Social);
exports.makeSocial = factory.createOne(Social);
exports.updateSocial = factory.updateOne(Social);
exports.getSocial = factory.getOne(Social);
exports.deleteSocial = factory.deleteOne(Social);
exports.deleteSocials = factory.deleteMany(Social);
