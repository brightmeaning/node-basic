"use strict";

const output = {
    home:  (req, res)=> {
        //res.send("home");
        res.render("home/index");
    },
    login:  (req, res)=> {
        //res.send("login");
        res.render("home/login");
    },
};

const proc = {
    login: (req, res) =>{
        console.log(req.body);
    },
}

module.exports = {
    output,
    proc
};