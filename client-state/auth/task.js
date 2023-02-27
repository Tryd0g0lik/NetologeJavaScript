const formElement = document.getElementById('signin__form');
const formButton = document.getElementById('signin__btn');
const formInputField = formElement.getElementsByTagName('input');

class User {
    logins;
    passwords;
    constructor(userName, userPasswords) {
        this.logins = userName;
        this.passwords = userPasswords;
    }
}

class UserData extends User {

    constructor(logins, passwords) {
        super(logins, passwords);
    }

    saveLogPass() {
        try {
            localStorage.setItem("UserOuth", JSON.stringify({ 'login': this.logins, 'passwords': this.passwords }));
        }        
        catch (e) {
            let errors;
            errors = `ERROR message: ${e.message}`;
            formElement.insertAdjacentHTML('beforeend', `<p>${errors}</p>`);
        }
    }

    restoreLogPass() {
        const dt = localStorage.getItem('UserOuth');
        let pass;
        let log;

        try {
            if (!!dt && dt !== "{}") {
                log = JSON.parse(dt)['login'];
                pass = JSON.parse(dt)['passwords'];
                if (log && pass)
                    return [log, pass];
            }

            return [];
        }
        catch (e) {
            let errors;
            errors = `ERROR message: ${e.message}`;
            formElement.insertAdjacentHTML('beforeend', `<p>${errors}</p>`);
        }
    }
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

            let log = this.logins;
            let pass = this.passwords;
            http.addEventListener("readystatechange", (e) => {
                if (http.readyState === http.DONE) {
                    console.log(http.status);
                    console.log(http.statusText);
                    console.log(http.responseText);
                }
            });

            http.send(`login=${log}&password=${pass}`);
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
            let localSaveData;

            arrField = Array.from(formInputField).filter(item => item ?
                item.hasAttribute('name') &&
                    item.getAttribute('name') === 'login' ||
                    item.getAttribute('name') === 'password' : false);

            formButton.addEventListener('click', (e) => {
                e.preventDefault();
                if (arrField.length >= 2) { // проверка кол-ва полей
                    for (let elem of arrField) {
                        let el = elem;

                        if (el.name === "login") { // Проверка предназназначения поля
                            login = el.value.trim();
                        }
                        ;

                        if (el.name === "password") {
                            pass = el.value.trim();                            
                        }
                        ;

                        if (el.value.trim(), el.value.trim()) { // Если все is very a good, тогда запускаем запрос на сервер
                            let UserAutorisation = new UserData(el.value.trim(), el.value.trim());
                            UserAutorisation.http(); // запрос на сервер
                            el.value = null; // Обнуляем поле
                        }
                    }

                    // Проверка кол-ва символов в поле
                    if (login.trim().length > 3 && pass.trim().length > 3) {
                        localSaveData = new UserData(login, pass); // Отправляем данные формы
                        localSaveData.saveLogPass(); // Сохранение даных в localStorage
                    }
                    else {
                        formElement.insertAdjacentHTML('beforeend', `<p style="color:red;"> Логин и пароль допускаются от 3-х символов<p>`);
                    }
                    ;
                }
            });

            // Востановление данных если они есть в localStorage
            localSaveData = new UserData(login, pass); // Отправляем пустую форму
            let loginPass = localSaveData.restoreLogPass(); // Востановление локальных данных

            if ((loginPass).length === 2) {
                for (let elem of arrField) {
                    let el = elem;

                    if (el.name === "login")
                        el.value = loginPass[0];
                    if (el.name === "password")
                        el.value = loginPass[1];
                }
            }
        }
    }
    catch (e) {
        console.log(`ERROR: ${e.message} // ${e.stack}`);
    }
};

//В момент, когда пользователь нажимает на кнопку #signin__btn, необходимо направить AJAX-запрос
function formAuthoris() {
    let elem = formElement.closest(".signin");
    elem.classList.toggle('signin_active');
    return;
}

//# sourceMappingURL=task.js.map
