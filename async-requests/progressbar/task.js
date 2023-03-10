var contents = document.getElementsByClassName('content');
var buttons = document.getElementById('send');
var f = document.getElementById('form');
var progr = document.getElementById('progress');
// метод "FormData" используем при отправке данных ТОЛЬКО если есть строковые <input texterea полы ИЛИ при какиих условиях? 
//Просто не понима для чего указывать 'action'.
if (f.hasAttribute('action')) {
    f.removeAttribute('action');
}
var Http = /** @class */ (function () {
    function Http(url) {
        this.url = url;
        this.posts = 'POST';
    }
    // Создаем модель для загрузки.
    Http.prototype.modelAjax = function () {
        var _this = this;
        // Просто копируем данные
        var methods = Array.from([this.posts])[0];
        var urls = Array.from([this.url])[0];
        if (window.XMLHttpRequest) {
            this.request = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            this.request = new ActiveXObject("Microsoft.XMLHTTP");
        }
        if (!this.request) {
            alert('1: You are a loser!. Your "request" is not worlk');
        }
        ;
        var formData = new FormData(f);
        this.request.open(methods, urls);
        this.request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        /* ------------start----------------- */
        // Загрузка - получаем размер загруженного
        this.request.upload.onprogress = function (event) {
            ;
            progr.value = (event.loaded / event.total).toFixed(2);
                    if (event.loaded === event.total) {
                        contents[0].insertAdjacentHTML('beforeend', 'Данные загружены!');
                    }
            //     }
            // };
        };
        this.request.send(formData);
        /* --------------completed--------------- */
    };
    Http.prototype.giveDownloadStart = function () {
        var _this = this;
        buttons.addEventListener('click', function (e) {
            e.preventDefault();
            _this.modelAjax();
        });
    };
    return Http;
}());
var url = 'https://students.netoservices.ru/nestjs-backend/upload';
var http = new Http(url);
http.giveDownloadStart();

//# sourceMappingURL=task.js.map
