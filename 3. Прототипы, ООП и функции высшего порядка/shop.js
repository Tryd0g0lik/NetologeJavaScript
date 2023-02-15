// Значит, данные (например available) проходят все проверки до того как попадают в this.available  - Ок
class Good {
	constructor(id, title, descriptions, sizes, price, available) {
		this.id = id;
		this.title = title;
		this.description = descriptions;
		this.size = sizes;
		this.price = price;
		this.available = available;
	}

	setAvailable(value = false) { // изменение признака доступности для продажи
		this.available = value;

	}
}


class GoodsList {
	#goods = [];
	constructor(dataList = [], sortPrice = false, sortDir = false) {
		this.sortPrice = sortPrice;
		this.sortDir = sortDir;
		this.#goods = dataList;
		this.filterTitle = new RegExp(/(^([[А-Яа-яa-z0-9]+) ?([А-Яа-яa-z0-9])*\S?\s?([а-яa-z0-9]+)* ?([-_ ])? ?[а-яa-z0-9]*[а-яa-z0-9$]?)/);
	}

	get list() {
		let arrSortDirNull = this.#goods.filter(item => !item.sortDir)

		if (this.sortPrice) {
			if (!this.sortDir) {
				arrSortDirNull.sort((a, b) => {

					if ((this.filterTitle).test(a.title) && (this.filterTitle).test(b.title)) {
						if (a.price < b.price) return 1;
						if (a.price === b.price) return 0;
						if (a.price > b.price) return -1;
					}
				});
			}

			if (this.sortDir) {
				arrSortDirNull.sort((a, b) => {

					if ((this.filterTitle).test(a.title) && (this.filterTitle).test(b.title)) {
						if (a.price < b.price) return -1;
						if (a.price === b.price) return 0;
						if (a.price > b.price) return 1;
					}
				});
			}
		}

		return arrSortDirNull
	}

	add(val) {
		(this.#goods).push(val);

	}

	remove(id) {
		let i = 0;
		for (let elem of this.#goods) {
			if (elem.id === id) (this.#goods).splice(i, 1);
			i++;
		}

		let _goods = this.#goods
		return _goods
	}
}

class BasketGood extends Good {

	constructor(good, amount) {
		super(good.id, good.title, good.description, good.size, good.price, good.available)

		this.amount = amount
	}
}

class Basket {

	constructor(goods) {
		this.goods = goods; //Array[]
	}

	get totalSums() {
		let count = 0;
		return this.goods.reduce((sum, item) => {
			count = sum + item.amount;

			return count
		}, 0);

	}

	get totalAmounts() {
		let count = 0;
		return this.goods.reduce((sum, item) => {
			count = sum + item.amount * item.price;

			return count
		}, 0);
	}

	add(good, amount) {
		let i = this.goods.indexOf(good.id, 0);

		if (i < 0) { this.goods.push(new BasketGood(good, amount)); }
		if (i >= 0) { this.goods[i].amount + amount }

		let goods = this.goods
		return goods;
	}

	remove(good, amount) {
		for (let i = 0; i < this.goods.length; i++) {

			if (this.goods[i].id === good.id) {
				this.goods[i].amount -= amount;
				if (this.goods[i].amount <= 0) { this.goods.splice(i, 1) }
			}
		}

		let goods = this.goods;
		return goods;
	}

	clear() {
		this.goods.basket = []
	}

	removeUnavailable() {
		this.goods = this.goods.filter(item => item.available === true);

		let goods = this.goods
		return goods
	}
}

let winter = new Good(1, 'jacket', "LA-LA-LA-LA", 50, 1355, true)
let winter2 = new Good(2, 'jacket red', "LA-LA-LA-LA", 50, 1055, false)
let winter3 = new Good(3, 'jacket blue', "LA-LA-LA-LA", 45, 3055, true)

winter2.setAvailable(true);
console.log(winter, winter2, winter3)


console.log("-----------------")
console.log("----GoodsList----")
let goodsList = new GoodsList([winter, winter2, winter3,], true, true);

goodsList.add(new Good(4, "tunic", "TU-TU-|TU", 34, 4030, false));

let winter5 = new Good(5, "tunic", "TU-TU-|TU", 34, 30, true);
goodsList.add(winter5);

console.log(goodsList.list)
console.log()


console.log("----GoodsList.remove")
console.log(goodsList.remove(3))
console.log()


console.log("-----------------")
console.log("----BasketGood---")
let basketGood = new BasketGood(winter, 18);
let basketGood3 = new BasketGood(winter3, 13);
let basketGood5 = new BasketGood(winter5, 8);

console.log('basketGood: ', basketGood)
console.log()


console.log("-----------------")
console.log("------Basket-----")
let total = new Basket([basketGood, basketGood3, basketGood5]);

console.log(total.totalAmounts);
console.log(total.totalSums);
console.log()


console.log("------Basket.add-")
let winter7 = new Good(7, 'jacket blue', "LA-LA-LA-LA", 45, 155, true)
console.log(total.add(winter7, 18)) // winter, winter2, winter3

console.log(total.totalAmounts)
console.log(total.totalSums)
console.log()


console.log("------Basket.remove")
console.log(total.remove(winter7, 1))

console.log(total.totalAmounts)
console.log(total.totalSums)
console.log()


console.log("------Basket.clear")
console.log("После проверки - закомментировать {Basket.clear}")
// console.log(total.clear())

// console.log(total.totalAmounts.totalAmount)
// console.log(total.totalSums.totalSum)
console.log()


console.log("------Basket.removeUnavailable")
total.goods[0].available = false;
total.goods[2].available = false;
console.log(total.removeUnavailable())

console.log(total.totalAmounts)
console.log(total.totalSums)