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
    {"id":10,"name":"Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"avaible":"false"},
    {"id":11,"name":"Клюква","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"avaible":"false"},
    ]}

function __checkId(arrBascet = [], i) {
    /*
    TODO: the id number is checked in the catalog
    Params: 'arrBascet' - this's array of objects.
     */

    for (let ind = 0; ind < arrBascet.length; ind++) {
        if (Number(i) === Number(arrBascet[ind].id)) {
            console.log(i);
            console.log(arrBascet[ind].id);
            console.log("--------");
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
let basketCatalog = {"bascetCount": [{"id":1,"name":"Пирожок Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"prices":1355,"avaibles":"true","amount":3}, {"id":5,"name":"Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"prices":1355,"avaibles":"false","amount":3}]};
let bascetAmount = {"bascetCount" : []};
function addProducts(newData = null, catalog) {
    /*
    TODO: The position will be added into catalog after checks. It will checked the 'id' number id presence or be not
      presence this number into  catalog.
    Params: -   'newData' this's object, new position for a catalog.
            -   'catalog' this's array, the one of three shop's catalogs where add a new product. The format Jason's
             object

     */

    let lis = [];

    for (const [key, value] of Object.entries(catalog)) {
        lis = catalog[String(key)];

    }

    for (let ind = 0; ind < (lis).length; ind++){


        if (Number(lis[ind]['id']) === Number(newData['id'])) {
            return "Rewrite the 'id'. This id is in the cart ";

        }
    }
    lis.push(newData);
    return catalog;

}
function getCatalog(
    id=0,
    name, description,
    size, price,
    availble,

    ) {
    /*
    Тhe  shop basket
     */
    let len;

    if (id === 0) {
        len = (f["products"]).length;
    } else {
        len = id;
    }

    //Создайте в коде несколько (не менее 5) товаров в каталоге и несколько (не менее 2) товаров в корзине.


    // Добавление товара в каталог
    let newData = {
        "id": len,
        "name": name,
        "descriptions": description,
        "sizes": size,
        "prices": price,
        "avaibles": availble,
    };

    // let catJSN = JSON.parse(f);
    let catJSN = f;

    f = addProducts(newData, catJSN);
    return f
}


// Реализуйте функции добавления товара в корзину
function getBasketCatalog(i, count) { // basketCatalog {}
    /*
    TODO: The amount items insert. Need the find product index from 'f' catalog and to append the 'cont' properties,
      it's integer.
    Params: 'i' - product index of catalog;
            'count' - The total count .
            'basketCatalog' -   Thi is catalog from the basket, it's 'f' array.
     */
    let amount = count;

    for (let ind = 0; ind < (f["products"]).length; ind++) {
        if (Number(f["products"][ind].id) === Number(i)) {

            f["products"][ind]["amount"] = amount;
            // basketCatalog = addProducts(f["products"][i], JSON.parse(basketCatalog))
            // console.log(basketCatalog)
            basketCatalog = addProducts(f["products"][i], basketCatalog)
        }
    }
    return basketCatalog
}


// Реализуйте функцию вычисления общего количества и стоимости товаров в корзине
function getTotalAmount(getBasketCatalogs) { // bascetAmount {}
    /*
    TODO: The total price calculate.
    Params: 'totalprice'    - this total price an one product of basket.
            'totalpriceALL' - this total price all product of basket.
            'basketCatalogs'- this's result work of 'basketCatalogs' function. it's object for pay
     */

    let i;
    let totalprice;
    let totalpriceALL = 0;


    // let basketCatalog = JSON.parse(getBasketCatalogs);
    let basketCatalog = getBasketCatalogs;


    // fBaskets["bascetCount"] = this.removeUnavailable(fBaskets["bascetCount"]);


    for (i = 0; i < (basketCatalog["bascetCount"]).length ||
        i === 0 &&
        basketCatalog["bascetCount"] !== []; i++) {

        totalprice = (basketCatalog["bascetCount"][i]['prices'] * basketCatalog["bascetCount"][i]['amount']);
        basketCatalog["bascetCount"][i]["totalprice"] = totalprice; // it's object for pay
        (bascetAmount["bascetCount"]).push(basketCatalog["bascetCount"][i]) // all catalo/basket for pay

    }

    for (i = 0; i < (bascetAmount["bascetCount"]).length; i++) {
        totalpriceALL = Number(totalpriceALL) + Number(basketCatalog["bascetCount"][i]["totalprice"]); // total price

    }
    return [bascetAmount, `${totalpriceALL} рубля;`];

}

function totalSum(getTotalAmounts) {
    /*
    The Total items calculate.
    Params: 'getTotalAmounts'   - this's resul of work a 'getTotalAmount' function. it's 'getTotalAmount()[0]'
     */

    let path = getTotalAmounts["bascetCount"];


    let countItems = 0;
    if (path) {

        for (let i = 0; i < path.length; i++) {
            countItems = countItems + Number(path[i]['amount']);
        }
        return `Кол-во: ${countItems} шт.`;
    }

}

function removeBasket(basketName, i){
    /*
    TODO: The one product is removes of the basket
    Params: 'basketName'    - The basket name.
            'i'             - This's product index for a remove it
     */
    basketName = JSON.parse(basketName);
    for ( let prod in basketName["bascetCount"]){
        if (basketName["bascetCount"]['id'] === i){

            basketName["bascetCount"] = basketName["bascetCount"].splice(i, 1)
            return basketName
        }
    }
}
function clear(catalog) { // ./totalAmountBasket.json
    /*
    TODO: cleaning the basket
     */

    catalog = JSON.parse(catalog);

    if (catalog["bascetCount"] !== []) {
        catalog["bascetCount"] = [];

    }
    return catalog

}

// const catol = getCatalog(120,"Пирожок","LA-LA-LU-LU",1050,1355,"true")
// console.log(catol)

const basketAdd = getBasketCatalog(11, 85)
// console.log(basketAdd)

const getTAmount = getTotalAmount(basketAdd)
console.log(getTAmount)