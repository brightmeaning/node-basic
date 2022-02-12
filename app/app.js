"use strict";

const express = require("express");
const app = express();
const PORT = 3000;
const home = require("./src/routes/home");
const bodyParser = require("body-parser");

//app settings
app.set("views", "./app/src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home); 
// use 미들웨어를 등록 
module.exports = app;