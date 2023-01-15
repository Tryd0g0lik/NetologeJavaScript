
declare function require(name:string);
// const readline = require('readline');
const vsprintf = require('sprintf-js').vsprintf;

// const result = require('dotenv').config({path: "./.env"}) //.env
// const psw = result.parsed['PASS'];


function getPassword(password:string):any {


    return function getPasswordChecker():boolean{
        let __psw:string = "12335";

        if (password === __psw){
            console.log("Код правильный")
            return true
        } else {
            console.log("Код не правильный")
            return false
        }

    }
}

const psw = getPassword("456");
console.log(vsprintf("%s",[psw]))

