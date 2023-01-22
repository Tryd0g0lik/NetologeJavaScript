/*
Задача 2
 */
let f = {"products":[
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
    {"id":11,"title":"Клюква","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"available":false},
    ]}

class Good {
    #catalogName = null;
    constructor(id=0, title, description, size=[],
                price=1, available=0) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.size = size;
    this.price = price;
    this.available = available;
    // this.totalpriceALL = totalpriceALL;

    }
    setAvailable(catalog, idList, numb) { // изменение признака доступности для продажи
       /*
         Params: 'catalog',
                  'copyCatalog' -   this is JSON's object .

                'idList'      -     this is list with a position numbers/id.
                'numb'   -     these are properties, availability level '0' , '1'.
       */

        let available = this.available     ;
        this.#catalogName = null;

        for (const [key, value] of Object.entries(catalog)){
            this.#catalogName = String(key);
        }
        let copyCatalog ={catalogName : []}

        for (let elem in catalog[catalogName]){
            for (let numb in idList) {

                if (elem['id'] === Number(numb) &&
                    !(elem['available'] === numb)) {

                    elem['available'] = numb;
                    copyCatalog['catalogName'].push(elem);
                } else {
                    copyCatalog['catalogName'].push(elem);
                }
            }
        }

        return copyCatalog
    }
}

class GoodsList extends Good {
    // - класс для хранения каталога товаров со свойствами:
    // Для фильтрации и сортировки используйте функции массивов filter и sort с передачей в них соответствующих стрелочных функций
    #goods = null;              // массив экземпляров объектов класса Good (приватное поле)
    #catalogName = null;        // Согласно статье:

