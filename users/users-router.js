const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../middleware/restricted");
const checkRole = require("../middleware/check-role");

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get(
  "/something",
  restricted,
  checkRole("Student"),
  checkRole("Tutor"),
  (req, res) => {
    // do your thing here.
    res.end();
  }
);

module.exports = router;
