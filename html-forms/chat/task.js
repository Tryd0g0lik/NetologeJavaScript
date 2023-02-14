// Согласно условию Видим реальное время в чате.
// чатБот Алиса обчается )) в разговоре с нами. 
// Если в input поле оставляем пустое и нажимаем на Enter, получаем событие: 
// чат закрывается и сбрасивается.
// Как , данное событие/условие взять под контроль ?  Где это вообще прописано?
var chatBlock = document.getElementsByClassName('chat-widget');
var inputIn = document.getElementById('chat-widget__input');
var chatMassege = document.getElementById('chat-widget__messages');
var speak = [
    "Кто тут?",
    "Где ваша совесть?",
    "Пока",
    'Привет!'
];
var fielt = inputIn;
fielt.setAttribute('min', "1");
fielt.setAttribute("max", "100");
chatBlock[0].addEventListener('click', function (e) {
    var element = e.target;
    element.closest('.chat-widget').classList.add('chat-widget_active');
});
var chat = '';
inputIn.addEventListener('keydown', function (e) {
    if (e.code === 'Enter' || e.code === 'NumpadEnter' && fielt.value.length > 0 && fielt.value.length <= 100) {
        e.preventDefault();
        var date = new Date();
        chat += "\n\t\t\t<div class=\"message message_client\">\n\t\t\t\t\t<div class=\"message__time\">".concat(date.getMinutes(), ":").concat(date.getSeconds(), "</div>\n\t\t\t\t\t<div class=\"message__text\">").concat(fielt.value, "</div>\n\t\t\t</div>\n\t\t");
        setTimeout(function () {
            chat += alisa();
            chatMassege.innerHTML = chat;
        }, 500);
        chatMassege.innerHTML = chat;
        fielt.value = '';
    }
});
function alisa() {
    var i = Math.floor(Math.random() * speak.length);
    var date = new Date();
    return "<div class=\"message\">\n\t<div class=\"message__time\">".concat(date.getMinutes(), ":").concat(date.getSeconds(), "</div>\n\t<div class=\"message__text\">").concat(speak[i], "</div>\n</div>");
}
