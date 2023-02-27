const formElement = <HTMLFormElement>document.getElementById('signin__form');
const formButton = <HTMLElement>document.getElementById('signin__btn');
const formInputField = <HTMLCollection>formElement.getElementsByTagName('input');

class User {
  // общие св-ва
  readonly logins!: string;
  readonly passwords!: string;
  constructor(userName: string, userPasswords: string) {
    this.logins = userName;
    this.passwords = userPasswords;
  }
}

class UserData extends User {
  formId!: string;
  constructor(logins, passwords) {
    super(logins, passwords)

  }

  saveLogPass() {
    try {
      localStorage.setItem("UserOuth",
        JSON.stringify({ 'login': this.logins, 'passwords': this.passwords }))

    } catch (e) {
      let errors!: string;
      errors = <string>`ERROR message: ${e.message}`;
      formElement.insertAdjacentHTML('beforeend', `<p>${errors}</p>`);

    }
  }

  //встановить Login / password в форме
  restoreLogPass() {
    const dt = localStorage.getItem('UserOuth')
    let pass: string;
    let log: string

    try {
      if (!!dt && dt !== "{}") {
        log = JSON.parse(dt)['login'];
        pass = JSON.parse(dt)['passwords'];

        if (log && pass) return [log, pass]
      }

      return []
    } catch (e) {
      let errors!: string;
      errors = <string>`ERROR message: ${e.message}`;
      formElement.insertAdjacentHTML('beforeend', `<p>${errors}</p>`);

    }

  }

  // Запрос на сервер
  http() {

    let http;
    try {
      if (window.XMLHttpRequest) {
        http = new XMLHttpRequest();

      } else if (window.ActiveXObject) {
        http = new ActiveXObject("Microsoft.XMLHTTP")
      }

      http.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth', true);
      http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      let log = this.logins;
      let pass = this.passwords;

      http.addEventListener("readystatechange", (e) => {

        if (http.readyState === http.DONE) {
          console.log(http.status)
          console.log(http.statusText)
          console.log(http.responseText)
        }
      })

      http.send(`login=${log}&password=${pass}`);

    } catch (e) {
      let errors!: string;
      errors = <string>`ERROR message: ${e.message}`;
      formElement.insertAdjacentHTML('beforeend', `<p>${errors}</p>`);

    }

  }
}


window.onload = () => {
  let arrField!: Element[];

  try {
    if (!!formElement) {
      let pass: string;
      let login: string;
      let localSaveData;

      arrField = <HTMLElement[]>Array.from(formInputField).filter(item => item ?
        item.hasAttribute('name') &&
        item.getAttribute('name') === 'login' ||
        item.getAttribute('name') === 'password' : false
      );

      // нажимаем на button
      formButton.addEventListener('click', (e: Event) => {
        e.preventDefault();

        // проверка кол-ва полей
        if (arrField.length >= 2) {

          for (let elem of arrField) {

            // Проверка предназназначения поля
            let el = <HTMLInputElement>elem;
            if (el.name === "login") {
              login = el.value.trim();

            };

            if (el.name === "password") {
              pass = el.value.trim();


            };

            // Если все is very a good, тогда запускаем запрос на сервер
            if (el.value.trim(), el.value.trim()) {
              let UserAutorisation = new UserData(el.value.trim(), el.value.trim());
              // запрос на сервер
              UserAutorisation.http()
              // Обнуляем поле
              el.value = null

            }
          }

          // Проверка кол-ва символов в поле
          if (login.trim().length > 3 && pass.trim().length > 3) {
            // Отправляем данные формы
            localSaveData = new UserData(login, pass);
            // Сохранение даных в localStorage
            localSaveData.saveLogPass();
          } else {
            formElement.insertAdjacentHTML('beforeend',
              `<p style="color:red;"> Логин и пароль допускаются от 3-х символов<p>`);

          };
        }
      });

      // Востановление данных если они есть в localStorage
      // Отправляем пустую форму
      localSaveData = new UserData(login, pass);
      // Востановление локальных данных
      let loginPass = localSaveData.restoreLogPass();

      if ((loginPass).length === 2) {
        for (let elem of arrField) {
          let el = <HTMLInputElement>elem;
          if (el.name === "login") el.value = loginPass[0];
          if (el.name === "password") el.value = loginPass[1];

        }
      }
    }
  } catch (e) {

    console.log(`ERROR: ${e.message} // ${e.stack}`)

  }


}//В момент, когда пользователь нажимает на кнопку #signin__btn, необходимо направить AJAX-запрос

function formAuthoris() {
  let elem = <HTMLElement>formElement.closest(".signin");
  elem.classList.toggle('signin_active');
  return
}

