const express = require("express");
const res = require("express/lib/response");
const app = express();

//html 하드코딩 
// app.get("/index",(req, res)=>{
//     res.send(`
//     <!DOCTYPE html>
//     <html lang="ko">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     </head>
//     <body>
//         <input type="text" placeholder="ID"><br>
//         <input type="text" placeholder="PASSWORD"><br>
//         <button>LOGIN</button>
//     </body>
//     </html>
//     `
//     );
// });

//app settings
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("home/index");
});

app.get("/login", (req, res)=>{
    res.render("home/login");
});


app.listen(3000, () =>{
    console.log("server open");
});