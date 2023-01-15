// const readline = require('readline');
// const result = require('dotenv').config({path: "./.env"}) //.env
// const psw = result.parsed['PASS'];
var vsprintf = require('sprintf-js').vsprintf;


function getPassword(password) {
    return function getPasswordChecker() {
        var __psw = "12335";
        if (password === __psw) {
            console.log("Код правильный");
            return true;
        }
        else {
            console.log("Код не правильный");
            return false;
        }
    };
}
var psw = getPassword("456");
console.log(vsprintf("%s", [psw]));


var psw = getPassword("12335");
console.log(vsprintf("%s", [psw]));

var psw = getPassword("8888888");
console.log(vsprintf("%s", [psw]));