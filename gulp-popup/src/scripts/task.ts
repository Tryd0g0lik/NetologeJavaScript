const popupMain = <HTMLElement>document.getElementById('subscribe-modal');
const modalClose = <HTMLCollection>popupMain.getElementsByClassName('modal__close');

if (!document.cookie.includes('popupe')) {
  popupMain.classList.add("modal_active"); // the pop-up window is an activatind
}

modalClose[0].addEventListener('click', () => { // Cloased the window popup
    popupMain.classList.remove("modal_active");

  // The property  'subscribe-modal' edding into cookie
  document.cookie = "popupe=isClosed";
})