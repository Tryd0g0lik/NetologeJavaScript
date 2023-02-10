class Good {
	constructor(id, title, descriptions, sizes, price, available) {
		this.id = id;
		this.title = title;
		this.description = descriptions;
		this.size = sizes;
		this.price = price;
		this.available = available;
	}

	setAvailable(value) { // изменение признака доступности для продажи
		this.available = value;
		return value
	}
}


class GoodsList {
	#goods = [];
	constructor(dataList = [], sortPrice = false, sortDir = false) {
		this.sortPrice = sortPrice;
		this.sortDir = sortDir;
		this.#goods = dataList;
	}

	get goods() {
		let filterTitle = new RegExp(
			/(^([[А-Яа-яa-z0-9]+) ?([А-Яа-яa-z0-9])*\S?\s?([а-яa-z0-9]+)* ?([-_ ])? ?[а-яa-z0-9]*[а-яa-z0-9$]?)/
		);
		let goodsTrue = this.#goods.filter(item => item['available'] ===
			true);

		if (this.sortPrice) {
			if (!this.sortDir) {
				goodsTrue.sort((a, b) => {
					if ((filterTitle).test(a.title) && (filterTitle)
						.test(b.title)) {
						if (parseInt(a.price) < parseInt(b.price))
							return 1;
						if (parseInt(a.price) === parseInt(b.price))
							return 0;
						if (parseInt(a.price) > parseInt(b.price))
							return -1;
					}
				});
			}

			if (this.sortDir) {
				goodsTrue.sort((a, b) => {
					if ((filterTitle).test(a.title) && (filterTitle)
						.test(b.title)) {
						if (parseInt(a.price) > parseInt(b.price))
							return 1;
						if (parseInt(a.price) === parseInt(b.price))
							return 0;
						if (parseInt(a.price) < parseInt(b.price))
							return -1;
					}
				});
			}
		}

		return goodsTrue
	}

	add(val) {
		(this.#goods).push(val);
		return this
	}

	remove(id) {
		let i = 0;
		for (let elem of this.#goods) {
			if (elem.id === id) (this.#goods).splice(i, 1);
			i++;
		}

		return this.#goods
	}
}


class BasketGood {
	constructor() {
		this.amount = 0;
		this.basket = [];
	}

	cart(val) {
		this.basket.push({
			'position_id': val[0].id,
			'title': val[0].title,
			'price': val[0].price,
			'quantity': this.amount = val[1],
			'available': val[0].available
		})

		return this.basket
	}
}


class Basket extends BasketGood {
	#result = [];
	constructor(goods) {
		super()
		this.goods = goods;
	}

	get totalAmounts() {
		this.totalAmount = this.goods.basket.reduce((sum, item) => {
			if (item) return sum + item.quantity;
		}, 0);
		return this.totalAmount
	}

	get totalSums() {
		this.totalSum = this.goods.basket.reduce((sum, item) => {
			if (item) return sum + item.quantity * item.price;
		}, 0);

		return this.totalSum
	}

	add(good, amount) {
		let getDublGood = this.goods.basket.filter(item => item.position_id ===
			good.id);
		if (getDublGood.length > 0) getDublGood.position_id + good.quantity;
		if (getDublGood.length === 0) this.goods.basket.push(super.cart([
			good, amount
		])[0]);

		return this.goods.basket;
	}

	remove(good, amount) {
		this.#result = (this.goods.basket).filter(item => {
			if (item) return item.position_id === good.id
		});

		for (let i = 0; i < this.goods.basket.length; i++) {
			if (this.#result[0]['quantity'] <= amount)
				if (this.goods.basket[i].position_id === this.#result[0].position_id)
					this.goods.basket.splice(i, 1);

			if (this.#result[0]['quantity'] > amount)
				if (this.goods.basket[i].position_id === this.#result[0].position_id)
					this.goods.basket[i].quantity = this.goods.basket[i].quantity -
						amount;
		}

		this.#result = [];
		return this.goods.basket;
	}

	clear() {
		return this.goods.basket = []
	}

	removeUnavailable() {
		this.goods.basket = this.goods.basket.filter(item => item.available ===
			true);
		return this.goods.basket
	}
}

let winter = new Good(1, 'jacket', "LA-LA-LA-LA", 50, 1355, true)
let winter2 = new Good(2, 'jacket red', "LA-LA-LA-LA", 50, 1055, false)
let winter3 = new Good(3, 'jacket blue', "LA-LA-LA-LA", 45, 3055, true)
winter2.setAvailable(true);
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
basketGood.cart([winter3, 13]);
basketGood.cart([winter5, 8]);
console.log(basketGood.cart([winter, 18]));
console.log()

console.log("-----------------")
console.log("------Basket-----")
let total = new Basket(basketGood);
console.log(total.totalAmounts);
console.log(total.totalSums);
console.log()

console.log("------Basket.add-")
let winter7 = new Good(7, 'jacket blue', "LA-LA-LA-LA", 45, 155, true)
console.log(total.add(winter7, 15)) // winter, winter2, winter3
console.log(total.totalAmounts)
console.log(total.totalSums)
console.log()

console.log("------Basket.remove")
console.log(total.remove(winter7, 21))
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
total.goods.basket[0].available = false;
total.goods.basket[2].available = false;
console.log(total.removeUnavailable())
console.log(total.totalAmounts)
console.log(total.totalSums)