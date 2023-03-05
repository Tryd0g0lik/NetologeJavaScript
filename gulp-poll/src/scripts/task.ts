// Разве не закрываем запрос, после 'open'?
/* В примере с методом POST `xhr.send( 'vote=1&answer=2' );` 
Почему при отправлении данных не используется `FormData.append('vote=1&answer=2')` для кодировки? */

class Http {
    url: string;
    constructor(url: string) {
        this.url = url;
    }
}

class GetAnswers extends Http {
    gets: string;
    title: string;
    id: number;
    answer: [string];
    constructor() {
        super(url)
        this.gets = 'GET';
        this.title = '';
        this.id = 0;
        this.answer = ['',];

    }

    requestOfGet() {
        // Метод бращения на сервер GET
        return this.gets;

    }

    requestAnswer(answering: JSON): [number, string, []] {
        // Получаем ответ с сервера и заполняем св-ва
        let resp: any = answering;

        this.id = resp.id;
        this.title = resp.data.title;
        this.answer = resp.data.answers;
        return [resp.id, resp.data.title, resp.data.answers]
    }



}

class PostAnswers extends GetAnswers {

    posts: string;
    constructor() {
        super()
        this.posts = 'POST';
    }

    requestOfPost() {
        // Метод бращения на сервер POST
        return this.posts;

    }

    answers() {

    }
}

const pollTitle = <HTMLElement>document.getElementById('poll__title');
const answers = <HTMLElement>document.getElementById('poll__answers');
let bottoms = <HTMLCollection | undefined>answers.getElementsByClassName('poll__answer');


let url: string = 'https://students.netoservices.ru/nestjs-backend/poll'
let httpUrl = new Http(url)
const rGet = new GetAnswers();
let requestMethod = rGet.requestOfGet()

const requestGet = new XMLHttpRequest();
requestGet.open(requestMethod, url);
requestGet.send()
requestGet.addEventListener('readystatechange', (e) => {


    if (requestGet.readyState === 4) {
        let response: JSON = JSON.parse(requestGet.responseText);
        const listsOfAnswered = rGet.requestAnswer(response);

        getAllHtml(listsOfAnswered);
        if (!!bottoms && bottoms.length > 0) {

            for (let elem of bottoms) {
                elem.addEventListener('click', () => {
                    alert("Спасибо, ваш голос засчитан!");
                    // JSON.stringify(posts());
                })
            }
        }
    }
})//answer=индекс_ответа_в_массиве_ответов - gjl этим понимаем колщво вопосов на которые ответили или количество ответов на вопрос?



function getAllHtml(lists: [number, string, []]) {

    pollTitle.insertAdjacentText('beforeend', lists[1]); // Вставляем вопрос

    const nextElem = <HTMLElement>pollTitle.nextElementSibling;
    if (nextElem.classList.value.includes('poll__answers_active')) {
        const l = lists[2];
        // Вставляем кнопки
        nextElem.insertAdjacentHTML('beforeend', htmlButton(l));

    }
}

function htmlButton(lists: []): string {

    let html: string = "";
    for (let elem of lists) {
        html += `<button class="poll__answer">
        ${elem}
      </button>`
    }
    return html
}

const rPost = new PostAnswers();
requestMethod = rPost.requestOfPost(); 2891212


const requestPost = new XMLHttpRequest();
// let params: {vote: string, answer: number} = {
//     vote: 'poll__title',
//     answer: 0}
//


// function posts() {


//     const formData = new FormData();
//     formData.append('vote', 'poll__title');
//     formData.append('answer', '0');

//     requestPost.open(requestMethod, url)
//     requestPost.setRequestHeader('requestOfPost', 'application/x-www-form-urlencoded');
//     requestPost.send('vote=id_опроса&answer=poll__title');
//     console.log("5: ", requestPost);
// }
