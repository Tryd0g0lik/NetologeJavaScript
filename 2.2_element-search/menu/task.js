/* 
	Attribute 'onclick'  we delete of all references
*/
for (let elem of ['menu_main', 'menu_aside']) {
	console.log(elem)
	const getMenu_main = document.getElementsByClassName(elem);
	const a = getMenu_main[0].getElementsByTagName('a')

	for (let i = 0; i < a.length; i++) {

		if (a[i].hasAttribute("onclick")) {
			if (a[i].getAttribute("onclick") === 'return false') {
				a[i].removeAttribute("onclick");
			}
		}
	}
}

/*
	we start workworking with a submenu.
*/
const getMenu_sub = document.getElementsByClassName('menu_sub');

function OpenCloseSubmenu() {
	for (let i = 0; i < getMenu_sub.length; i++) {

		let reference = getMenu_sub[i].parentElement.firstElementChild;

		if (!reference.hasAttribute(onclick)) { //=== false
			reference.setAttribute('onclick', "return false");
		}

		reference.addEventListener('click', () => {
			closeActiveSubmenu();
			let classesName = getMenu_sub[i].className;
			getMenu_sub[i].classList.toggle(`menu_active`);
		})
	}

}
OpenCloseSubmenu();

function closeActiveSubmenu() {
	/*
		We get the check on a 'menu_active'  class.
		When we find his, then we will delete it
	*/
	let getMenusub = document.getElementsByClassName('menu_sub');
	for (let i = 0; i < getMenusub.length; i++) {
		if (getMenusub[i].classList.contains('menu_active')) {
			getMenusub[i].classList.remove(`menu_active`);
		}

	}
}