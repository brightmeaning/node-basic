"use strict"

const id = document.querySelector("#id"),
    pw = document.querySelector("#pw"),
    loginBtn = document.querySelector("#Btn");


console.log(id);
console.log(pw);
console.log(loginBtn);


loginBtn.addEventListener("click",login);

function login(){
    console.log("login button clicked");
        const req= {
            id: id.value,
            pw: pw.value,
        };
        
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        // ui measage
        if(res.success){
            location.href ="/home";
        }else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("login error"));
    });
};