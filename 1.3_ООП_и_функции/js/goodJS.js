// interface MainGood {
//     id: number;
//     name: string;
//     description: string;
//     size: number;
//     price: number;
//     availble: boolean;
// }
export class Good {
    constructor(id = 0, names, descriptions, sizes = 0, prices = 0, availbles = false) {
        this.id = id;
        this.name = names;
        this.description = descriptions;
        this.size = sizes;
        this.price = prices;
        this.availble = availbles;
    }
}
// export {Good,};
// module.exports = { Good, };
