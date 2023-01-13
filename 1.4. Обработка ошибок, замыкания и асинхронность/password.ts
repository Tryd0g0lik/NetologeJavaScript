/*
Task 1
Функция должна принимать один параметр - правильное значение пароля.
Функция должна быть реализована с помощью замыкания таким образом,
чтобы после получения проверяющей функции невозможно было каким-либо образом узнать правильный пароль.

Возвращаемая функция проверки пароля должно принимать один параметр - пароль, введенный пользователем
для проверки. В качестве результата функция должна возвращать логическое значение true или false в
зависимости от результата проверки.

В основном коде программы напишите тестовые вызовы для getPasswordChecker и для проверочной функции,
чтобы убедиться в корректности их работы.

------------
Как читать
 */
declare function require(name:string);
const rl = require('node:readline');
const fs = require("fs");
const vsprintf = require('sprintf-js').vsprintf;

let data;
const pass = async (pasw:string)=>{
    return await fs.promises.readFile('./user.json', 'utf-8')
}

let p:string = "12333"

pass(p)
    .then((data)=>{
        let __result =  JSON.parse(data)
        let __boolenResult = (p === vsprintf("%s",[__result['PASS'],]));
        return __boolenResult
    })
    .then((data)=>{
        console.log(data)
    })