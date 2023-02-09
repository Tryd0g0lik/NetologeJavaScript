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
    /* font size - start */
    controlFontSize() {
        return this.htmlBlock.getElementsByClassName('font-size');
    }
    removeActiveSizeBook() {
        /*
        TODO: The 'font-size_active' class finding and remove active classe.
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
    findFSizeClick() {
        /*
        TODO: the element finding wich has an event. It's for assingment the 'active' class
        */
        this.fontSizes = this.controlFontSize();
        let i = 0;
        for (i; i < this.fontSizes.length; i++) {
            let elem = this.fontSizes[i];
            this.fontSizes[i].addEventListener('click', () => {
                this.removeActiveSizeBook();
                if (elem.classList.contains('font-size_active') === false) {
                    elem.classList.add('font-size_active');
                    this.activFontSize();
                }
            });
        }
    }
    activFontSize() {
        /*
        
        TODO: the new element wich has get the new  class 'active'
        
        */
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
        for (let elem of ['book_fs-small', 'book_fs-big']) {
            if (elem !== size && this.htmlBlock.classList.contains(elem))
                this.htmlBlock.classList.remove(elem);
            if (size !== null)
                this.htmlBlock.classList.add(size);
        }
        return;
    }
    /* font size - end */
    /* font color - start */
    controlFColor() {
        return this.htmlBlock.getElementsByClassName('book__control_color');
    }
    removeActiveFColor() {
        /*
        TODO: The 'color_active' class finding only from a book__control_color and remove active classe.
        */
        let colors = this.controlFColor();
        let activeColor = colors[0].getElementsByClassName('color');
        let i = 0;
        for (i; i < activeColor.length; i++) {
            if (activeColor[i].classList.contains('color_active')) {
                activeColor[i].classList.remove('color_active');
                return i;
            }
        }
        return;
    }
    findColorClick() {
        /*
        TODO: the element finding wich has an event. It's for assingment the 'active' class
        */
        let colorsBlock = this.controlFColor();
        let refColor = colorsBlock[0].getElementsByClassName('color');
        let ind = 0;
        for (ind; ind < refColor.length; ind++) {
            let elem = refColor[ind];
            refColor[ind].addEventListener('click', () => {
                this.removeActiveFColor();
                if (elem.classList.contains('color_active') === false) {
                    elem.classList.add('color_active');
                    this.activFontColor();
                }
            });
        }
    }
    activFontColor() {
        /*
        
        TODO: the new element wich has get the new  class 'active'
        
        */
        let activeColor;
        let colors = this.controlFColor();
        let colorActive = colors[0].getElementsByClassName('color_active')[0];
        if (colorActive.getAttribute('data-text-color') === 'black')
            activeColor = 'book_color-black';
        else if (colorActive.getAttribute('data-text-color') === 'gray')
            activeColor = 'book_color-gray';
        else
            activeColor = 'book_color-whitesmoke';
        if (this.htmlBlock.classList.contains(activeColor) === false) {
            for (let elem of ['book_color-black', 'book_color-gray', 'book_color-whitesmoke']) {
                if (activeColor !== elem && this.htmlBlock.classList.contains(elem)) {
                    this.htmlBlock.classList.remove(elem);
                    break;
                }
            }
            this.htmlBlock.classList.add(activeColor);
        }
        return;
    }
    /* font color - end */
    /* font background-color - start */
    bakgroundСolor() {
        return this.htmlBlock.getElementsByClassName('book__control_background');
    }
    removeActiveBackg() {
        /*
        TODO: The background 'color_active' class finding and remove active classe.
        */
        let backgBlock = this.bakgroundСolor();
        let activeBg = backgBlock[0].getElementsByClassName('color');
        let i = 0;
        for (i; i < activeBg.length; i++) {
            if (activeBg[i].classList.contains('color_active')) {
                activeBg[i].classList.remove('color_active');
                return i;
            }
        }
        return;
    }
    findBackgClick() {
        /*
        TODO: the element finding wich has an event. It's for assingment the 'active' class
        */
        let backgBlock = this.bakgroundСolor();
        let refColor = backgBlock[0].getElementsByClassName('color');
        let ind = 0;
        for (ind; ind < refColor.length; ind++) {
            let elem = refColor[ind];
            refColor[ind].addEventListener('click', () => {
                this.removeActiveBackg();
                if (elem.classList.contains('color_active') === false) {
                    elem.classList.add('color_active');
                    this.activBackgColor();
                }
            });
        }
        return;
    }
    activBackgColor() {
        /*
        
        TODO: the new element wich has get the new  class 'active'
        
        */
        let activeBg;
        let backgBlock = this.bakgroundСolor();
        let backgActive = backgBlock[0].getElementsByClassName('color_active')[0];
        if (backgActive.getAttribute('data-bg-color') === 'black')
            activeBg = 'book_bg-black';
        else if (backgActive.getAttribute('data-bg-color') === 'gray')
            activeBg = 'book_bg-gray';
        else
            activeBg = 'book_bg-white';
        if (this.htmlBlock.classList.contains(activeBg) === false) {
            for (let elem of ['book_bg-black', 'book_bg-gray', 'book_bg-white']) {
                if (activeBg !== elem && this.htmlBlock.classList.contains(elem)) {
                    this.htmlBlock.classList.remove(elem);
                    break;
                }
            }
            this.htmlBlock.classList.add(activeBg);
        }
        return;
    }
    /* font background-color - end */
    startUp() {
        this.blockReference();
        this.findFSizeClick();
        this.findColorClick();
        this.findBackgClick();
    }
}
const block_book = document.getElementById('book');
new ContantSize(block_book);
