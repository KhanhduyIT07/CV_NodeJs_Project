const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var homeSchema = new Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  linkFacebook: {
    type: String,
  },
  linkGitHub: {
    type: String,
  },
  linkTikTok: {
    type: String,
  },
  linkFacebook: {
    type: String,
  },
});

var homeModel = mongoose.model("home", homeSchema);

module.exports = homeModel;
