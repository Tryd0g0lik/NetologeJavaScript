// import { Good } from "./goodJS";
// import * as fun from './function';
const fun = require('./module/lessmore');
const fs = require('fs');
const { Good } = require('./goodJS');
const f = Object(require('../root.json'));
class GoodsList extends Good {
    constructor(id, names, descriptions, size = 0, prices = 0, availble, filters, sortPrices = false, sortDirs = false) {
        super(id, names, descriptions, size, prices, availble);
        this.filters = filters;
        this.sortPrice = sortPrices;
        this.sortDir = sortDirs;
        this.lenResponse = null;
    }
    addProducts(__newData = null, path) {
        // добавление товара в базу
        let fs = require('fs');
        let __f = super.getFile(path);
        let __len = f['products'].length;
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
            filter: this.filter,
            sortPrices: this.sortPrice,
            sortDirs: this.sortDir,
        };
        try {
            let __object = super.getFile(path);
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
    findProducts(ids = null, name = null, path, filtLengthLess = false, filtLengthMore = false, symbolWord = 0) {
        // фильтр товара
        // фильтр по 1.наименованию, 2.id, 3. длина имени товара, 4. присутствие слова в имени.
        try {
            let __f = (super.getFile(path));
            let __i = 0;
            let __el;
            let __arr = (__f['products']);
            let __ind = 0;
            let __response = [];
            let __result = [];
            const __lenArray = __arr.length;
            if (ids !== null && name === null && symbolWord === 0 &&
                filtLengthLess === false && filtLengthMore === false) {
                for (__el of (Array(__arr)[__i])) {
                    if (__el.id === ids) {
                        return (__el);
                    }
                    __i++;
                }
            }
            else if (name !== null && ids === null && symbolWord === 0 &&
                filtLengthLess === false && filtLengthMore === false) {
                for (__el of (Array(__arr)[__i])) {
                    if (__el.name === name) {
                        return (__el);
                    }
                    __i++;
                }
            }
            else if (filtLengthLess === true && filtLengthMore === false ||
                filtLengthLess === false && filtLengthMore === true) {
                /* ------Start datarmination at the word length------ */
                /*
                Here we get a string's list from variable '__response'
                 and return Arrays list where has these strings.
                 */
                __response = fun.lessMore(__arr, filtLengthLess, filtLengthMore, null, symbolWord);
                for (__i = 0; __i < __lenArray; __i++) { // The lisr of JSON Arrays
                    for (__ind = 0; __ind < __response.length; __ind++) {
                        if (String(__arr[__i].name) === String((__response)[__ind])) {
                            __result.push([__arr[__i].id, __arr[__i]]);
                        }
                    }
                }
                return __result;
                /* ------End datarmination at the word length------ */
            }
            else if (filtLengthLess === true && filtLengthMore === true) {
                return "Repeat the filter. Choose the 'filtLengthLess' or 'filtLengthMore'.";
            }
        }
        catch (e) {
            let __err = `ErroR: massagE ${e.message} /=> ${e.stack}`;
            return __err;
        }
    }
}
const prods = new GoodsList(null, 'Пирожок', 'LA-LA-LA-LA', 1050, 1355, false, ' ', false, false);
console.clear();
// console.log( `1. getFile: ${JSON.stringify(
//     prods.getFile('./root.json'))}`)
// console.log( " ")
// console.log( " ")
// console.log(`2. addsetProducts: ${JSON.stringify(
//     prods.addProducts(null, './root.json'))}`)
// console.log( " ")
// console.log( " ")
console.log(`3. findProducts: ${setTimeout(() => {
    console.log(JSON.stringify(prods.findProducts(1, null, './root.json', true, false, 6)));
}, 1000)}`);
console.log(" ");
console.log(" ");
// console.log(`4. setAvailable: ${JSON.stringify(prods.setAvailable("true",
//     16, null, './root.json', true))}`);
console.log(" ");
console.log(" ");
