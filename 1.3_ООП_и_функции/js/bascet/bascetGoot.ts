const {Good} = require("../good/goodJS");

// const BG = require("./js/goodJS");

class BasketGood extends Good{
    amount: number;
    constructor(
        amount,
        id = 0,
        names,
        descriptions,
        sizes = 0,
        prices = 0,
        availbles = false
        ) {
        super(id, names, descriptions, sizes, prices, availbles);
        this.amount = amount;
    }


}