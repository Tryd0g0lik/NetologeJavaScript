// const {Good} = require("../good/goodJS");
const { BasketGf } = require("./bascetGoot").BasketGood
const { Bas } = require("./js/bascet/funBascet") ;


class Basket extends BasketGf {
    totalprice: number|null;
    totalsum: number | null;
    constructor(id = 0, names = null, descriptions = null, sizes = 0, prices = 0, availbles = false) {
    super(id, names, descriptions, sizes, prices, availbles);
    this.totalprice = null;
    this.totalsum = null;
    }

    totalAmount(){
        // BasketGf.getBasketFile()
        const __f = BasketGf.getBasketFile();
        return __f

    }
    // totalAmount(){}
}
const prod = new Basket()
console.log(prod.totalAmount())