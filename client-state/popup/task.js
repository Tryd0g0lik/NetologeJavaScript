"use strict";
const popupMain = document.getElementById('subscribe-modal');
const modalClose = popupMain.getElementsByClassName('modal__close');
if (!document.cookie.includes('popupe')) {
    popupMain.classList.add("modal_active"); // the pop-up window is an activatind
}

modalClose[0].addEventListener('click', () => {
    popupMain.classList.remove("modal_active");
    // The property  'subscribe-modal' edding into cookie
    document.cookie = "popupe=isClosed";
});

//# sourceMappingURL=client-state/popup/maps/index.js.map/task.js.map
