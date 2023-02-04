class Game {
	#stopwatch = {
		minutes: document.getElementsByClassName('timer')[0].getElementsByClassName('timer__minutes'),
		secs: document.getElementsByClassName('timer')[0].getElementsByClassName('timer__seconds'),
	}

	constructor(htmlBlock) {
		this.htmlBlock = htmlBlock;
		this.statusWins = this.htmlBlock.getElementsByClassName('status__wins');
		this.statusLoss = this.htmlBlock.getElementsByClassName('status__loss');
		this.classWord = this.htmlBlock.getElementsByClassName('word');
		this.timeWord();
		this.startWords();
	}

	words() {
		const word = [
			'bob',
			'awesome',
			'netology',
			'hello',
			'kitty',
			'rock',
			'youtube',
			'popcorn',
			'cinema',
			'love',
			'javascript'
		],
			ind = Math.floor(Math.random() * word.length);
		return word[ind]

	}

	wordHtml(singlWord) {
		/*
			TODO: Here old word delete and create new word of html format
		*/

		document.querySelectorAll('.symbol').forEach((e) => e.remove())
		try {

			const newHtml = [...singlWord].map((el, i) => {
				return `<span class="symbol ${i === 0 ? "symbol_current" : ""}">${el}</span>`
			}).join('');

			return newHtml

		} catch (e) {
			console.log(`ERROR message: ${e.message}`)
			console.log(`ERROR stack: ${e.stack}`)

		}
	}

	publicateWords(htmlWord) {

		// this.classWord[0].insertAdjacentHTML('beforeend', htmlWord);
		Object(this.classWord)[0].innerHTML = htmlWord;
		return
	}


	eventKaywbort() {
		/*
		 TODO: this's listener on an event of the keywbord.
		*/

		try {
			const newWord = this.htmlBlock.getElementsByClassName('symbol')
			let i = 0;


			window.addEventListener('keydown', (e) => {
				let k = e.key;

				if (i < newWord.length) {
					Array(newWord).map((el) => {
						/* кАКое условие для работы с заглавными символами? */
						if ((k) === el[i].innerText && !newWord[i].classList.contains('symbol_correct')) {

							newWord[i].classList.add('symbol_correct');
							this.success();

							if (i === newWord.length - 1) this.startWords();
							i++
						} else {
							this.fail()

						}
					});

				}

			});


		} catch (e) {
			console.log(`ERROR message: ${e.message}`)
			console.log(`ERROR stack: ${e.stack}`)
		}
	}



	success() {
		this.statusWins[0].innerText = String(Number(this.statusWins[0].innerText) + 1)
		/* `if (++this.winsElement.textContent === 10)` какую роль играют "++"?
		Пытался использовать аналогично, но не заработало. Пришлось тип "Number" данных пропысывать */
		if (Number(this.statusWins[0].innerText) == 10) {
			alert('Ты победитель!');
			this.stopInterval();
			this.reset();
			document.getElementsByClassName('timer')[0].innerHTML = '<h3>Вы победитель!</h3>'
		}

	}

	fail() {
		this.statusLoss[0].innerText = Number(this.statusLoss[0].textContent) + 1
		if (Number(this.statusLoss[0].innerText) === 5) {
			alert('Вы проиграли!');
			this.stopInterval();
			this.reset();
			document.getElementsByClassName('timer')[0].innerHTML = '<h3>Вы проиграли!</h3>'


		}
	}

	reset() {
		/* -----------      The calculator reset to zero */
		this.statusWins[0].innerText = 0;
		this.statusLoss[0].innerText = 0;
		/*       	-----------*/
	}

	timeWord() {
		let ss = +this.#stopwatch.secs[0].textContent;
		let mm = +this.#stopwatch.minutes[0].textContent;

		let timer = setInterval(() => {

			this.#stopwatch.secs[0].textContent = String(ss);
			this.#stopwatch.minutes[0].textContent = String(mm);

			ss--;
			if (ss === -1 && mm === 0) clearInterval(timer);

			if (ss < 0) ss = 59;

			if (ss === 59) mm = mm - 1;

		}, 1000);

	}

	stopInterval() {

		this.publicateWords('<span></span>');
		Object(this.classWord)[0].innerHTML = '';
		return
	}

	startWords() {
		/* 
		TODO: simply a trigger by all.
		*/

		const oneWord = this.words();
		const htmlWord = this.wordHtml(oneWord);
		this.publicateWords(htmlWord)
		this.eventKaywbort()


		return
	}


}

new Game(document.getElementById('game'))
