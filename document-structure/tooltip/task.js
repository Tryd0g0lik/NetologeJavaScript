const aCollect = document.getElementsByTagName('a');
let htmlColl = aArrAttr(aCollect);
popUp(htmlColl);
function popUp(elemList) {
    for (let elem of elemList) {
        if (elem.getAttribute('title') !== '' && elem.getAttribute('title') !== " ") {
            const titles = elem.getAttribute('title');
            // Собираем reference имеющий 'title' заполненый.
            // В последствии reference, прошеддший фильтр лишиается свойств браузера по умолчанию при клике.
            elem.insertAdjacentHTML('afterend', `<div class="tooltip" style="left: 0; top: 0;">
      ${titles}</div> `); // Делаем подсказку.
            elem.setAttribute("onclick", "event.preventDefault()");
            elem.removeAttribute('title');
        }
        let nextElem = elem.nextElementSibling;
        elem.addEventListener('mouseover', () => {
            // Позиционируем появление подсказки. Обновляем позиционирование подсказки при scrolling
            if (nextElem.classList.value.includes('tooltip')) {
                nextElem.setAttribute("style", `left: ${elem.getBoundingClientRect().left}px; top: ${elem.getBoundingClientRect().top + 15}px;`);
            }
        });
        elem.addEventListener('mouseup', (e) => {
            if (nextElem.classList.value.includes('tooltip')) {
                nextElem.classList.remove('tooltip_active');
            }
        });
        elem.addEventListener('mousedown', (e) => {
            if (nextElem.classList.value.includes('tooltip')) { // Визуализация подсказки по клику.
                nextElem.classList.add('tooltip_active');
            }
        });
    }
}
function aArrAttr(arr) {
    // Собираем reference буквально весь.
    let arrAttr = Array.from(arr).filter(item => item.hasAttribute('title'));
    return arrAttr;
}
