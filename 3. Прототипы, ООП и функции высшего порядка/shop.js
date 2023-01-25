/*
Задача 2
 */
let f = {"products":[ // total db
    {"id":0,"title":"Торт","descriptions":"ля-ля-ля Тортище","sizes":100,"price":12,"available":true},
    {"id":1,"title":"Пирожок Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"available":true},
    {"id":2,"title":"Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"available":false},
    {"id":3,"title":"Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"available":false},
    {"id":4,"title":"Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"available":true},
    {"id":5,"title":"Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"available":false},
    {"id":6,"title":"Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"available":false},
    {"id":7,"title":"Сироп","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"available":true},
    {"id":8,"title":"Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"available":true},
    {"id":9,"title":"Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"available":true},
    {"id":10,"title":"Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"available":true},
    {"id":11,"title":"Клюква","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"available":true},
    ]}

let b = {"totalBasket":[ // the list product from the basket
    {"id":0,"title":"Торт","descriptions":"ля-ля-ля Тортище","sizes":100,"price":12,"available":true, 'amount': 15},
    {"id":1,"title":"Пирожок Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"available":true, 'amount': 19},
    {"id":4,"title":"Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"available":true, 'amount': 21},
    {"id":7,"title":"Сироп","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"available":true, 'amount': 1},
    {"id":8,"title":"Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"available":true, 'amount': 5},
    {"id":9,"title":"Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"available":true, 'amount': 150},
    {"id":10,"title":"Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"available":true, 'amount': 3},
    ]}
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

    remove(id){ // как в списке объектов определить индекс объекта при условии, что свойство свопало не используя цикл?
        let i=0;
        for (let elem of this.#goods) {
            if (Number(elem.id) === Number(id)) (this.#goods).splice(i, 1);
            i++;
        }

        return this.#goods
    }
}

class BasketGood extends Good{
    #basket=[];
    constructor(id, title, descriptions, sizes, price, available, amount) {
        super(id, title, descriptions, sizes, price, available);
        this.amount = amount;
    }
    set amount(val){
        this.amount['amount'] = val;
        return this
    }
    get amount(){
        return this
    }
}

let winter  = new Good(1, 'jacket', "LA-LA-LA-LA", 50, 1355, true)
let winter2  = new Good(2, 'jacket red', "LA-LA-LA-LA", 50, 1055, false)
let winter3  = new Good(3, 'jacket blue', "LA-LA-LA-LA", 45, 3055, true)
winter.Available = true
console.log(winter, winter2, winter3)

console.log("-----------------")
console.log("----GoodsList----")
// let winterList = new GoodsList(true, true);
// let winterList2 = new GoodsList(true);
let winterList3 = new GoodsList([winter, winter2, winter3,], true, false);

winterList3.add(new Good(4, "tunic", "TU-TU-|TU", 34, 4030, false));
winterList3.add(new Good(5, "tunic", "TU-TU-|TU", 34, 30, true));
console.log(winterList3.goods)
console.log()
console.log("----GoodsList.remove")
console.log(winterList3.remove(3))
console.log()
console.log("----BasketGood---")
let amount = new BasketGood(winter);
amount.amount = 5;
console.log(amount.amount)
console.log()
