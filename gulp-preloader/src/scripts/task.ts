// Когда лучше применить fatch() , а когда лучше XMLHttpeRequest()?
// Что-то с версткой или html так как html-курса отработан согласно заданю .
const loader = document.getElementById('loader');
class Https {
  url: string;
  constructor(url: string) {
    this.url = url;
  }
}

class MethodGet extends Https {
  gets: string;
  server: string = '';
  #items: string = '';
  constructor() {
    super(url)
    this.gets = 'GET';

  }

  methodGet() {
    let method = Array.from([this.gets]);
    let urls = Array.from([this.url]);

    let resp = new XMLHttpRequest();
    resp.open(method[0], urls[0]);
    resp.send();

    resp.addEventListener('readystatechange', () => {
      if (resp.readyState === 4) {

        this.server = resp.responseText;
        this.__getHtmlcData();
        this.__publicationHtml();
      }

    })

  }

  __getHtmlcData() {
    if (!!this.server) {
      console.log('this.server: ', this.server)
      console.log("-------")

      let jsn = JSON.parse(this.server)
      let elem = Array.from([jsn.response.Valute]);
      console.log("elem: ", elem);
      for (let i = 0; i < elem.length; i++) {


        for (let r in elem[i]) {
          this.#items += `<div class="item__code">
          ${r}
          </div><div class="item__value">
          ${elem[i][r]['Value']}
          </div><div class="item__currency">
          ${elem[i][r]['Name']}
          </div>`
        }
      }
      if (loader) {
        loader.classList.remove("loader_active");
      }
    }


  }

  __publicationHtml() {

    if (!!this.#items) {
      let items = <HTMLElement>document.getElementById('items');
      let item = <HTMLCollection>items.getElementsByClassName('item');


      let html = Array.from([this.#items])
      console.log('html: ', html[0])
      item[0].innerHTML = html[0];

    }
  }
}

const url: string = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';
const https = new Https(url);

const gets = new MethodGet();
gets.methodGet();

