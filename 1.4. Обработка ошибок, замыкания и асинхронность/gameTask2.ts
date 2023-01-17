declare function require(name:string);
const vsprintf = require('sprintf-js').vsprintf;

const fspr = require("fs/promises")

const readline = require('readline');
// @ts-ignore
const rl = readline.createInterface({input: process.stdin, output: process.stdout})

const result = require('dotenv').config({path: "./.env"}) // .env
const INT = result.parsed['INT']

let cook: any;

/*
напишите программу, реализующую игру "угадай число" с подсказками "больше" и "меньше".
Программа должна реализовывать вариант игры, состоящей из множества попыток до
 точного угадывания числа пользователем.

Программа должна вести счетчик количества попыток и
 информировать пользователя о номере текущей попытки и
  информировать об общем количестве попыток при завершении игры.
 */

function getSecretInteger(): any {
    return ((): number => INT)()
}


let re: any;
// @ts-ignore
re = new RegExp(/^[0-9]+[^ ]?/, 'g');

function readFile(path:string|null|void){
    /*
    TODO: reading file from  input path, return content file or 'null' if geting the ERRor
     */

    try {
        console.log("readFile true")
        let __fileContent: string|Array<any>;
        __fileContent = fspr.readFile(path, "utf-8") // JSON.parse();
        let __lengFileContentString:number = (JSON.stringify(__fileContent)).length

        if ( !(__lengFileContentString === null) ||
            __lengFileContentString <= 2) {
            console.log("11111")
            return  JSON.parse('{"history" : []}');
        }

        if (typeof __fileContent === "string" &&
        __lengFileContentString > 2){
            console.log("22222")
            return JSON.parse(JSON.stringify(__fileContent));

        } else if (__lengFileContentString > 2) {
            console.log("3333333")
            return __fileContent;
        }

    } catch (e) {
        console.log(`ERROR in readFile Error NAME: ${e.name}`)
        console.log(`ERROR in readFile Error PATH: ${e.path}`)
        console.log(`ERROR in readFile Error MESSAGE: ${e.message}`)
        console.log(`ERROR in readFile Error stack: ${e.stack}`)
        return null
    }
}


function recordFile(path: string, arr: Array<any>): boolean{
    try{
        fspr.writeFile(path, JSON.stringify(arr), "utf-8")
        console.log("Всё записалось!")
        return true
    } catch (e){
        console.log(`ERROR in recordFile Error NAME: ${e.name}`)
        console.log(`ERROR in recordFile Error PATH: ${e.path}`)
        console.log(`ERROR in recordFile Error MESSAGE: ${e.message}`)
        console.log(`ERROR in recordFile Error stack: ${e.stack}`)
        return null
    }
}
function __checking(userNumb:number ): number|void|null{  // this's control what user's input , it's integer or not
    /*
    TODO:  will be check for that an user input, it's must be integer.
     The number or a void  line will be return.
    Params: 'userNumb' - the integer from user which the user input
     */
    let __int: number;


    if (re.test(String(userNumb)) !== false) {
        __int = getSecretInteger()
        return (__int - userNumb)

    } else {
        console.log("Введите число от 0 и больше.")
        return null

    }

}


let __i: number;
function getObjectForCook(
    userInput: number,
    path:string,
    i:number|void = null,
    ): Array<any> | void{
    /*
    TODO: The 'cook' journal records. Return the updated's data.

    Params: '__less'    - the value a difference if less a secret integer.
            '__more'    - the value difference if more a secret integer.
            '__numb'    - the integer which we get from user.

            '__i' and
             'index'    - the identification umber of a journal 'cook'.

            'cook'      - this's text for a journal, 'protocol'.

            'f'         - the file content, it's old.
.
            The property of object 'cook'.

            'secretInteger' - The secret integer.
            'quantilyLess'  -The integer which less 'INT'
            'quantilyMore'  -The integer which more 'INT'

     */

    let __less: number = 0;
    let __more: number = 0;

    let __numb: number | null| void = 0;
    __numb = __checking(userInput); // this's control what user's input , it's integer or not

    let cook:Array<any> = readFile(path);
    console.log(`cook: ${JSON.stringify(cook)}`)


    __i = (cook["history"]).length;


    if (userInput >= 0){  // This's property 'less' or 'more'.
        if (__numb < 0) {
            // @ts-ignore
            __less = (__numb * (-1));

        } else if (__numb > 0) {
            // @ts-ignore
            __more = __numb;

        } else{
            // the pass code
            __more = 0;
            __less = 0;

        }
    }

    cook["history"][__i] = {
        "index": __i,
        "secretInteger": INT,
        "userInputInt": userInput,
        "quantilyLess": __less,
        "quantilyMore": __more,
    }


    return (cook)

}

function getUserInt(path:string){
    /*
    Params: 'path" - this's path with to file.
     */

    rl.question('Каким будет ваше число? ',
        (userInput: string) => {
            console.log(userInput === re)

            rl.close();


            let __usInput: number | void | null = (__checking(Number(userInput)));
            let __boole: boolean;

            if (typeof __usInput === "number") {
                let __journal: Array<any> = readFile(path);
                let __f: Array<any> | void = getObjectForCook(__usInput, path, null);// The data added

                if (typeof __f === "object") {
                    recordFile(path, __f);
                    __boole = true;
                } else {
                    __boole = false;
                }

            }
            console.log(`__boole: ${__boole}`)

        });


}

let __game = true;

( async ()=> {
    let __answered = await rl.question("We play? 'y'(yes) or 'n'(not)\n ");


    console.log(`__answered: ${__answered}`)
    __game = false
})()
    // getUserInt("./cook.json")
