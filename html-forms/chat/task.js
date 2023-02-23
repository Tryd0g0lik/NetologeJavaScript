// Время поменял, теперь час : минута. В задании не нашел уточнений , что берем за время.
var chatBlock = document.getElementsByClassName('chat-widget');
var elementInput = document.getElementById('chat-widget__input');
var chatMassage = document.getElementById('chat-widget__messages');
var speskingBot = [
    "Кто тут?",
    "Где ваша совесть?",
    "Пока",
    'Привет!'
];
var field;

if (elementInput) {
    field = elementInput;
    field.setAttribute('min', "1");
    field.setAttribute("max", "100");
}

if (chatBlock) {
    chatBlock[0].addEventListener('click', function (e) {
        var element = e.target;

        if (element.closest('.chat-widget')) {
            element.closest('.chat-widget').classList.add('chat-widget_active');
        }
    });
}

var chat = ''; // FOr save histore of html-dialgue between a bot and user.
elementInput.addEventListener('keydown', function (e) {
    if (e.code.includes('Enter') || e.code.includes("NumpadEnter")) {
        if (field.value.trim().length !== 0 &&
            field.value.trim().length <= 100) {
            e.preventDefault();

            var date = new Date();
            chat += "\n\t\t\t<div class=\"message message_client\">\n\t\t\t\t\t<div class=\"message__time\">".concat(date.getHours(), ":").concat(date.getMinutes(), "</div>\n\t\t\t\t\t<div class=\"message__text\">").concat(field.value, "</div>\n\t\t\t</div>\n\t\t");
            setTimeout(function () {
                chat += selectStringForChat();
                chatMassage.innerHTML = chat;
            }, 500);

            if (chatMassage) {
                chatMassage.innerHTML = chat;
                field.value = '';
            }
        }
    }
});
function selectStringForChat() {
    var i = Math.floor(Math.random() * speskingBot.length);
    var date = new Date();
    return "<div class=\"message\">\n\t<div class=\"message__time\">".concat(date.getHours(), ":").concat(date.getMinutes(), "</div>\n\t<div class=\"message__text\">").concat(speskingBot[i], "</div>\n</div>");
}
