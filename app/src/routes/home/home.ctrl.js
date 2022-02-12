"use strict";

const users = {
    id: ["a", "b", "c"],
    pw: ["aaa" , "bbb" , "ccc"],
}

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
        //console.log(req.body);
        const id = req.body.id,
        pw = req.body.pw;

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.pw[idx] === pw){
                return res.json({
                    success: true,
                })
            }
        }
        return res.json({
            success: false,
            msg: "login failed",
        });
    },
}

module.exports = {
    output,
    proc
};