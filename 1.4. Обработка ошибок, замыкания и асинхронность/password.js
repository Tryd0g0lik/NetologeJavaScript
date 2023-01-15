// const rlp = require('node:readline/promises');

const readline = require('readline');

const vsprintf = require('sprintf-js').vsprintf;
// const {describe, it} = require('test');
// const test = require('test');
// const assert = require("assert");

const result = require('dotenv').config({path: "./.env"}) //.env
// const MongoClient = require('mongodb').MongoClient;

const psw = result.parsed['PASS'];
let __answered = async ()=> {

    const rl = readline.createInterface({
        input: process.stdin, // The input's data
        output: process.stdout
    });

    const __resp = ()=> {
        rl.question('Введите пароль\n')

        return (userInpute) => {
            console.log(userInpute)

        }
    }
     rl.close();
    return await __resp();
    }
let data = __answered()
    .then((data)=> {
        console.log(data)

    });
