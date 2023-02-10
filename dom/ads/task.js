class Rotator {
    constructor(rotator) {
        this.rotator = rotator;
        this.startWork();
    }
    findCLassActie() {
        let i = 0;
        this.rotatorCase = (this.rotator.getElementsByClassName('rotator__case'));
        for (i; i < this.rotatorCase.length; i++) {
            if (this.rotatorCase[i].classList.contains('rotator__case_active')) {
                this.rotatorCase[i].classList.remove(('rotator__case_active'));
                break;
            }
        }
        for (i; i < this.rotatorCase.length; i++) {
            if (i !== this.rotatorCase.length - 1 && this.rotatorCase[i + 1].classList.contains('rotator__case_active') !== true) {
                this.rotatorCase[i + 1].classList.add('rotator__case_active');
                return;
            }
            else if (i === this.rotatorCase.length - 1) {
                i = 0;
                this.rotatorCase[i].classList.add('rotator__case_active');
                return;
            }
        }
    }
    startWork() {
        setInterval(() => {
            this.findCLassActie();
        }, 1000);
    }
}
let blocks = document.getElementById('rotator_main');
new Rotator(blocks);
let blocks2 = document.getElementById('rotator_main2');
new Rotator(blocks2);

//# sourceMappingURL=../dom/ads/task.js.map
