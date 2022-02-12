"use strict";
const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")

router.get("/home", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.proc.login);

module.exports = router;