    // https://bobbyhadz.com/blog/javascript-private-field-must-be-declared-in-enclosing-class
    constructor(sortP = false, sortD=false) {

        super( 0, null, null,[],
            1, false)

        this.#goods = (catalog) => {
            let l = [];
            for (let [key, value] of Object.entries(catalog)) {
                this.#catalogName = key;
            }

            for (let ele in catalog[String(this.#catalogName)]) {
                if (ele['available'] === true) {
                    l.push(ele['available'])
                }
            }

            return l
        };

        this.sortD = sortD;

        this.sort = {
            /*
            TODO: HEre is sorting of the products list .
            Params: 'catalog'   - The final product which exit from here.
                    'sortPrice' - This parameter is for run up and run out the sorting.
                    'sortDir'   - This's a sorts from zero to max and reverse.
                'catalogName'   - The catalog's title => "{catalogName : []}"
                        'l'     - The position after sorting  go into common list.
             */

            catalog: null,
            sortPrice: sortP,   //  включения сортировки по полю Price
            sortDir: this.sortD,     //    направления сортировки по полю Price (true - по возрастанию, false - по убыванию)
            filters : new RegExp(/(^([А-Я]{1}[А-Яа-яa-z0-9]+) ?([А-Яа-яa-z0-9])*\S?\s?([а-яa-z0-9]+)* ?([-_ ])? ?[а-яa-z0-9]*[а-яa-z0-9$]?)/),
            catalogName: null,
            l: [],
            elemCatalog: (thisList)=>{
                this.catalog = {'sorted' : []}
                for(let elem of thisList){
                    this.catalog['sorted'].push(elem[1])
                }
                return this.catalog
            },

            set sortList(value){
                /*
                    Params: 'value: Array'
                 */
                // = copyCatalog //  возвращает массив доступных для
                // продажи товаров в соответствии с
                // установленным

                    // Для проверки соответствия поля name регулярному выражению в фильтре, используйте такую конструкцию
                    // filter.test(good.title). При этом в поле filter должно быть записано регулярное выражение, описываемое в JS как:
                    // /<regexp>/<flags>



                for (let [key, val] of Object.entries(value)) {
                    this.catalogtitle = key;
                }

                for (let elem of (value[String(this.catalogName)]).filter(item => item.price > 0)){
                    this.l.push([Number(elem.price), elem])
                }

                for (let elem of this.l) {
                    if (elem[1]['available'] === true &&
                        this.sortDir === false &&
                        (this.filters.test(elem[1]['title'])) === true) {

                        (this.l).sort((a, b) => {
                            if (a[0] > b[0]) return 1;
                            if (a[0] === b[0]) return 0;
                            if (a[0] < b[0]) return -1
                        });

                    } else if (elem[1]['available'] === true &&
                        this.sortDir === true &&
                        (this.filters.test(elem[1]['title'])) === true){

                        (this.l).sort((a, b) => {
                            if (a[0] < b[0]) return 1;
                            if (a[0] === b[0] ) return  0;
                            if (a[0] > b[0]) return -1
                        })
                    }
                }

                this.catalog = this.elemCatalog(this.l)

            },

            get sortList(){
                return this.catalog
            }
        }
    }

    sorts(catalogs){
        /*
        TODO: It 's for a product sorting. Read the description from a 'this.sort' property
         */
       this.sort.sortList = catalogs;
       return this.sort.sortList
    }


    add(newData = null, catalog) {
        /*
        TODO: The position will be added into catalog.
        Params: -   'newData' - this's object, new position for a catalog.
                    'newData'   - {id, title, descriptions, sizes, prices, avaibles,
                    'catalog'   -   this is JSON's object .
        };

         */



        for (let [key, value] of Object.entries(catalog)){
            this.#catalogName = key;

        }

        let len = catalog[String(this.#catalogName)].length;
        let i = 0;
        for (let elem in catalog[String(this.#catalogName)]) {
            if (catalog[String(this.#catalogName)][i]['id'] === len)
                return "Rewrite the 'id'";
            i++;
        }

        newData = {
            id: len,
            title: this.title,
            description: this.description,
            sizes: this.size,
            prices: this.price,
            avaibles: this.available     ,
        };

        (catalog[String(this.#catalogName)]).push(newData);
        return catalog
    }

    remove(id, catalog) { //  удаление товара из каталога по его id
        /*
        TODO: to remove one iem at a time.
        Params: 'catalog'   -   this is JSON's object .

         */
        for (let [key, volue] of Object.entries(catalog)){
            this.#catalogName = key;
        }

        let i = 0;
        for (let elem in catalog[String(this.#catalogName)]){
            if (Number(elem['id']) === Number(id)){
                catalog[String(this.#catalogName)].splice(i, 1);
            }
            i++
        }

        return catalog;
    }
}

class BasketGood extends Good{
    /*
        TODO: For a one product/position here will be adding the count/quantity and that's all/end
        Params: 'amount'    - the product quantity.
            'fullBasket'    - the product's list of the basket.
     */
    //   для хранения данных о товаре в корзине с дополнительным свойством:
    //  (товар помещаемый в корзину),
    constructor(id, amount){
        super(id)

        this.goods = {"Basket " : []}; //   массив объектов класса BasketGood для хранения данных о товарах в корзине
        this.positionCheck = {
            /*
                TODO: made a dynamic function under any directory. After taking the id position and checking the
                  index, we send the position to the basket/
             */
            id: this.id,
            inBasket: null,

            catalogPositName: (catalog)=> {
                /*
                    TODO: The dynamic catalog.
                 */

                for (let [key, val] of Object.entries(catalog)) return key
            },
            set fullBasket(catalog){
                /*
                    TODO: Checking the position
                 */

                for (let elem of catalog[this.catalogPositName(catalog)]){
                    if (elem['id'] === this.id) this.inBasket = elem; }
            },

            get fullBasket(){
                return this.inBasket
            }

        }

        this.product = [null , null];
        this.basket = {
            /*
                TODO: The basket fulling. Position after the check and plus quantity
             */
            amount: amount, //    количество товара в корзин
            fullBasket: {'BasketGood': []},

            set fulling(value){
                if (value[0]['available'] === true) {

                    value[0]['amount'] = value[1];
                    this.fullBasket['BasketGood'].push(value[0])
                    return this.fullBasket
                }
            },

            get fulling(){
                return this.fullBasket
            }

        };
    }

    addQuantity(catalogName){
        /*
            Params: 'catalogName'   -the catalog name;
         */
        this.positionCheck.fullBasket = catalogName
        this.product = [this.positionCheck.fullBasket, this.basket.amount]

        this.basket.fulling = this.product
        return this.basket.fulling
    }
}

class Basket extends Good {
    constructor() {
        super()

        // this.id = id;
        // this.title = title;
        // this.description = description;
        // this.size = size;
        // this.price = price;
        // this.available = available;
        // this.amount = amount;

        // this.product = [{"id": this.id, "title": this.title, "descriptions": this.description, "sizes": this.size, "price": this.price, "available": this.available}, this.amount]
        // this.totalQuantity = null;


        //  При реализации геттеров используйте методы массивов, такие как reduce() и forEach().

        this.totalQuantity = {
            result: null,
            catalogName: null,
            quantity: ' Общее кол-во',

            set totalAmount(value) {

                for (let [key, val] of Object.entries(value)) this.catalogName = key;
                this.result = value[this.catalogName].reduce((sum, curr) => {
                    return Number(sum) + Number(curr['amount'])
                }, 0);

                return this.result
            },

            get totalAmount() { //   возвращает общую стоимость товаров в корзине
                return [this.result, this.quantity]
            },
        }

        this.totalSum ={
            result: null,
            catalogName: null,
            quantity: ' Руб.',

            set totalSum(value){

                for (let [key, val] of Object.entries(value)) this.catalogName = key;
                this.result = value[this.catalogName].reduce((sum, curr) => {
                    return (Number(sum) + (Number(curr['price']) * Number(curr['amount'])));
                });
                console.log(this.result)
                return this.result
            },

            get totalSum() { //  возвращает общее количество товаров в корзине
                console.log([this.result, this.quantity[0]])
                return [this.result, this.quantity]

            },
        }
    }
    add(good, amount){ //       Добавляет товар в корзину, если товар уже есть увеличивает количество
        // this.basket.fulling = this.product;
        // console.log(`3: ${JSON.stringify(this.basket.fulling)}`)
        // return
    }

    remove(good, amount){ //    Уменьшает количество товара в корзине, если количество становится равным нулю, товар удаляется

    }
    clear(){ //                  Очищает содержимое корзины

    }
    removeUnavailable(){ //       Удаляет из корзины товары, имеющие признак available === false (использовать filter())

    }
}
/*
    Вызовите несколько раз реализованные методы этих объектов с необходимыми аргументами, устанавливая условия
    фильтрации и сортировки для GoodsList. Выведите в консоль отфильтрованный и сортированный каталог товаров, а
    также значения общих суммы и количества товаров в корзине.
 */


// let resp = new GoodsList(true, true);

let b = {"totalBasket":[
    {"id":0,"title":"Торт","descriptions":"ля-ля-ля Тортище","sizes":100,"price":12,"available":true, 'amount': 15},
    {"id":1,"title":"Пирожок Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"available":true, 'amount': 19},
    {"id":4,"title":"Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"available":true, 'amount': 21},
    {"id":7,"title":"Сироп","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"available":true, 'amount': 1},
    {"id":8,"title":"Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"available":true, 'amount': 5},
    {"id":9,"title":"Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"available":true, 'amount': 150},
    {"id":10,"title":"Пирожок","descriptions":"LA-LA-LA-LA","sizes":1050,"price":1355,"available":true, 'amount': 3},
    ]}

console.clear()
// let g = resp.sorts(f)
// console.log("_______>"+ JSON.stringify(g))

// let prod = new BasketGood(10, 17)
// prod.addQuantity(f)

let totalBasket = new Basket();

totalBasket.totalQuantity.totalAmount = b;
totalBasket.totalSum.totalSum = b;

console.log(JSON.stringify(totalBasket.totalQuantity.totalAmount));
console.log(JSON.stringify(totalBasket.totalSum.totalSum));