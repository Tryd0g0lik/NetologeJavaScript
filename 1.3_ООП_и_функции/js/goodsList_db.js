
const {len} = require("./functions")
// import Good from "./js/goodJS.js";
// const good = require("D:\\django-sites\\NetologeJavaScript\\1.3_ООП_и_функции\\js\\goodJS.js");
// const {resolve} = require("dns/promises");
// const {rejects} = require("assert");
// const {Good} = require("./js/goodJS.js");
let d = {"products": [
    {
      "id": 0,
      "name": "Торт",
      "descriptions": "ля-ля-ля Тортище",
      "sizes": 100,
      "prices": 12,
      "avaibles": false,
      "filter": " ",
      "sortPrices": false,
      "sortDirs": false
    }
  ]
}
class Good {
    constructor(id = 0, names, descriptions, sizes = 0, prices = 0, availbles = false) {
        this.id = id;
        this.name = names;
        this.description = descriptions;
        this.size = sizes;
        this.price = prices;
        this.availble = availbles;
    }
}

class GoodsList extends Good {
    constructor(id=0, names, descriptions, sizes = 0, prices = 0, availble, filter, sortPrices = false, sortDirs = false) {
        super(id, names, descriptions, sizes, prices, availble);

        this.filter = filter;
        this.sortPrice = sortPrices;
        this.sortDir = sortDirs;
        this.__lenResponse = null;


    }

    getFile(loader= d){
        return JSON.stringify(loader)
        }

    dbReadTheDataJson(){
        let __response = this.getFile();
        return JSON.parse(__response)
        }

    setProducts(){
        let f = this.dbReadTheDataJson()
        let len = f['products'].length
        let __i = 0;

        for (let elem in f['products'] ){
            if (f['products'][__i]['id'] === len)
                return "Rewrite the 'id'"
            __i++

        }


        let __newData = {
            id: len,
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
            f['products'].push(__newData)

            return f
        } catch (e) {
            console.log("ERROR:" + e.message)
            return
        }
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


const prods = new GoodsList(names='Пирожок', descriptions ='LA-LA-LA-LA',
    size=1050, price=1355, avaible=false,
    filter=' ',sortPrices = false, sortDirs= false
)
// console.log( prods.getFile(d))
console.log( `dbReadTheDataJson: ${JSON.stringify(prods.setProducts())}`)
