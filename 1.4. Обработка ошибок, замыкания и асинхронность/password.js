const readline = require('readline');
const vsprintf = require('sprintf-js').vsprintf;
const result = require('dotenv').config({path: "./.env"}) //.env


const psw = result.parsed['PASS'];

// let __answered2 = ()=> {
//     const rl = readline.createInterface({
//         input: process.stdin, // The input's data
//         output: process.stdout
//     });
//
//
//
//
//     return async function() {
//         let userInp = await rl.question('Введите пароль\n');
//         return userInp
//     };
// }

// console.clear()
// let data = __answered2()
// console.log(data().then((dt)=> console.log(dt)))
// data.then((dt)=> console.log(dt))

// ------------------------------


async function userInput() {

    const rl = readline.createInterface({
        input: process.stdin, // The input's data
        output: process.stdout
    });


    let res = await rl.question('Введите пароль\n');
    console.log(res + " 111111111111")
    rl.close();
    return
};


((data)=> {

    console.log(data + "22222222");
    if (data === psw) {
        console.log(data);
        return "true";
    } else {
        return "false";
    }
}) (userInput())
userInput()
    .then((data)=> {

        console.log(data + "22222222");
        if (data === psw) {
            console.log(data);
            return "true";
        } else {
            return "false";
        }
})


// userInput()
//     .then((err, data)=> {
//         console.log(data + "22222222");
//         if (data === psw) {
//             console.log(data);
//             return "true";
//         } else {
//             return "false";
//         }
//     })




// ------------------------------