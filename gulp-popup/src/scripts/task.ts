const popupMain = <HTMLElement>document.getElementById('subscribe-modal');
const modalClose = <HTMLCollection>popupMain.getElementsByClassName('modal__close');

window.onload = () => {
  let local = <string>localStorage.getItem('popup');

  console.log(!local)
  if (!local) {
    popupMain.classList.add("modal_active"); // the pop-up window is activatind
    localStorage.setItem('popup', "0"); // Varieble add in to the localStorage 
  }

  modalClose[0].addEventListener('click', () => { // Cloased the popup window
    popupMain.classList.remove("modal_active");

    // The property  'subscribe-modal' idding to the cookie
    document.cookie = encodeURIComponent('subscribe-modal') + "=" + encodeURIComponent("isClosed");
  })
}