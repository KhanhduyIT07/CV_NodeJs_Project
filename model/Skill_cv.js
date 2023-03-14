const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var skillSchema = new Schema({
  nameSkill: {
    type: String,
  },
  percentSkill: {
    type: String,
  },
});

var skillModel = mongoose.model("skill", skillSchema);
module.exports = skillModel;
