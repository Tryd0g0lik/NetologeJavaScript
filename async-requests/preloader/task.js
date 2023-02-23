var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _MethodGet_items;
// Когда лучше применить fatch() , а когда лучше XMLHttpeRequest()?
// Что-то с версткой или html так как html-курса отработан согласно заданю .
const loader = document.getElementById('loader');
class Https {
    constructor(url) {
        this.url = url;
    }
}
class MethodGet extends Https {
    constructor() {
        super(url);
        this.server = '';
        _MethodGet_items.set(this, '');
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
        });
    }
    __getHtmlcData() {
        if (!!this.server) {
            let jsn = JSON.parse(this.server);
            let elem = Array.from([jsn.response.Valute]);

            for (let i = 0; i < elem.length; i++) {
                for (let r in elem[i]) {
                    __classPrivateFieldSet(this, _MethodGet_items, __classPrivateFieldGet(this, _MethodGet_items, "f") + `<div class="item__code">
          ${r}
          </div><div class="item__value">
          ${elem[i][r]['Value']}
          </div><div class="item__currency">
          ${elem[i][r]['Name']}
          </div>`, "f");
                }
            }
            if (loader) {
                loader.classList.remove("loader_active");
            }
        }
    }
    __publicationHtml() {
        if (!!__classPrivateFieldGet(this, _MethodGet_items, "f")) {
            let items = document.getElementById('items');
            let item = items.getElementsByClassName('item');
            let html = Array.from([__classPrivateFieldGet(this, _MethodGet_items, "f")]);

            item[0].innerHTML = html[0];
        }
    }
}
_MethodGet_items = new WeakMap();
const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';
const https = new Https(url);
const gets = new MethodGet();
gets.methodGet();
