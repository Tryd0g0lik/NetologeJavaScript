class Good {
    constructor(id, title, descriptions, sizes, price, available) {
    this.id = id;
    this.title = title;
    this.description = descriptions;
    this.size = sizes;
    this.price = price;
    this.available = available;
    }
    set Available(value) { // изменение признака доступности для продажи
        this.available = value;
        return this
    }

    get Available(){
        return this
    }
}


class GoodsList{
    #goods=[];
    constructor(dataList=[], sortPrice=false, sortDir=false) {
        this.sortPrice = sortPrice;
        this.sortDir = sortDir;
        this.#goods = dataList;
    }

    get goods(){
        let filter = new RegExp(/(^([[А-Яа-яa-z0-9]+) ?([А-Яа-яa-z0-9])*\S?\s?([а-яa-z0-9]+)* ?([-_ ])? ?[а-яa-z0-9]*[а-яa-z0-9$]?)/);

        let goodsTrue = (((lists)=>{
            let elemList = [];
            for (let elem of lists) {
                if (elem.available === true) {

                elemList.push(elem);
                }
            }
            return elemList
        })(this.#goods));

        if (this.sortPrice === true ) {

            if (this.sortDir === false){
                goodsTrue.sort((a, b) => {
                    if ((filter).test(a.title) === true && (filter).test(b.title) === true) {
                        if (Number(a.price) < Number(b.price)) return 1;
                        if (Number(a.price) === Number(b.price)) return 0;
                        if (Number(a.price) > Number(b.price)) return -1;
                    }
            });} else if(this.sortDir === true){
                    goodsTrue.sort((a, b) => {
                        if ((filter).test(a.title) === true && (filter).test(b.title) === true) {
                            if (Number(a.price) > Number(b.price)) return 1;
                            if (Number(a.price) === Number(b.price)) return 0;
                            if (Number(a.price) < Number(b.price)) return -1;
                        }
                });
            }
        }
        return goodsTrue

    }

    add(val){
        (this.#goods).push(val);
        return this
    }

    remove(id){
        let i=0;
        for (let elem of this.#goods) {
            if (Number(elem.id) === Number(id)) (this.#goods).splice(i, 1);
            i++;
        }

        return this.#goods
    }
}

class BasketGood{
    // #basket=[];
    constructor() {
        this.amount = 0;
        this.basket=[]

    }

    set cart(val){
        this.basket.push({'position id': val[0].id,
                            'title':val[0].title,
                            'price':val[0].price,
                            'quantity': this.amount = val[1],
                            'available': val[0].available,})
        return  this.basket
    }
    get cart(){

        return  this.basket
    }
}

class Basket extends BasketGood{
    #result = [];
    constructor(goods) {
        super()
        this.goods = goods;
    }

    get totalAmounts(){

        this.totalAmount =  (this.goods.basket).reduce((sum, item) => {
              return Number(sum) + Number(item.quantity);
            }, 0);

        return this
    }

    get totalSums(){
        this.totalSum = (this.goods.basket).reduce((sum, item) => {
            return Number(sum) + (Number(item.quantity) * Number(item.price));
            }, 0);

        return this
    }
    add(good, amount){
        this.#result = (this.goods.basket).filter(item => Number(item['position id']) === Number(good.id));

        if (this.#result.length > 0) {
            this.#result[0]['quantity'] = Number(this.#result[0]['quantity']) + Number(amount);

            let i=0;
            for (let elem of this.goods.basket) {
                if (Number(elem['position id']) === Number(good.id)) elem['quantity'] = this.#result[0]['quantity']
                i++;
            } this.#result = []; return this.goods.basket;
        }

        super.cart = [good, amount];
        this.goods.basket.push(super.cart[0])
        this.#result = [];
        return this.goods.basket
    }

    remove(good, amount){
        this.#result = (this.goods.basket).filter(item => Number(item['position id']) === Number(good.id));
        this.#result[0]['quantity'] = Number(this.#result[0]['quantity']) - Number(amount);

        let i=0;
        for (let elem of this.goods.basket) {
            if (Number(elem['position id']) === Number(good.id)) elem['quantity'] = this.#result[0]['quantity']

            i++;
        }

        if (Number(this.goods.basket[i-1]['quantity']) <= 0) {
            this.goods.basket.splice(i-1, 1);
        }

        this.#result = []; return this.goods.basket;
    }

    clear(){
        return this.goods.basket = []
    }

    removeUnavailable(){
        this.#result = this.goods.basket.filter(item => item['available'] === false);

        let i = 0;
        for(let elem of this.goods.basket) {
            let res = (this.#result).filter(item => Number(elem['position id']) === item['position id']);
            if (Number(res.length) > 0) (this.goods.basket).splice(i, 1);
            i++;
        }

        return this.goods.basket
    }

}

let winter  = new Good(1, 'jacket', "LA-LA-LA-LA", 50, 1355, true)
let winter2  = new Good(2, 'jacket red', "LA-LA-LA-LA", 50, 1055, false)
let winter3  = new Good(3, 'jacket blue', "LA-LA-LA-LA", 45, 3055, true)
winter.Available = true
console.log(winter, winter2, winter3)

console.log("-----------------")
console.log("----GoodsList----")
let goodsList = new GoodsList([winter, winter2, winter3,], true, false);

goodsList.add(new Good(4, "tunic", "TU-TU-|TU", 34, 4030, false));
let winter5 = new Good(5, "tunic", "TU-TU-|TU", 34, 30, true);
goodsList.add(winter5);
console.log(goodsList.goods)

console.log()
console.log("----GoodsList.remove")
console.log(goodsList.remove(3))

console.log()
console.log("-----------------")
console.log("----BasketGood---")

let basketGood = new BasketGood();
basketGood.cart = [winter3, 13];
basketGood.cart = [winter5, 8];
basketGood.cart = [winter, 18];
console.log(basketGood.cart)

console.log()
console.log("-----------------")
console.log("------Basket-----")
let total = new Basket(basketGood);
total.totalAmounts
console.log(total.totalSums.goods.basket)
console.log(total.totalAmounts.totalAmount)
console.log(total.totalSums.totalSum)

console.log()
console.log("------Basket.add-")
let winter7  = new Good(7, 'jacket blue', "LA-LA-LA-LA", 45, 155, true)
console.log(total.add(winter7, 15)) // winter, winter2, winter3
console.log(total.totalAmounts.totalAmount)
console.log(total.totalSums.totalSum)

console.log()
console.log("------Basket.remove")
console.log(total.remove(winter7, 21))
console.log(total.totalAmounts.totalAmount)
console.log(total.totalSums.totalSum)

console.log()
console.log("------Basket.clear")
console.log("После проверки - закомментировать {Basket.clear}")
// console.log(total.clear())
// console.log(total.totalAmounts.totalAmount)
// console.log(total.totalSums.totalSum)

console.log()
console.log("------Basket.removeUnavailable")
total.goods.basket[0].available = false;
total.goods.basket[2].available = false;
console.log(total.removeUnavailable())
console.log(total.totalAmounts.totalAmount)
console.log(total.totalSums.totalSum)

