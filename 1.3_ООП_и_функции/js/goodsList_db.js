
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

    setProducts(__newData = null){
        let f = this.dbReadTheDataJson()
        let len = f['products'].length
        let __i = 0;

        for (let elem in f['products'] ){
            if (f['products'][__i]['id'] === len)
                return "Rewrite the 'id'"
            __i++

        }

        __newData = {
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
            let err = ("ERROR:" + e.message)
            return err
        }
    }

    findProducts(id=null, name=null) {
        let __f = this.setProducts(null)
        let __i = 0;
        // let reg = /^\d*/
        // str.search(reg) или str.test(reg)
        // if (atrName.test(reg) === -1) {...}
        //               ^
        // TypeError: atrName.test is not a function

        try {
            if (id != null && name == null) {
                for (let __el of (Array(__f['products'])[__i])) {
                    if (__el.id === id) {
                        return (__el)
                    }
                    __i++
                }
            } else if (name != null && id == null) {
                for (let __el of (Array(__f['products'])[__i])) {
                    if (__el.name === name) {
                        return (__el)
                    }
                    __i++
                }
            }
        }catch (e) {
            let __err = `Error: massage ${e.message}`
            return __err
        }


    }
    setAvailable(valueBoolen=false, indexNumber=null, nameStr=null) {
        let  __response = null;
        let findProducts = this.findProducts
        try {


            if (Number(indexNumber) != null && nameStr == null) {
                __response = ( findProducts(Number(indexNumber),
                   String(nameStr))
                );

            } else if (indexNumber == null && String(nameStr) != null){
              __response = ( findProducts(Number(indexNumber),
                   String(nameStr)));
            }
            for ( const __property of Array(JSON.parse(__response))) {
                return __property
            }
        } catch(e){
            let __err = `Error message: ${e.message}`
            return __err
        }

    }
}


const prods = new GoodsList(null,names='Пирожок', descriptions ='LA-LA-LA-LA',
    size=1050, price=1355, avaible=false,
    filter=' ',sortPrices = false, sortDirs= false
)

console.log( `1. getFile: ${JSON.stringify(prods.getFile())}`)
console.log( " ")
console.log( " ")
console.log( `2. dbReadTheDataJson: ${JSON.stringify(prods.dbReadTheDataJson())}`)
console.log( " ")
console.log( " ")
console.log(`3. setProducts: ${JSON.stringify(prods.setProducts())}`)
console.log( " ")
console.log( " ")
console.log(`4. findProducts: ${JSON.stringify(prods.findProducts(id=null, name='Торт'))}`)
console.log( " ")
console.log( " ")
console.log(`5. setAvailable: ${JSON.stringify(prods.setAvailable(
    valueBoolen=true,
    indexNumber=0,
    nameStr=null))}`)