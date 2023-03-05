const formElement = document.getElementById('signin__form');
const formButton = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const user_id = document.getElementById('user_id');
const formInputField = formElement.getElementsByTagName('input');
class User {
    // общие св-ва
    logins;
    passwords;
    constructor(userName, userPasswords) {
        this.logins = userName;
        this.passwords = userPasswords;
    }
}
class UserData extends User {
    formId;
    constructor(logins, passwords) {
        super(logins, passwords);
    }
    //встановить Login / password в форме
    // Запрос на сервер
    http() {
        let http;
        try {
            if (window.XMLHttpRequest) {
                http = new XMLHttpRequest();
            }
            else if (window.ActiveXObject) {
                http = new ActiveXObject("Microsoft.XMLHTTP");
            }
            http.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth', true);
            http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            let login = this.logins;
            let pass = this.passwords;
            http.addEventListener("readystatechange", (e) => {
                if (http.readyState === http.DONE) {
                    console.log("http.status: ", http.status);
                    console.log("http.statusText: ", http.statusText);
                    console.log("http.responseText: ", http.responseText);
                    if (http.status === 201) {
                        user_id.innerHTML = login;
                        welcome.classList.add('welcome_active');
                    }
                }
            });
            http.send(`login=${login}&password=${pass}`);
        }
        catch (e) {
            let errors;
            errors = `ERROR message: ${e.message}`;
            formElement.insertAdjacentHTML('beforeend', `<p>${errors}</p>`);
        }
    }
}
window.onload = () => {
    let arrField;
    try {
        if (!!formElement) {
            let pass;
            let login;
            arrField = Array.from(formInputField).filter(item => item ?
                item.hasAttribute('name') &&
                    item.getAttribute('name') === 'login' ||
                    item.getAttribute('name') === 'password' : false);
            // нажимаем на button
            formButton.addEventListener('click', (e) => {
                e.preventDefault();
                // проверка кол-ва полей
                if (arrField.length >= 2) {
                    for (let elem of arrField) {
                        // Проверка предназназначения поля
                        let el = elem;
                        if (el.name === "login" && el.value.length > 3) {
                            login = el.value.trim();
                        }
                        ;
                        if (el.name === "password" && el.value.length > 3) {
                            pass = el.value.trim();
                        }
                        ;
                        // Если все is very a good, тогда запускаем запрос на сервер
                        if (el.value.trim() && el.value.trim()) {
                            let UserAutorisation = new UserData(el.value.trim(), el.value.trim());
                            // запрос на сервер
                            UserAutorisation.http();
                            // Обнуляем поле
                            el.value = null;
                        }
                    }
                }
            });
        }
    }
    catch (e) {
        console.log(`ERROR: ${e.message} // ${e.stack}`);
    }
}; //В момент, когда пользователь нажимает на кнопку #signin__btn, необходимо направить AJAX-запрос
function formAuthoris() {
    let elem = formElement.closest(".signin");
    elem.classList.toggle('signin_active');
    return;
}

//# sourceMappingURL=task.js.map
