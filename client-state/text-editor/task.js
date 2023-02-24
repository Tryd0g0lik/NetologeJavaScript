"use strict";
const textarea = document.getElementById('editor');
let massages = "";
function textSaveLStorage(str) {
    return localStorage.setItem(`textarea`, str);
}
function textReturnLStorage() {
    let mess = localStorage.getItem(`textarea`);
    return mess;
}
if (textarea) {
    if (!!textReturnLStorage()) {
        let mess = textReturnLStorage();
        textarea.innerHTML = mess;
    }
    textarea.addEventListener('keyup', (e) => {
        try {
            massages = textarea.value;
            textSaveLStorage(massages);
        }
        catch (event) {
            let err = event;
            console.log(`ERROR: ${err.message}`);
        }
    });
}

//# sourceMappingURL=map/index.js.map/task.js.map
