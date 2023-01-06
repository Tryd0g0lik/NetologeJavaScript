// interface MainGood {
//     id: number;
//     name: string;
//     description: string;
//     size: number;
//     price: number;
//     availble: boolean;
// }
//
//
//
//
// let d = {"products": [
//     {
//       "id": 0,
//       "name": "Торт",
//       "descriptions": "ля-ля-ля Тортище",
//       "sizes": 100,
//       "prices": 12,
//       "avaibles": false,
//       "filter": " ",
//       "sortPrices": false,
//       "sortDirs": false
//     }
//   ]
// }

const fs = require("fs");

class Good {
    id?: number;
    name: string;
    description: string;
    size?: number;
    price?: number;
    availble?: boolean;
    constructor (
        id = 0,
        names, descriptions,
        sizes = 0,
        prices = 0,
        availbles = false,
    ){
        this.id = id;
        this.name = names;
        this.description = descriptions;
        this.size = sizes;
        this.price = prices;
        this.availble = availbles;
    }

     getFile(path: string= null){
        let __data: any = fs.readFileSync(path);
        return JSON.parse(__data);

        }

}

module.exports = { Good }