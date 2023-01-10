/*
Задача 2
 */
// import * as fs from 'node:fs';
const fs = require("fs");
function checkId(arrBascet = [], i) {
    try {
        for (let __ind = 0; __ind < arrBascet.length; __ind++) {
            if (Number(i) === Number(arrBascet[__ind].id)) {
                console.log(i)
                console.log(arrBascet[__ind].id)
                console.log("--------")
                return false;
            }
        }
        return true;
    }
    catch (e) {
        console.log(`ERROR in "checkId" Message: ${e.message}`);
        console.log(`ERROR in "checkId" Stack: ${e.stack}`);
    }
}

// Каталог товаров в виде массива объектов, содержащих поля:

class Main {
    /*
     >> в себя начальную инциализацию основных объектов, которые могут быть
     >> использованы для работы Интернет-магазина одежды:
     >> Каталог товаров в виде массива объектов, содержащих поля:

     Вот как это понимать, не понятно, а понять можно по разному.
     Опять двухсмысленная формулировка и спрашивать нет у кого.

     То ли Просто constructor(){} создать, то ли объект с полным функционалом т.к. есть фразы:
     >> ... которые могут быть использованы для работы Интернет-магазина одежды:
     >> Каталог товаров в виде массива объектов, содержащих поля:

     Создаю просто конструктор.
     */
    constructor(id = 0, names, descriptions, sizes = 0, prices = 0, availbles = "false") {
        this.id = id;
        this.name = names;
        this.description = descriptions;
        this.size = sizes;
        this.price = prices;
        this.availble = availbles;
        this.totalpriceALL = 0;
    }
}


// Корзина в виде массива объектов, содержащих поля:
class BasketGood extends Main {
    constructor(id = 0, names = null, descriptions = null, sizes = 0, prices = 0, availbles = false, amount = 1) {
        super(id, names, descriptions, sizes, prices, availbles);
        this.amount = amount;
    }
    //Создайте в коде несколько (не менее 5) товаров в каталоге и несколько (не менее 2) товаров в корзине.
    /*
    В каком коде? Выше ни чего не было сказанно о каком либо функционале.
    в Формате JANGO создать более 5 объектов?
     */


    // Добавление товара в каталог
    addProducts(__newData = null, path) { // ./root.json
        /*
        TODO: The position will be added into catalog.
        Params: -   '__newData' this's object, new position for a catalog.
                    'path' is a reference in catalog.
         */

        // let fs = require('fs');
        let __f = JSON.parse(fs.readFileSync(path));
        // let __f = super.getFile(path);


        let __len = __f['products'].length;
        let __i = 0;
        for (let elem in __f['products']) {
            if (__f['products'][__i]['id'] === __len)
                return "Rewrite the 'id'";
            __i++;
        }
        __newData = {
            id: __len,
            name: this.name,
            descriptions: this.description,
            sizes: this.size,
            prices: this.price,
            avaibles: this.availble,
        };
        try {
            let __object = JSON.parse(fs.readFileSync(path));
            (__object["products"]).push(__newData);
            let __newStrData = JSON.stringify(__object);


            fs.writeFile('./root.json', __newStrData, 'utf-8', (err) => {
                if (err) {
                    console.log((`ERROR: ${err.name}` + ` ERROR-message ${err.message}`));
                }
                else {
                    console.log("Rewrite the file!");
                }
            });
        }

        catch (e) {
            let err = ("ERROR:" + e.message);
            return err;
        }
    }

    // Реализуйте функции добавления товара в корзину с указанием кол-ва товара
    bascet(i, count) { // ./bascetAmount.json
        /*
        TODO: The amount items insert
        Params: 'i' - index;
                'count' - The total count .
         */
        this.amount = count;
        try {
            let __f = JSON.parse(fs.readFileSync("./root.json"));
            for (let __i = 0; __i < (__f["products"]).length; __i++) {
                if (__f["products"][__i].id === i) {
                    let __prod = __f["products"][__i];
                    let __count = JSON.parse(fs.readFileSync("./bascetAmount.json"))
                    __prod["amount"] = this.amount;
                    if (checkId(__count["bascetCount"], i) === true) {
                        (__count["bascetCount"]).push(__prod);
                        fs.writeFile("./bascetAmount.json", JSON.stringify(__count), 'utf-8', (err) => {
                            if (err) {
                                console.log(`ERRORE 'bascet' Message: ${err.message}`);
                                console.log(`ERRORE 'bascet' Stack: ${err.stack}`);
                            }
                            else {
                                console.log("Rewrite the file! Ok");
                            }
                        });
                    }
                    else {
                        console.log(`Backet has this's position id: ${i}`);
                    }
                }
            }
        }
        catch (e) {
            console.log(`ERRORE BasketGood Message: ${e.message}`);
            console.log(`ERRORE BasketGood Stack: ${e.stack}`);
        }
    }

