class ContantSize {
    constructor(htmlBlock) {
        this.htmlBlock = htmlBlock;
        this.startUp();
    }
    blockReference() {
        const a = document.getElementsByTagName('a');
        let i = 0;
        for (i; i < a.length; i++) {
            a[i].setAttribute("onclick", 'return false');
        }
        return;
    }
    controlFontSize() {
        return this.htmlBlock.getElementsByClassName('font-size');
    }
    findActiveSizeBook() {
        /*
        TODO: The 'font-size_active' class finding only.
        */
        this.fontSizes = this.controlFontSize();
        let i = 0;
        for (i; i < this.fontSizes.length; i++) {
            if (this.fontSizes[i].classList.contains('font-size_active')) {
                this.fontSizes[i].classList.remove('font-size_active');
                return i;
            }
        }
        return;
    }
    findSizeClick() {
        /*
        TODO: the element finding wich has an event. It's for assingment the 'active' class
        */
        this.fontSizes = this.controlFontSize();
        let i = 0;
        for (i; i < this.fontSizes.length; i++) {
            let elem = this.fontSizes[i];
            this.fontSizes[i].addEventListener('click', () => {
                this.findActiveSizeBook();
                if (elem.classList.contains('font-size_active') === false) {
                    elem.classList.add('font-size_active');
                    this.insertActivFontSize();
                }
            });
        }
    }
    insertActivFontSize() {
        let size;
        let activBlock = (this.htmlBlock.getElementsByClassName('font-size_active'));
        if (activBlock[0].getAttribute('data-size') &&
            activBlock[0].getAttribute('data-size') === 'small')
            size = 'book_fs-small';
        else if (activBlock[0].getAttribute('data-size') === null)
            size = null;
        else {
            size = 'book_fs-big';
        }
        ;
        if (this.htmlBlock.classList.contains(size) === false)
            this.htmlBlock.className = 'book';
        if (size !== null)
            this.htmlBlock.classList.add(size);
        return;
    }
    fontColor() {
    }
    startUp() {
        this.blockReference();
        this.findSizeClick();
        this.fontColor();
    }
}
const block_book = document.getElementById('book');
new ContantSize(block_book);
