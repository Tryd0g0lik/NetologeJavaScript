const { Good } = require("../good/goodJS");
const fs = require("fs");
const {json} = require("stream/consumers");
// const BG = require("./js/goodJS");
class BasketGood extends Good {
    constructor(id = 0, names = null, descriptions = null, sizes = 0, prices = 0, availbles = false, amount = 1) {
        super(id, names, descriptions, sizes, prices, availbles);
        this.amount;
    }
    bascet(i, count) {
        this.amount = count;
        try {
            let __f = JSON.parse(fs.readFileSync("./root.json"));

            for (let __i = 0; __i < (__f["products"]).length; __i++) {
                if (__f["products"][__i].id === i) {

                    let __prod = __f["products"][__i];
                    let __count = JSON.parse(fs.readFileSync("./bascetAmount.json"));
                    console.log(typeof __prod)
                    console.log(__prod)
                    __prod["amount"] = this.amount;
                    (__count["bascetCount"]).push(__prod)

                    fs.writeFile("./bascetAmount.json",JSON.stringify(__count), 'utf-8', (err) => {
                        if (err) {
                            console.log(`ERRORE 'bascet' Message: ${err.message}`);
                            console.log(`ERRORE 'bascet' Stack: ${err.stack}`);
                        }else {
                            console.log("Rewrite the file!");
                        }
                    });
                }
            }
        }
        catch (e) {
            console.log(`ERRORE BasketGood Message: ${e.message}`);
            console.log(`ERRORE BasketGood Stack: ${e.stack}`);
        }
    }
}
console.clear();
const prod = new BasketGood();

console.log(prod.bascet(1, 3));
