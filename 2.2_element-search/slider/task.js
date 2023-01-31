const getArrowsNanigate = document.getElementsByClassName("slider__arrow");
const sliders = document.getElementsByClassName('slider__items');
const sliderItem = document.getElementsByClassName('slider__item');

for (let i = 0; i < getArrowsNanigate.length; i++) {
	getArrowsNanigate[i].addEventListener('mousedown', () => {
		if (getArrowsNanigate[i].classList.contains('slider__arrow_prev')) {
			showSliderLeft();
		}

		if (getArrowsNanigate[i].classList.contains('slider__arrow_next')) {
			showSliderRight();
		}


	});
}


function showSliderLeft() {
	sliderItem[0].classList.remove('slider__item_active');
	sliders[0].append(sliderItem[0]);
	sliderItem[0].classList.add('slider__item_active');

}


function showSliderRight() {
	sliderItem[0].className = `slider__item`;
	sliders[0].prepend(sliderItem[sliderItem.length - 1]);
	sliderItem[0].classList.add('slider__item_active');

}