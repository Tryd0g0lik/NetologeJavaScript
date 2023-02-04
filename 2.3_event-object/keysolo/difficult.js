class Game {
	#stopwatch = {
		// clock: document.getElementsByClassName('timer'),
		minutes: document.getElementsByClassName('timer')[0].getElementsByClassName('timer__minutes'),
		secs: document.getElementsByClassName('timer')[0].getElementsByClassName('timer__seconds'),
	}

	constructor(htmlBlock) {
		this.htmlBlock = htmlBlock;
		this.statusWins = this.htmlBlock.getElementsByClassName('status__wins');
		this.statusLoss = this.htmlBlock.getElementsByClassName('status__loss');
		this.classWord = this.htmlBlock.getElementsByClassName('word');

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
			// let spans = document.createElement('span');

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
		// Screenshot36.png - если строка содержит одинаковые символы
		// 	и поиграть клавишами, то нажимая на клавишу отрабатываются все символы 
		//	пропорционально клавише. 
		try {
			const newWord = this.htmlBlock.getElementsByClassName('symbol')
			let i = 0;


			window.addEventListener('keydown', (e) => {
				let k = e.key;
				// console.log("1: ", e.key)
				// console.log("2: ", e.code)

				if (i < newWord.length) {
					Array(newWord).map((el) => {
						/* кАКое условие для работы с заглавными символами? */
						if ((k) === el[i].innerText && !newWord[i].classList.contains('symbol_correct')) {

							newWord[i].classList.add('symbol_correct');
							this.success()

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
			this.reset();
		}

	}

	fail() {
		this.statusLoss[0].innerText = Number(this.statusLoss[0].textContent) + 1
		if (Number(this.statusLoss[0].innerText) === 5) {
			alert('Вы проиграли!');
			this.reset();
		}
	}

	reset() {
		/* -----------      The calculator reset to zero */
		this.statusWins[0].innerText = 0;
		this.statusLoss[0].innerText = 0;
		/*       	-----------*/
	}

	timeWord() {
		/* Что лучше, секундомер прописать через модуль "Date" или самописный как данный?
		Для меня сейчас оба одинаковы, поэтому и спросил :)  */

		let date = new Date(2011, 0, 1, 0, 1, 25);
		// console.log(date.getMinutes() + ":" + date.getSeconds())

		let m = this.#stopwatch.minutes[0];
		let s = this.#stopwatch.secs[0];
		console.log(m.textContent)
		console.log(s.textContent)

		// setInterval(() => {
		
		// }, 1000)


		console.dir(m)
	}

	startWords() {
		/* 
		TODO: simply a trigger by all.
		*/

		const oneWord = this.words();
		const htmlWord = this.wordHtml(oneWord);
		this.publicateWords(htmlWord)
		this.eventKaywbort()

		this.timeWord()
		return
	}


}

new Game(document.getElementById('game'))


// for (let ind = +m.textContent; ind < 60 && ind >= 0; ind--) {
// 	m.textContent = String(ind);
// 	console.log("ind: ", ind)
// 	let sec = (ind === +m.textContent) ? +s.textContent : 59;
// 	for (let i = sec * 1000; i < 60000 && i >= 0; i--) {
		
// 		if (i % 1000 === 0) s.textContent = String(i / 1000);
// 		if (ind === 0 && i === 0) break;
// 		if (i === 0) {
// 			/* Как в одной строке прописать 2 вырожения ? */
// 			break
		
// 		}
		
// 		console.log("i: ", i)
// 	}
	
// }