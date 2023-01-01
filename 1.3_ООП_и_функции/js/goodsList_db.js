// import { Good } from "../goodJS";
const good = require("./goodJS");
const {resolve} = require("dns/promises");
const {rejects} = require("assert");
// const open = require("fs/promises");
// const {open} = require("fs/promises");

// const {open} = require("fs/promises");
// const f = require('../root.txt');
// import * as fs from 'fs';
// const f = fs.readFileSync('../root.txt')




class GoodsList extends good.Good {
    constructor(id, names, descriptions, sizes = 0, prices = 0, availble, filter, sortPrices = false, sortDirs = false) {
        super(id, names, descriptions, sizes, prices, availble);
        this.filter = filter;
        this.sortPrice = sortPrices;
        this.sortDir = sortDirs;
        this.__lenResponse = null;

        const { open } = require('fs/promises');
        this.dbReadTheData = (
            () => {
                return ((async (path) => {
                    try {
                        // console.log(`path: ${path}`)
                        const fd = await open(path)

                        for await (let __result of fd.createReadStream({start: 0,})) {

                            console.log(`__result: ${__result}`)

                        }

                        await fd.close();
                        return Object(__result)
                        // rejects('What happened?')

                    } catch (error) {
                        console.error('there was an error:', error.message);
                    }
                    // console.log(`__result: ${__result}`)

                })('./root.txt'));
            });
    }
    dbReadTheDataJson()
        {
        let __response = this.dbReadTheData;

        console.log(`_JSON.stringify(__response): ${JSON.stringify(__response)}`)

        return JSON.stringify(__response)
        }

    setProducts(){
        // let __response = await (this.dbReadTheData);
        let __g = Object(async () => {
            this.dbReadTheData.then()
        })

        for (const s of  async () => this.dbReadTheData) {
            console.log(`dbReadTheData: ${s}`)
        }
        let __newVar = JSON.stringify(this.dbReadTheData);
        console.log("))))" + (__newVar))
        let products = {
            id: __newVar.length,
            name: this.name,
            descriptions: this.description,
            sizes: this.size,
            prices: this.price,
            avaibles: this.availble,
            filter: this.filter,
            sortPrices: this.sortPrice,
            sortDirs: this.sortDir,
        };
        let __oldData = JSON.stringify(__newVar)
        let __newData = JSON.stringify(products)
        const addedInDbResponse = ( __oldData + (__newData));
        console.log('products: ' + addedInDbResponse)

        // console.log(typeof JSON.parse(products) + "___" + JSON.parse(products))
        return addedInDbResponse
        // вызываем список товаров и подаем в
        // _generatingId, для формирования id
    }

    findProducts(view) {
        let __elem;
        let __response = this.dbReadTheDataJson();
        // try {
        // console.log('__response: ' + __response)
        // for (let __i = 0; __i < (__response[products]).length; ++__i) {
        //     try {
        //         if (view === JSON.stringify(__response[products][__i])['id'] ||
        //             view === JSON.stringify(__response[products][__i])['name']) {
        //             __elem = JSON.stringify(__response[products][__i]);
        //             return String(__elem);
        //         }
        //     } catch (err) {
        //         continue;
        //     }
        // }
        return "Not found";

        // } catch(err) {
        //     return "Product is undefined";
        // }

    }
    setAvailable(value, index, name) {
        for (let __elenValues in [Number(index), String(name)]) {
            return this.findProducts(__elenValues);
        }
    }
}


const prods = new GoodsList(
    1, 'Пирожок', 'LA-LA-LA-LA', 1050, 1355, false, ' ',false, false
)
// console.log(prods.setAvailable(true, 0))
// console.log("dbReadTheData: " + prods.dbReadTheData)
// console.log("dbReadTheDataJson: " + prods.dbReadTheDataJson())
console.log("setProducts: " + prods.setProducts())