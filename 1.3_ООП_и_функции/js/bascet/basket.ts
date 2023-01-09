const {Good} = require("../good/goodJS");
const fs = require("fs");

class Basket extends Good {
    totalprice: number | void;
    totalsum: number | void;
    totalpriceALL: number | void;
    constructor(id = 0, names = null, descriptions = null, sizes = 0, prices = 0, availbles = false) {
    super(id, names, descriptions, sizes, prices, availbles);
    this.totalprice = null;
    this.totalpriceALL = null;
    this.totalsum = null;
    }

    openFile(path:string|void){
        /*
        Open the file;
         */

        return JSON.parse(fs.readFileSync(path))

    }
    totalAmount(path:string|null = null):string| number| Array<any>|void{
        /*
        The total price calculate;
         */
        let __i: number;

        try {
            if (path !== null) {
                let __fBasket = this.openFile(path);

                for (__i = 0; __i < (__fBasket["bascetCount"]).length; __i++) {

                    this.totalprice = (__fBasket["bascetCount"][__i].prices *
                        __fBasket["bascetCount"][__i].amount);
                    __fBasket["bascetCount"][__i]["totalprice"] = this.totalprice;

                }
                fs.writeFile("./totalAmountBasket.json",
                        JSON.stringify({"totalPrices" : __fBasket["bascetCount"]}),
                        "utf-8", (err)=> {
                            if (err) {
                                console.log(`WriteFile ERRORE in  Basket a "totalAmount". Message: ${err.message} `);
                                console.log(`WriteFile ERRORE in  Basket a "totalAmount". Stack: ${err.stack}`);
                            } else {
                                console.log("Rewrite  the 'totalAmountBasket' file! Ok");
                            }

                        });


                    for (__i = 0; __i < (__fBasket["bascetCount"]).length; __i++){

                        this.totalpriceALL = this.totalpriceALL + __fBasket["bascetCount"][__i].totalprice

                    }

                    return ` ${this.totalpriceALL} рубля;`


            }
            return
        } catch (e) {
            console.log(`ERRORE in  Basket a "totalAmount". Message: ${e.message}`);
            console.log(`ERRORE in  Basket a "totalAmount". Stack: ${e.stack }`);
        }
    }
    // totalAmount(){}
}
const prod = new Basket()
console.log(prod.totalAmount("./bascetAmount.json"))
