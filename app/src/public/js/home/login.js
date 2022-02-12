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
        console.log("@@@"+JSON.stringify(req));
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    });
};