var express = require("express");
var router = express.Router();
var profileController = require("../controller/Cv_controller");
/* GET home page. */
router.get("/", profileController.index);

module.exports = router;
