// Надеюсь предусмотрел случай, когда на странице может одновременно находиться несколько таких кнопок
const a = document.getElementsByClassName('dropdown__link');
for (let i = 0; i < a.length; i++)
	a[i].setAttribute("onclick", 'return false');


const cards = document.getElementsByClassName('card');
const dropdownList = document.getElementsByClassName('dropdown__list');


cards[0].addEventListener('click', (e) => {
	let targets = e.target;

	if (targets.classList.contains('dropdown__value')) dropdownList[0].classList.add('dropdown__list_active');
	if (targets.classList.contains('dropdown__link')) {
		document.getElementsByClassName('dropdown__value')[0].innerText = targets.innerText
		closes();
	}


});

function closes() {
	// a[0].closest('.dropdown__list').classList.remove('dropdown__list_active');
	cards[0].firstElementChild.firstElementChild.nextElementSibling.classList.remove('dropdown__list_active');
}