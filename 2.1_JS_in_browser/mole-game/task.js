let i = 0;
reputation = 0;
minusing = 0;
window.addEventListener('click', () => {
	let result = document.getSelection('.hole');
	let dead = document.getElementById('dead');
	let lost = document.getElementById('lost');

	if (Number(i) < 14) {
		if (((result.anchorNode).className).includes('hole_has-mole') === true) {
			reputation++;
			dead.innerText = String(reputation);

		}

		if (((result.anchorNode).className).includes('hole_has-mole') !== true) {
			minusing++;
			lost.innerText = String(minusing);

		}

		if (reputation === 2 || minusing === 5) {
			let answered = confirm("Обнулить?");

			if (answered === true) {
				reputation = 0; minusing = 0;
				dead.innerText = String(reputation);
				lost.innerText = String(minusing);

			}

		}
	}
});






