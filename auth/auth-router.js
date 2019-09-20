const router = require("express").Router();

// const Users = require("../helpers/usersModel");
const bcrypt = require("bcryptjs");
const db = require("../database/dbConfig");

const router = express.Router();
// POST to 3300 api/auth/register
// router.post("/register", (request, response) => {
//   let user = request.body;
//   const hash = bcrypt.hashSync(user.password, 14);
//   user.password = hash;

//   Users.add(user)
//     .then(savedUser => {
//       response.status(201).json(savedUser);
//     })
//     .catch(error => {
//       response.status(500).json(error);
//     });
// });

router.post("/login", (req, res) => {
  // implement login
});

module.exports = router;
