"use strict";
const contents = document.getElementsByClassName('content');
const buttons = document.getElementById('send');
const f = document.getElementById('form');
const progr = document.getElementById('progress');
// метод "FormData" используем при отправке данных ТОЛЬКО если есть строковые <input texterea полы ИЛИ при какиих условиях? 
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
        this.request.send();
        this.request.onreadystatechange = () => {
            if (this.request.readyState === this.request.DONE &&
                this.request.status === 201) {
                http.getProgress();
            }
        };
    }
    getProgress() {
        this.request.addEventListener('load', (event) => {
            if (event.lengthComputable) {
                progr.value = event.loaded;
                contents[0].insertAdjacentHTML('beforeend', 'Данные загружены!');
            }
        });
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
