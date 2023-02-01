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

		} else if (((result.anchorNode).className).includes('hole_has-mole') !== true) {
			minusing++;
			lost.innerText = String(minusing);

		}

		if (Number(minusing) === 5) document.location.assign('./img.png');
		else if (Number(reputation) === 10) {
			location.assign('./img_1.png')
		}
	}
})




