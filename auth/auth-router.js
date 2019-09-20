const express = require("express");
const Users = require("../helpers/usersModel");
const bcrypt = require("bcryptjs");
const db = require("../database/dbConfig");
const generateToken = require("../auth/generate-token");

const router = express.Router();

// POST to 3300 api/auth/register
router.post("/register", (request, response) => {
  let user = request.body;
  const hash = bcrypt.hashSync(user.password, 14);
  user.password = hash;

  Users.add(user)
    .then(addedUser => {
      response.status(201).json(addedUser);
    })
    .catch(error => {
      response.status(500).json(error);
    });
});

// POST to 3300 api/auth/login
router.post("/login", (request, response) => {
  let { username, password } = request.body;
  //   console.log("POST login request body", request.body);

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        // console.log("token", token);
        response.status(200).json({ token });
      } else {
        // dont send 404 status because dont want them guessing credentials
        response.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      response.status(500).json(error);
    });
});

module.exports = router;
