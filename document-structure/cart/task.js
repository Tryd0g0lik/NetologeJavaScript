"use strict";
class Product {
    constructor(dataId, quantity) {
        this.id = dataId;
        this.quantity = quantity;
    }
    add(intg) {
        this.quantity += intg;
        let sum = this.quantity;
        return sum;
    }
    minus(intg) {
        this.quantity -= intg;
        let sum = this.quantity;
        return sum;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    /* This's products from a catalog 1  - start*/
    const products = document.getElementsByClassName('products');
    const product = products[0].getElementsByClassName('product');
    let arrProducts = Array.from(product).filter(item => item.hasAttribute('data-id'));
    /* products from a catalog  - end*/
    let card = '';
    for (let elem of arrProducts) {
        elem.addEventListener('click', e => {
            /* It's cart or basket of the shop - start */
            let cartProductsElem = document.getElementsByClassName('cart__products');
            let cart__productColl = cartProductsElem[0].getElementsByClassName('cart__product');
            /* It's cart or basket of the shop - end */
            /* It's single product from a total catalog 1  - start*/
            let evetTarget = e.target;
            let parrent = evetTarget.closest('.product');
            let parrentDataId = Number(parrent.getAttribute('data-id')); // id
            let srcImgElem = parrent.getElementsByTagName('img'); // thi reference
            let srcImg = srcImgElem[0].getAttribute('src');
            let quantityElem = parrent.getElementsByClassName('product__quantity-value'); // it's quantity from the one product
            let quantity = Number(quantityElem[0].textContent);
            /* It's single product from a total catalog 1  - end*/
            if (quantity >= 0) {
                const dataId = new Product(parrentDataId, quantity);
                const clickNumber = 1;
                if (evetTarget.classList.value.includes('__quantity-control_dec')) { // "-" a buttom
                    let sum = dataId.minus(clickNumber);
                    if (sum <= 0) {
                        totalSum(1);
                        return;
                    }
                    totalSum(sum);
                }
                else if (evetTarget.classList.value.includes('__quantity-control_inc')) { // "+" a button
                    let sum = dataId.add(clickNumber);
                    totalSum(sum);
                }
                /* It's cart or basket of the shop 2 - start */
                else if (evetTarget.classList.value.includes('product__add') && quantity > 0) { //"Добавить в корзину" a button
                    let trueFalse = card.includes(`data-id="${parrentDataId}"`);
                    if (trueFalse === false) {
                        cartProductsElem[0].innerHTML = htmlCard();
                    }
                    else if (trueFalse === true) {
                        let carsProduct = Array.from(cart__productColl).filter(item => { return Number(item.getAttribute('data-id')) === parrentDataId; });
                        let count = carsProduct[0].getElementsByClassName('cart__product-count');
                        let intg = Number(count[0].textContent);
                        count[0].textContent = String(intg + quantity);
                    }
                    ;
                    totalSum(1);
                }
                else if (evetTarget.classList.value.includes('product__add') && quantity <= 0) {
                    totalSum(1);
                }
                /* It's cart or basket of the shop 2 - end */
                function htmlCard() {
                    card += `<div class="cart__product" data-id="${parrentDataId}">
							<img class="cart__product-image" src="${srcImg}">
							<div class="cart__product-count">${quantity}</div>
						</div>`;
                    return card;
                }
                function totalSum(sum) {
                    quantityElem[0].textContent = String(sum);
                    return;
                }
            }
        });
    }
});
