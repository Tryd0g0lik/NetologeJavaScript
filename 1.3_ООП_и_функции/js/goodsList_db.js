// import { Good } from "./goodJS";
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
    // getFile(loader: string|object= f){
    //     return super.getFile(loader=f)
    // }
    setProducts(__newData = null, path) {
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
    findProducts(ids = null, name = null, path) {
        try {
            let __f = (super.getFile(path));
            let __i = 0;
            let __el;
            if (ids != null && name == null) {
                for (__el of (Array(__f['products'])[__i])) {
                    if (__el.id === ids) {
                        return (__el);
                    }
                    __i++;
                }
            }
            else if (name != null && ids == null) {
                for (__el of (Array(__f['products'])[__i])) {
                    if (__el.name === name) {
                        return (__el);
                    }
                    __i++;
                }
            }
        }
        catch (e) {
            let __err = `Error: massage ${e.message}`;
            return __err;
        }
    }
    setAvailable(valueBoolen = false, id = null, name = null, path) {
        let __i = 0;
        let __ind = 0;
        let __value = [id, name];
        let __prop = ['id', 'name'];
        try {
            for (let atr of __value) {
                if (atr != null) {
                    let __arr = (super.getFile(path))['products'];
                    for (__ind; __ind < (__arr).length; __ind++) {
                        if (Number(__arr[__ind][__prop[__i]]) === Number(atr) ||
                            String(__arr[__ind][__prop[__i]]) === String(atr)) {
                            __arr[__ind].avaibles = String(__arr[__ind].avaibles).replace(String(__arr[__ind].avaibles), String(valueBoolen));
                            fs.writeFileSync('./root.json', JSON.stringify({ "products": __arr }), 'utf-8'), (err) => {
                                if (err) {
                                    console.log((`ERROR: ${err.name}` + ` ERROR-message ${err.message}`));
                                }
                                else {
                                    console.log("Rewrite too this's file!");
                                }
                            };
                        }
                    }
                }
                __i++;
            }
        }
        catch (e) {
            let __err = `Error message: ${e.message}, stack ${String(e.stack)}`;
            console.log(__err);
            return;
        }
    }
}
const prods = new GoodsList(null, 'Пирожок', 'LA-LA-LA-LA', 1050, 1355, false, ' ', false, false);
console.clear();
// console.log( `1. getFile: ${JSON.stringify(
//     prods.getFile('./root.json'))}`)
// console.log( " ")
// console.log( " ")
// console.log(`2. setProducts: ${JSON.stringify(
//     prods.setProducts(null, './root.json'))}`)
// console.log( " ")
// console.log( " ")
// console.log(`3. findProducts: ${ setTimeout( ()=>{console.log(JSON.stringify(prods.findProducts(1, null, './root.json')))}, 1000)}`)
console.log(" ");
console.log(" ");
console.log(`4. setAvailable: ${JSON.stringify(prods.setAvailable("true", 12, null, './root.json'))}`);
console.log(" ");
console.log(" ");
