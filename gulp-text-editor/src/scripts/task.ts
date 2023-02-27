const textarea = <HTMLFormElement>document.getElementById('editor');
let massages: string = "";
function textSaveLStorage(str: string) {
  return localStorage.setItem(`textarea`, str)
}

function textReturnLStorage() {
  let mess = localStorage!.getItem(`textarea`)
  return mess;
}

if (textarea) {
  if (!!textReturnLStorage()) {
    let mess = textReturnLStorage();
    textarea.innerHTML = (mess as string);

  }

  textarea.addEventListener('keyup', (e) => {
    try {
      massages = textarea.value;
      textSaveLStorage(massages);

    } catch (event) {
      let err = (event as Error);
      console.log(`ERROR: ${err.message}`)

    }
  }
  )

}