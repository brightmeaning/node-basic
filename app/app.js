"use strict";

const express = require("express");
const app = express();
const PORT = 3000;
const home = require("./src/routes/home");

//app settings
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); 
// use 미들웨어를 등록 

module.exports = app;