
// import { Good } from "./goodJS";
// import * as fun from './function';
const fun = require('./module/lessmore')
const fs = require('fs');

const {Good} = require('./goodJS')
const f: string | object = Object(require( '../root.json'));

class GoodsList extends Good{
    filters?: string;
    sortPrice: boolean;
    sortDir: boolean;
    lenResponse: number;

    constructor(
        id,
        names,
        descriptions,
        size = 0,
        prices = 0,
        availble,
        filters,
        sortPrices = false,
        sortDirs = false,
        ){
        super(
            id,
            names,
            descriptions,
            size,
            prices,
            availble,
        )

        this.filters = filters;
        this.sortPrice = sortPrices;
        this.sortDir = sortDirs;
        this.lenResponse = null;

    }
    // getFile(loader: string|object= f){
    //     return super.getFile(loader=f)
    // }
    addProducts(__newData: string | object = null,
                path:string ): string | object {
        // добавление товара в базу

        let fs = require('fs');
        let __f:object = super.getFile(path)
        let __len: number = f['products'].length
        let __i: number = 0;

        for (let elem in __f['products'] ){
            if (__f['products'][__i]['id'] === __len)
                return "Rewrite the 'id'"
            __i++

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
            let __newStrData: string | any = JSON.stringify(__object);

            fs.writeFile('./root.json', __newStrData, 'utf-8', (err) => {
            if (err) {
                console.log((`ERROR: ${err.name}` + ` ERROR-message ${err.message}`));
            }
            else {
                console.log("Rewrite the file!");
            }

         });

        } catch (e: any) {
            let err: string = ("ERROR:" + e.message)
            return err
        }
    }

    findProducts(ids:number | null =null,
                 name: string| null =null,
                 path:string,
                 filtLengthLess:boolean = false,
                 filtLengthMore:boolean = false,
                 symbolWord: number=0): string{
        // фильтр товара
        // фильтр по 1.наименованию, 2.id, 3. длина имени товара, 4. присутствие слова в имени.
        try {
            let __f: string | object = (super.getFile(path));
            let __i: number = 0;
            let __el: any;
            let __arr = (__f['products']);
            let __ind:number = 0;
            let __response:any;

            if (ids != null && name == null && symbolWord === 0 &&
                filtLengthLess == false &&  filtLengthMore == false){
                for (__el of (Array(__arr)[__i])) {
                    if (__el.id === ids) {
                        return (__el)
                    }
                    __i++
                }
            } else if (name != null && ids == null && symbolWord === 0 &&
                filtLengthLess == false &&  filtLengthMore == false) {
                for (__el of (Array(__arr)[__i])) {
                    if (__el.name === name) {
                        return (__el)
                    }
                    __i++
                }
            } else if (filtLengthLess == true && filtLengthMore == false ||
                filtLengthLess == false && filtLengthMore == true){

                for (__ind; __ind < __arr.length; __ind++) {
                    let __name = __arr[__ind].name;

                    if (symbolWord != 0){
                        __response = fun.lessMore(__arr, filtLengthLess,
                            filtLengthMore, symbolWord)

                        console.log(`__response: ${__response}`)

                    }else {
                        return "You need refine a number for symbols count";
                    }
                    console.log(`__response: ${__response}`)
                }

            }else if (filtLengthLess == true && filtLengthMore == true){
                return "Repeat the filter. Choose the 'filtLengthLess' or 'filtLengthMore'."
            }
        }catch (e) {
            let __err: string = `Error: massage ${e.message}`
            return __err
        }
    }

    filtrProducts(){
        // фильтр по 1.наименованию, 2.id, 3. длина имени товара, 4. присутствие слова в имени.

    }



}


const prods = new GoodsList(null,
    'Пирожок', 'LA-LA-LA-LA',
    1050, 1355, false,
    ' ',false, false
)
console.clear()
// console.log( `1. getFile: ${JSON.stringify(
//     prods.getFile('./root.json'))}`)
// console.log( " ")
// console.log( " ")
// console.log(`2. addsetProducts: ${JSON.stringify(
//     prods.addProducts(null, './root.json'))}`)
// console.log( " ")
// console.log( " ")
console.log(`3. findProducts: ${ setTimeout( ()=>{console.log(
    JSON.stringify(
        prods.findProducts(1, null, './root.json', true, false, 3)))}, 1000)}`)
console.log( " ")
console.log( " ")
// console.log(`4. setAvailable: ${JSON.stringify(prods.setAvailable("true",
//     16, null, './root.json', true))}`);
console.log(" ");
console.log(" ");
