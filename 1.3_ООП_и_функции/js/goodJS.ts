// interface MainGood {
//     id: number;
//     name: string;
//     description: string;
//     size: number;
//     price: number;
//     availble: boolean;
// }




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

     getFile(loader= d){
        return JSON.stringify(loader)
        }

    dbReadTheDataJson(): object{
        let __response: string = this.getFile();
        return JSON.parse(__response)
        }

}

module.exports = { Good }