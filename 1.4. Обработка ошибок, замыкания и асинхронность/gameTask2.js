=========== Здание не завершено ===========
const vsprintf = require('sprintf-js').vsprintf;
const fspr = require("fs/promises");
const readline = require('readline');
// const wasi = require("wasi");
// @ts-ignore
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const result = require('dotenv').config({ path: "./.env" }); // .env
const INT = result.parsed['INT'];
let cook;
/*
напишите программу, реализующую игру "угадай число" с подсказками "больше" и "меньше".
Программа должна реализовывать вариант игры, состоящей из множества попыток до
 точного угадывания числа пользователем.

Программа должна вести счетчик количества попыток и
 информировать пользователя о номере текущей попытки и
  информировать об общем количестве попыток при завершении игры.
 */
function getSecretInteger() {
    return (() => INT)();
}
let re;
// @ts-ignore
re = new RegExp(/^[0-9]+[^ ]?/, 'g');
function readFile(path) {
    /*
    TODO: reading file from  input path, return content file or 'null' if geting the ERRor
     */
    try {
        console.log("readFile true");
        let fileContent;
        fileContent = fspr.readFile(path, "utf-8"); // JSON.parse();
        let lengFileContentString = (JSON.stringify(fileContent)).length;
        if (!(lengFileContentString === null) ||
            lengFileContentString <= 2) {
            console.log("11111");
            return JSON.parse('{"history" : []}');
        }
        if (typeof fileContent === "string" &&
            lengFileContentString > 2) {
            console.log("22222");
            return JSON.parse(JSON.stringify(fileContent));
        }
        else if (lengFileContentString > 2) {
            console.log("3333333");
            return fileContent;
        }
    }
    catch (e) {
        console.log(`ERROR in readFile Error NAME: ${e.name}`);
        console.log(`ERROR in readFile Error PATH: ${e.path}`);
        console.log(`ERROR in readFile Error MESSAGE: ${e.message}`);
        console.log(`ERROR in readFile Error stack: ${e.stack}`);
        return null;
    }
}
function recordFile(path, arr) {
    try {
        fspr.writeFile(path, JSON.stringify(arr), "utf-8");
        console.log("Всё записалось!");
        return true;
    }
    catch (e) {
        console.log(`ERROR in recordFile Error NAME: ${e.name}`);
        console.log(`ERROR in recordFile Error PATH: ${e.path}`);
        console.log(`ERROR in recordFile Error MESSAGE: ${e.message}`);
        console.log(`ERROR in recordFile Error stack: ${e.stack}`);
        return null;
    }
}
function checking(userNumb) {
    /*
    TODO:  will be check for that an user input, it's must be integer.
     The number or a void  line will be return.
    Params: 'userNumb' - the integer from user which the user input
     */
    let int;
    if (re.test(String(userNumb)) !== false) {
        int = getSecretInteger();
        return (int - userNumb);
    }
    else {
        console.log("Введите число от 0 и больше.");
        return null;
    }
}
let i;
function getObjectForCook(userInput, path, i = null) {
    /*
    TODO: The 'cook' journal records. Return the updated's data.

    Params: 'less'    - the value a difference if less a secret integer.
            'more'    - the value difference if more a secret integer.
            'numb'    - the integer which we get from user.

            'i' and
             'index'    - the identification umber of a journal 'cook'.

            'cook'      - this's text for a journal, 'protocol'.

            'f'         - the file content, it's old.
.
            The property of object 'cook'.

            'secretInteger' - The secret integer.
            'quantilyLess'  -The integer which less 'INT'
            'quantilyMore'  -The integer which more 'INT'

     */
    let less = 0;
    let more = 0;
    let numb = 0;

    numb = checking(userInput); // this's control what user's input , it's integer or not
    let cook = readFile(path);
    console.log(`cook: ${JSON.stringify(cook)}`);
    i = (cook["history"]).length;
    if (userInput >= 0) { // This's property 'less' or 'more'.
        if (numb < 0) {
            // @ts-ignore
            less = (numb * (-1));
        }
        else if (numb > 0) {
            // @ts-ignore
            more = numb;
        }
        else {
            // the pass code
            more = 0;
            less = 0;
        }
    }
    cook["history"][i] = {
        "index": i,
        "secretInteger": INT,
        "userInputInt": userInput,
        "quantilyLess": less,
        "quantilyMore": more,
    };
    return (cook);
}
function getUserInt(path) {
    /*
    Params: 'path" - this's path with to file.
     */
    rl.question('Каким будет ваше число? ', (userInput) => {
        console.log(userInput === re);
        rl.close();
        let usInput = (checking(Number(userInput)));
        let boole;
        if (typeof usInput === "number") {
            let journal = readFile(path);
            let f = getObjectForCook(usInput, path, null); // The data added
            if (typeof f === "object") {
                recordFile(path, f);
                boole = true;
            }
            else {
                boole = false;
            }
        }
        console.log(`boole: ${boole}`);
    });
}

// rl.question("We play? 'y'(yes) or 'n'(not)\n ")
// const play = async ()=> {
//     return (
//
//         rl.question("We play? 'y'(yes) or 'n'(not)\n ",(data)=> {
//             console.log("Действие 2")
//
//             setTimeout(()=> console.log(data), 500);
//             console.log("Действие 3")
//             rl.close()
//         })
//     )
// }
// console.log("Действие 1")
// play()
// console.log("Действие 4")


// const play = async ()=> {
//     return () => {
//         return ()=> rl.question("We play? 'y'(yes) or 'n'(not)\n ",
//             (inpute) => { console.log(inpute)
//             console.log("Действие 2")
//             rl.close()
//         })
// }}
// console.log("Действие 1")
// play()
//     .then(
//         (data) => {
//             data()
//
//
//
//             console.log("Действие 3")
//
//         })
// console.log("Действие 4")


let answered =  () => new Promise( (resolve, reject)=> {
    rl.question("We play? 'y'(yes) or 'n'(not)\n ",       (err, data)=> {
        // rl.close();
        resolve(data);
    })
});
async function game(){
    let an =  await  answered()
    an
}
game()

