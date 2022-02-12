"use strict";

const home =  (req,res)=>{
    //res.send("home");
    res.render("home/index");
};

const login =  (req,res)=>{
    //res.send("login");
    res.render("home/login");
};

module.exports = {
    home,
    login
};