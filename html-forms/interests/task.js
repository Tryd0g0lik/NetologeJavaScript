const parrent = document.getElementsByClassName('interests_main');
function checkMain(event) {
    let elem = event.target;
    if (elem.tagName.toLowerCase() === 'input') {
        let elemParr = elem.parentElement;
        if (!!elemParr.nextElementSibling) {
            if (elemParr.nextElementSibling.tagName.toLowerCase() === 'ul') {
                if (elem.checked) {
                    statusCheck(elemParr, true);
                }
                else if (!elem.checked) {
                    statusCheck(elemParr, false);
                }
            }
        }
    }
}
function statusCheck(elemParr, parrfalTrue) {
    let arrSubCheck = elemParr.nextElementSibling.getElementsByClassName('interest__check');
    for (let elemCheck of arrSubCheck) {
        if (elemCheck.checked === parrfalTrue)
            elemCheck.checked = false;
        elemCheck.checked = parrfalTrue;
    }
}
parrent[0].addEventListener('click', e => {
    checkMain(e);
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhcnJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbnRlcmVzdHNfbWFpbicpO1xuZnVuY3Rpb24gY2hlY2tNYWluKGV2ZW50KSB7XG4gICAgbGV0IGVsZW0gPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKGVsZW0udGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnKSB7XG4gICAgICAgIGxldCBlbGVtUGFyciA9IGVsZW0ucGFyZW50RWxlbWVudDtcbiAgICAgICAgaWYgKCEhZWxlbVBhcnIubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgICAgICAgICBpZiAoZWxlbVBhcnIubmV4dEVsZW1lbnRTaWJsaW5nLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3VsJykge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ2hlY2soZWxlbVBhcnIsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghZWxlbS5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c0NoZWNrKGVsZW1QYXJyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gc3RhdHVzQ2hlY2soZWxlbVBhcnIsIHBhcnJmYWxUcnVlKSB7XG4gICAgbGV0IGFyclN1YkNoZWNrID0gZWxlbVBhcnIubmV4dEVsZW1lbnRTaWJsaW5nLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ludGVyZXN0X19jaGVjaycpO1xuICAgIGZvciAobGV0IGVsZW1DaGVjayBvZiBhcnJTdWJDaGVjaykge1xuICAgICAgICBpZiAoZWxlbUNoZWNrLmNoZWNrZWQgPT09IHBhcnJmYWxUcnVlKVxuICAgICAgICAgICAgZWxlbUNoZWNrLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgZWxlbUNoZWNrLmNoZWNrZWQgPSBwYXJyZmFsVHJ1ZTtcbiAgICB9XG59XG5wYXJyZW50WzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgY2hlY2tNYWluKGUpO1xufSk7XG4iXSwiZmlsZSI6InRhc2suanMifQ==
