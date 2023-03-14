const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var educationSchema = new Schema({
  name: {
    type: String,
  },
 anh: {
    type: String,
  },

  job: {
    type: String,
  },
  decreption: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  address: {
    type: String,
  },
});

var educationModel = mongoose.model("education", educationSchema);

module.exports = educationModel;
