class Tabs {
	constructor(htmlBlock) {
		this.htmlBlock = htmlBlock;
		this.headeTabe = this.htmlBlock.getElementsByClassName('tab');
		this.tabeContent = this.htmlBlock.getElementsByClassName('tab__content');
		this.startWork();
	}

	checkingClassTabe() {
		/* 
			The class names structure is checking and changing
		*/
		try {
			for (let i = 0; i < this.headeTabe.length; i++) {
				console.log("1: ", this.headeTabe[i])
				this.headeTabe[i].addEventListener('click', () => {

					if (this.headeTabe[i].classList.contains('tab_active') !== true) {
						this.removeClassTab();
						this.headeTabe[i].classList.add('tab_active');
						this.removeClBlockCont();
						this.tabeContent[i].classList.add('tab__content_active');

					}
				}

				);
			}
		} catch (e) {
			console.log(`ERROR message: ${e.message}`)
			console.log(`ERROE stack: ${e.stack}`)
		}
	}

	removeClassTab() {
		/*
			This removing the class name active of the tab.
		*/

		for (let i = 0; i < this.headeTabe.length; i++) {
			console.log("2: ", this.headeTabe[i].classList.contains('tab_active'))
			if (this.headeTabe[i].classList.contains('tab_active')) {
				this.headeTabe[i].classList.remove('tab_active');
				return
			};

		}
		return
	}

	removeClBlockCont() {
		/*	
			This will remove the class name of the content tab.

		*/
		for (let i = 0; i < this.tabeContent.length; i++) {
			if (this.tabeContent[i].classList.contains('tab__content_active')) {
				this.tabeContent[i].classList.remove('tab__content_active');
				return
			}
		}
		return
	}
	startWork() {
		this.checkingClassTabe();
	}

}

const htmlblock = document.getElementById('tabs1'); // The reference on the block html tabs.
console.log(htmlblock)
new Tabs(htmlblock);