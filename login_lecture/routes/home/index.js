"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.app.get("/", ctrl.home);
router.app.get("/login", ctrl.login);

module.exports = router;
