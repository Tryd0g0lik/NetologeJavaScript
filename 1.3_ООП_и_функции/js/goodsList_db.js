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
    getFile(loader = f) {
        return super.getFile(loader = f);
    }
    setProducts(__newData = null) {
        let fs = require('fs');
        let __f = super.dbReadTheDataJson();
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
            let __data = fs.readFileSync('./root.json');
            let __object = JSON.parse(__data);
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
    findProducts(ids = null, name = null) {
        try {
            let __f = this.setProducts(null);
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
    setAvailable(valueBoolen = false, id = null, name = null) {
        let __response = null;
        let findProducts = this.findProducts;
        try {
            if (id != null && name == null) {
                console.log("< ================ >");
                __response = (findProducts(id, name));
            }
            else if (id == null && String(name) != null) {
                __response = (findProducts(Number(id), String(name)));
            }
            for (const __property of Array(JSON.parse(__response))) {
                return __property;
            }
        }
        catch (e) {
            let __err = `Error message: ${e.message}, stack ${String(e.stack)}`;
            console.log(__err);
            return;
        }
    }
}
// let names;
// let descriptions;
// let sizes;
// let prices;
// let avaible;
// let filter;
// let sortPrices;
const prods = new GoodsList(null, 'Пирожок', 'LA-LA-LA-LA', 1050, 1355, false, ' ', false, false);
console.log(`1. getFile: ${JSON.stringify(prods.getFile())}`);
console.log(" ");
console.log(" ");
console.log(`2. dbReadTheDataJson: ${JSON.stringify(prods.dbReadTheDataJson())}`);
console.log(" ");
console.log(" ");
console.log(`3. setProducts: ${JSON.stringify(prods.setProducts(f))}`);
console.log(" ");
console.log(" ");
console.log(`4. findProducts: ${JSON.stringify(prods.findProducts(1, null))}`);
console.log(" ");
console.log(" ");
console.log(`5. setAvailable: ${JSON.stringify(prods.setAvailable(false, 1, null))}`);
console.log(" ");
console.log(" ");
