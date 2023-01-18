/*
Задача 2
 */
let f = {"products":[
    {"id":0,"name":"Торт","descriptions":"ля-ля-ля Тортище","sizes":100,"price":12,"avaible":"true"},
    {"id":1,"name":"Пирожок Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"avaible":"true"},
    {"id":2,"name":"Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"avaible":"false"},
    {"id":3,"name":"Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"avaible":"false"},
    {"id":4,"name":"Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"avaible":"false"},
    {"id":5,"name":"Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"avaible":"false"},
    {"id":6,"name":"Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"avaible":"false"},
    {"id":7,"name":"Сироп","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"avaible":"true"},
    {"id":8,"name":"Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"avaible":"true"},
    {"id":9,"name":"Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"avaible":"true"},
    {"id":10,"name":"Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"avaible":"false"}
    {"id":11,"name":"Клюква","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"avaible":"false"}
    ]
}

function checkId(arrBascet = [], i) {
    /*
    TODO: the id number is checked in the catalog
    Params: 'arrBascet' - this's array of objects.
     */

    for (let ind = 0; ind < arrBascet.length; ind++) {
        if (Number(i) === Number(arrBascet[ind].id)) {
            console.log(i)
            console.log(arrBascet[ind].id)
            console.log("--------")
            return false;
        }
    }
    return true;

    
}

// function mainProperties() {
//     /*
//      This's basic properties
//      */
//     let id;
//     let name;
//     let description;
//     let size;
//     let price;
//     let availble;
//     let totalpriceALL;
//
//     return {
//         id : 0,
//         name : null,
//         description : null,
//         size : 0,
//         price : 0,
//         availble : "false",
//         totalpriceALL : 0,
//     }
// }

let id;
let name;
let description;
let size;
let price;
let availble;
let totalpriceALL;
function addProducts(newData = null) {
    /*
    TODO: The position will be added into catalog after checks. It will checked the 'id' number id presence or be not
      presence this number into  catalog.
    Params: -   'newData' this's object, new position for a catalog.

     */

    for (let elem in f['products']) { //
        if (elem[i]['id'] === newData['id'])
            return "Rewrite the 'id'";
        i++;

    }
    (f["products"]).push(newData);

    return f;
}


function basketGood(
    id=0,
    name, description,
    siae, prices,
    availble
    ) {
    /*
    Тhe  shop basket
     */

    if (id === 0) {
        let len = (f["products"]).length;
    }

    //Создайте в коде несколько (не менее 5) товаров в каталоге и несколько (не менее 2) товаров в корзине.


    // Добавление товара в каталог
    newData = {
        "id": len,
        "name": name,
        "descriptions": description,
        "sizes": size,
        "prices": price,
        "avaibles": availble,
    };
    let f = addProducts(newData);
    return f
}

// Реализуйте функции добавления товара в корзину
function bascet(i, count) {
    /*
    TODO: The amount items insert
    Params: 'i' - index;
            'count' - The total count .
     */
    this.amount = count;
    try {
        let f = JSON.parse(fs.readFileSync("./root.json"));
        for (let i = 0; i < (f["products"]).length; i++) {
            if (f["products"][i].id === i) {
                let prod = f["products"][i];
                let count = JSON.parse(fs.readFileSync("./bascetAmount.json"))
                prod["amount"] = this.amount;
                if (checkId(count["bascetCount"], i) === true) {
                    (count["bascetCount"]).push(prod);
                    fs.writeFile("./bascetAmount.json", JSON.stringify(count), 'utf-8', (err) => {
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
        console.log(`ERRORE basketGood Message: ${e.message}`);
        console.log(`ERRORE basketGood Stack: ${e.stack}`);
    }
}

    // Реализуйте функцию вычисления общего количества и стоимости товаров в корзине
    totalAmount(path = null) { // ./bascetAmount.json
        /*
        The total price calculate;
         */

        let i;
        try {
            if (path !== null) {
                let fBaskets = JSON.parse(fs.readFileSync(path));
                fs.close

                // fBaskets["bascetCount"] = this.removeUnavailable(fBaskets["bascetCount"]);


                for (i = 0; i < (fBaskets["bascetCount"]).length; i++) {
                    this.totalprice = (fBaskets["bascetCount"][i].prices *
                        fBaskets["bascetCount"][i].amount);

                    fBaskets["bascetCount"][i]["totalprice"] = this.totalprice;
                }


                fs.writeFile("./totalAmountBasket.json", JSON.stringify({ "totalPrices": fBaskets["bascetCount"] }), "utf-8", (err) => {
                    if (err) {
                        console.log(`WriteFile ERRORE in  Basket a "totalAmount". Message: ${err.message} `);
                        console.log(`WriteFile ERRORE in  Basket a "totalAmount". Stack: ${err.stack}`);
                    }
                    else {
                        console.log("Rewrite  the 'totalAmountBasket' file! Ok");
                    }
                });


                for (i = 0; i < (fBaskets["bascetCount"]).length; i++) {

                    this.totalpriceALL = Number(this.totalpriceALL) + Number(fBaskets["bascetCount"][i].totalprice);

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
                let fBas = JSON.parse(fs.readFileSync(path));


                for (let i = 0; i < fBas["totalPrices"].length; i++) {
                    countItems = countItems + Number(fBas["totalPrices"][i].amount);
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
const prods = new basketGood(null, 'Клюква', 'LA-LA-LA-LA', 1050, 1355, false, ' ', false, false);
// console.log(prods.addProducts(null, "./root.json")) // Добавить в каталог
// console.log(prods.bascet(28, 8)) // Добавить  в корзину - Индекс позиции | Количество товара..
console.log(prods.totalAmount("./bascetAmount.json")) // Подсщет общей суммы товара
console.log(prods.totalSum("./totalAmountBasket.json")) //