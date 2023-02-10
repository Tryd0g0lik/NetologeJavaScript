const revl = document.getElementsByClassName('reveal');
window.addEventListener('scroll', () => {
    for (let i = 0; i < revl.length; i++) {
        if (revl[i].getBoundingClientRect().bottom < window.innerHeight) {
            revl[i].classList.add('reveal_active');
        }
    }
    for (let i = 0; i < revl.length; i++) {
        if (revl[i].getBoundingClientRect().bottom < 0 ||
            revl[i].getBoundingClientRect().top > window.innerHeight) {
            revl[i].classList.remove('reveal_active');
        }
    }
});
