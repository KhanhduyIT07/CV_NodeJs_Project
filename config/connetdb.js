const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://TomDev:ghghfgvbh123@cluster0.utxdpxz.mongodb.net/Cv_Project"
    );
    console.log("DB connected succeed...!!");
  } catch (error) {
    console.log("DB connect fail...!!");
  }
}

module.exports = { connect };
