
document.write('Hello, world!');
console.log('Hello, developers!');
function guessNumber(){
  let boolData = true;
  const i = 0;
  let firstText = '<p>Insert integer from range after 0 and before 999:</p>'


  while (boolData){

    let numberGenerated = Math.floor(Math.random() * 1000);

    console.log("This's generated:" + ' ' + String(numberGenerated))
    console.log('firstText')

    let dataUserNumber = +prompt('Integer:')
    console.log("This's user's integer:" + ' ' + dataUserNumber);

    if (dataUserNumber === numberGenerated &&
       dataUserNumber >= 0 &&
       dataUserNumber <= 1000){
       document.write('You guessed!' + String(dataUserNumber) +
       '=' + String(numberGenerated));
       boolData = false;
     } else if (i === 3 ) {
       boolData = false;
     } else {
       document.write('Ta-daa ->> You loser!' + String(dataUserNumber) + ' != ' + String(numberGenerated));
     }
     i++
    // console.log('new data:'  + ' ' + String(dataSelectorBody[0]))
  }

}

$(document).ready(function(){
    guessNumber()
  }
);