    // Реализуйте функцию вычисления общего количества и стоимости товаров в корзине
    totalAmount(path = null) { // ./bascetAmount.json
        /*
        The total price calculate;
         */

        let __i;
        try {
            if (path !== null) {
                let __fBaskets = JSON.parse(fs.readFileSync(path));
                fs.close

                // __fBaskets["bascetCount"] = this.removeUnavailable(__fBaskets["bascetCount"]);


                for (__i = 0; __i < (__fBaskets["bascetCount"]).length; __i++) {
                    this.totalprice = (__fBaskets["bascetCount"][__i].prices *
                        __fBaskets["bascetCount"][__i].amount);

                    __fBaskets["bascetCount"][__i]["totalprice"] = this.totalprice;
                }


                fs.writeFile("./totalAmountBasket.json", JSON.stringify({ "totalPrices": __fBaskets["bascetCount"] }), "utf-8", (err) => {
                    if (err) {
                        console.log(`WriteFile ERRORE in  Basket a "totalAmount". Message: ${err.message} `);
                        console.log(`WriteFile ERRORE in  Basket a "totalAmount". Stack: ${err.stack}`);
                    }
                    else {
                        console.log("Rewrite  the 'totalAmountBasket' file! Ok");
                    }
                });


                for (__i = 0; __i < (__fBaskets["bascetCount"]).length; __i++) {

                    this.totalpriceALL = Number(this.totalpriceALL) + Number(__fBaskets["bascetCount"][__i].totalprice);

                }
                return ` ${this.totalpriceALL} рубля;`;
            }
            return;
        }
        catch (e) {
            console.log(`ERRORE in  Basket a "totalAmount". Message: ${e.message}`);
            console.log(`ERRORE in  Basket a "totalAmount". Stack: ${e.stack}`);
        }
    }

    totalSum(path) { // ./totalAmountBasket.json
        /*
        The Total items calculate
         */
        try {
            let countItems = 0;
            if (path) {
                let __fBas = JSON.parse(fs.readFileSync(path));


                for (let __i = 0; __i < __fBas["totalPrices"].length; __i++) {
                    countItems = countItems + Number(__fBas["totalPrices"][__i].amount);
                }
                return `Кол-во: ${countItems} шт.`;
            }
        }
        catch (e) {
            console.log(`ERRORE in  Basket a "totalSum". Message: ${e.message}`);
            console.log(`ERRORE in  Basket a "totalSum". Stack: ${e.stack}`);
        }
    }
    clear(path) { // ./totalAmountBasket.json
        /*
        TODO: The basket cleaning
         */
        try {
            if (path) {
                fs.writeFile(path, JSON.stringify({ "totalPrices": [] }), "utf-8", (err) => {
                    if (err) {
                        console.log(`WriteFile ERRORE in  clear a "totalAmount". Message: ${err.message} `);
                        console.log(`WriteFile ERRORE in  clear a "totalAmount". Stack: ${err.stack}`);
                    }
                    else {
                        console.log("Cleared! Ok");
                    }
                });
            }
        }
        catch (e) { }
    }
}

console.clear();
const prods = new BasketGood(null, 'Клюква', 'LA-LA-LA-LA', 1050, 1355, false, ' ', false, false);
// console.log(prods.addProducts(null, "./root.json")) // Добавить в каталог
// console.log(prods.bascet(28, 8)) // Добавить  в корзину - Индекс позиции | Количество товара..
console.log(prods.totalAmount("./bascetAmount.json")) // Подсщет общей суммы товара
console.log(prods.totalSum("./totalAmountBasket.json")) //