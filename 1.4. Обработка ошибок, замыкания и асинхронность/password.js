// const rlp = require('node:readline/promises');

const rl = require('node:readline');
const fs = require("fs");
const vsprintf = require('sprintf-js').vsprintf;
const {describe, it} = require('test');
const test = require('test');
const assert = require("assert");


let data;
const passies = async (p)=>{
    return await fs.promises.readFile('./user.json', 'utf-8')
}

let p = "12333"
// pass(p)
// function testing(p) {
//     return passies(p)


// passies(p)
//     .then((data) => {
//         let __result = JSON.parse(data)
//         let __boolenResult = (p === vsprintf("%s", [__result['PASS'],]));
//         return __boolenResult
//     });




// describe("This's start!", (p)=> {
//     it("is's first = true",  (p) => {
//         assert.equal(
//             (passies(p)
//                 .then((data) => {
//                     let __result = JSON.parse(data)
//                     let __boolenResult = (p === vsprintf("%s", [__result['PASS'],]));
//                     // console.log(__boolenResult)
//                     return __boolenResult
//                 }) == false), false
//
//         )
//     })
//     it("is's socond = false",  (p="456") => {
//
//         assert.equal(
//             (passies(p)
//                 .then((data) => {
//                     let __result = JSON.parse(data)
//                     let __boolenResult = (p === vsprintf("%s", [__result['PASS'],]));
//                     // console.log(__boolenResult)
//                     return __boolenResult
//                 }) == false), false
//
//         )
//     })
// });


// function testing(p){
//     return passies(p)
//         .then((data) => {
//             let __result = JSON.parse(data)
//             let __boolenResult = (p === vsprintf("%s", [__result['PASS'],]));
//             return __boolenResult
//         });
// }
// test('the data is peanut butter', async () => {
//   const data = await testing(p);
//   expect(data).toBe(false);
// });
//
// test('the fetch fails with an error', async () => {
//   expect.assertions(1);
//   try {
//     testing(p);
//   } catch (e) {
//     expect(e).toMatch('error');
//   }
// });

// console.log(process.env)
// const envy = require('envy');
// const env = envy();
// console.log(env);

require('dotenv').config();
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(process.env.PASS, function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});