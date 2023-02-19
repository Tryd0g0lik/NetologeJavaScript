const main = document.getElementsByTagName('main');
class Menu {
	constructor(main) {
		this.mains = main;
	}
	mathod() {
		this.mains[0].addEventListener('click', (e) => {
			let parrent = e.target.closest('.content').getElementsByClassName('dropdown__list_active')[0];

			if (e.target.classList.contains('dropdown__value')) {
				let m = document.getElementsByClassName('dropdown__value');
				for (let i = 0; i < m.length; i++) {
					let t = m[i].nextElementSibling.getElementsByClassName('dropdown__link')[0].textContent;

					if (m[i].textContent !== t) { //	This's checking a title of the menu wich has 'dropdown__value' class
						m[i].textContent = t;
					}
				}
				menu();
			}
			if (e.target.classList.contains('dropdown__link')) { //  Opening the submenu
				submenu();
			}
			function menu() {
				/*
						insert and remove the 'dropdown__list_active' class
				*/

				let menuList = e.target.nextElementSibling;
				menuList.classList.add('dropdown__list_active');
			}
			function submenu() {
				/*
						the title menu is reset
				*/
				let text = e.target.innerText;
				console.log(e.target.closest('.dropdown').firstElementChild.innerText);
				e.target.closest('.dropdown').firstElementChild.innerText = text;

				parrent.classList.remove('dropdown__list_active'); // Closing the submenu

			}
		});
	}
}
main[0].addEventListener('click', (e) => {
	e.preventDefault();
});
let car = new Menu(main);
car.mathod();
