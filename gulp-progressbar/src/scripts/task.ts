
const contents = <HTMLCollection>document.getElementsByClassName('content');
const buttons = <HTMLElement>document.getElementById('send');
const f = <HTMLFormElement>document.getElementById('form');
const progr = <HTMLFormElement>document.getElementById('progress');

// метод "FormData" используем при отправке данных ТОЛЬКО если есть строковые <input texterea полы ИЛИ при какиих условиях? 
//Просто не понима для чего указывать 'action'.
if (f.hasAttribute('action')) {
  f.removeAttribute('action');
}

class Http {
  url: string;
  posts: string;
  request: any;
  constructor(url: string) {
    this.url = url;
    this.posts = 'POST';

  }

  // Создаем модель для загрузки.
  modelAjax() {
    // Просто копируем данные
    let methods: string = Array.from([this.posts])[0];
    let urls: string = Array.from([this.url])[0];

    if (window.XMLHttpRequest) {

      this.request = new XMLHttpRequest();

    } else if (window.ActiveXObject) {
      this.request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (!this.request) {
      alert('1: You are a loser!. Your "request" is not worlk')
    };

    const formData = new FormData(f);
    this.request.open(methods, urls);
    this.request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    /* ------------start----------------- */
    // Загрузка - получаем размер загруженного
    this.request.upload.onprogress = (event: any) => {
      this.request.onreadystatechange = () => {
        if (this.request.readyState === 2) {
          let resp = event.loaded;
          progr.value = resp;

          if (event.loaded === event.total) {
            contents[0].insertAdjacentHTML('beforeend', 'Данные загружены!');

          }
        }
      }
    }

    this.request.send(formData);
    /* --------------completed--------------- */
  }

  giveDownloadStart() {
    buttons.addEventListener('click', (e) => {
      e.preventDefault();
      this.modelAjax();


    })

  }
}






const url = 'https://students.netoservices.ru/nestjs-backend/upload';
const http = new Http(url);
http.giveDownloadStart();




