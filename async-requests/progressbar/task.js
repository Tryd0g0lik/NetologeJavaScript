"use strict";
const contents = document.getElementsByClassName('content');
const buttons = document.getElementById('send');
const f = document.getElementById('form');
const progr = document.getElementById('progress');
// метод "FormData" используем при отправке данных ТОЛЬКО если есть строковые <input texterea полы ИЛИ при какиих условиях? 
const file = document.getElementById('file');
if (f.hasAttribute('action')) { //Просто не понима для чего указывать 'action'.
    f.removeAttribute('action');
}
class Http {
    constructor(url) {
        this.url = url;
        this.posts = 'POST';
    }
    modelAjax() {
        let methods = Array.from([this.posts])[0]; // Просто копируем данные
        let urls = Array.from([this.url])[0];
        if (window.XMLHttpRequest) {
            this.request = new XMLHttpRequest();
            this.request.overrideMimeType('text/xml');
        }
        else if (window.ActiveXObject) {
            this.request = new ActiveXObject("Microsoft.XMLHTTP");
        }
        if (!this.request) {
            alert('1: You are a loser!. Your "request" is not worlk');
        }
        ;
        this.request.open(methods, urls);
        this.request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        this.request.send(file.value);
        /* ------------start----------------- */
        this.request.upload.onprogress = (event) => {
            this.request.onreadystatechange = () => {
                console.log(this.request.readyState);
                console.log("2: ", file.value);
                console.log(event.lengthComputable);

                if (this.request.readyState === 2 && event.lengthComputable) {
                    let f = event.loaded;
                    console.log("event.loaded: ", event.loaded);
                    progr.value = f;

                    console.log(`Отправлено ${event.loaded} из ${event.total}`);
                    console.log((event.loaded / event.total) * 100);
                    if (event.loaded === event.total) {
                        contents[0].insertAdjacentHTML('beforeend', 'Данные загружены!');
                    }
                }
            };
        };
        /* --------------completed--------------- */
        if (this.request.readyState === this.request.DONE) {
        }
    }
    giveDownloadStart() {
        buttons.addEventListener('click', (e) => {
            e.preventDefault();
            this.modelAjax();
        });
    }
}
const url = 'https://students.netoservices.ru/nestjs-backend/upload';
const http = new Http(url);
http.giveDownloadStart();

//# sourceMappingURL=task.js.map
