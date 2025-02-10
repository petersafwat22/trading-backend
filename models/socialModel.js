const mongoose = require("mongoose");

const socialSchema = new mongoose.Schema({
  facebook: {
    type: String,
    required: [true, "A social media profile must have a Facebook URL"],
    trim: true,
  },
  twitter: {
    type: String,
    required: [true, "A social media profile must have a Twitter URL"],
    trim: true,
  },
  instagram: {
    type: String,
    required: [true, "A social media profile must have an Instagram URL"],
    trim: true,
  },
});

const Social = mongoose.model("Social", socialSchema);

module.exports = Social;
