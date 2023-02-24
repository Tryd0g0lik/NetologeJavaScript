"use strict";
const popupMain = document.getElementById('subscribe-modal');
const modalClose = popupMain.getElementsByClassName('modal__close');
window.onload = () => {
    let local = localStorage.getItem('popup');
    console.log(!local);
    if (!local) {
        popupMain.classList.add("modal_active"); // the pop-up window is activatind
        localStorage.setItem('popup', "0"); // Varieble add in to the localStorage 
    }
    modalClose[0].addEventListener('click', () => {
        popupMain.classList.remove("modal_active");
        // The property  'subscribe-modal' idding to the cookie
        document.cookie = encodeURIComponent('subscribe-modal') + "=" + encodeURIComponent("isClosed");
    });
};

//# sourceMappingURL=client-state/popup/maps/index.js.map/task.js.map
