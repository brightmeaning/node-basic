const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("check to route");
});

app.get("/login", (req, res)=>{
    res.send("check to login");
});

app.listen(3000, () =>{
    console.log("server open");
});