// const rlp = require('node:readline/promises');

const rl = require('node:readline');
const fs = require("fs");
const vsprintf = require('sprintf-js').vsprintf;

let data;
const pass = async ()=>{
    return await fs.promises.readFile('./user.json', 'utf-8')
}

let p = "12333"
// pass(p)
pass(p)
    .then((data)=>{
        let __result =  JSON.parse(data)
        let __boolenResult = (p === vsprintf("%s",[__result['PASS'],]));
        return __boolenResult
    })
    .then((data)=>{
        console.log(data)
    })

