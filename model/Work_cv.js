const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var workSchema = new Schema({
  image: {
    type: String,
  },
  image: {
    type: String,
  },
  image: {
    type: String,
  },
  image: {
    type: String,
  },
  image: {
    type: String,
  },
});

var workModel = mongoose.model("work", workSchema);
module.exports = workModel;
