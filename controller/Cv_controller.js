let Home = require("../model/Home_cv");
let Education = require("../model/Education_cv");
let Skill = require("../model/Skill_cv");
let Work = require("../model/Work_cv");

async function index(req, res) {
  let skill = await Skill.find();
  let home = await Home.findOne();
  let work = await Work.findOne();
  let education = await Education.findOne();
  console.log(skill, home, work, education);
  res.render("index", {
    title: "Profile",
    skill: skill,
    home: home,
    work: work,
    education: education,
  });
}
module.exports = {
  index,
};
