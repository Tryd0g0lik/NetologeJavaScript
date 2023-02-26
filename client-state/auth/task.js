const formElement = document.getElementById('signin__form');
const formButton = document.getElementById('signin__btn');
const formInputField = formElement.getElementsByTagName('input');
class User {
    logins;
    passwords;
    // constructor(userName: string, userPasswords: string) {
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
        console.log("0");
        if (!!dt && dt !== "{}") {
            log = JSON.parse(dt)['login'];
            pass = JSON.parse(dt)['passwords'];
            console.log("1", log, pass);
            if (log && pass)
                return [log, pass];
        }
        // for (let elem in dt) {
        console.log("LP: ", JSON.parse(dt)['login'], JSON.parse(dt)['passwords'], dt);
        // }
        return [];
    }
    http() {
        let params = '';
        params = "login:'demo'&password:'demo'";
        let http;
        if (window.XMLHttpRequest) {
            http = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            http = new ActiveXObject("Microsoft.XMLHTTP");
        }
        http.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
        http.setRequestHeader('Content-Type', 'application/json');
        http.send(params);
        http.addEventListener("readystatechange", () => {
            // if (http.readystatechange === http.DONE) {
            console.log(http.status);
            console.log(http.statusText);
            // }
        });
    }
}
window.onload = () => {
    // let fieldLogin!: string
    // let fieldPass!: string;
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
                            el.value = null; // Обнуляем поле
                        }
                        ;
                        if (el.name === "password") {
                            pass = el.value.trim();
                            el.value = null;
                        }
                        ;
                    }
                    // Проверка кол-ва символов в поле
                    if (login.trim().length > 3 && pass.trim().length > 3) {
                        localSaveData = new UserData(login, pass); // Отправляем данные формы
                        localSaveData.saveLogPass(); // Сохранение даных в localStorage
                    }
                    else {
                        console.log("3:");
                        formElement.insertAdjacentHTML('beforeend', `<p style="color:red;"> Логин и пароль допускаются от 3-х символов<p>`);
                    }
                    ;
                }
            });
            // Востановление данных если они есть в localStorage
            localSaveData = new UserData(login, pass); // Отправляем пустую форму
            let loginPass = localSaveData.restoreLogPass(); // Востановление локальных данных
            localSaveData.http(); // запрос на сервер
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
}; //В момент, когда пользователь нажимает на кнопку #signin__btn, необходимо направить AJAX-запрос
function formAuthoris() {
    let elem = formElement.closest(".signin");
    elem.classList.toggle('signin_active');
    return;
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0YXNrLmpzIl0sImZpbGUiOiJ0YXNrLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjL3NjcmlwdHMvKi50cyJ9
