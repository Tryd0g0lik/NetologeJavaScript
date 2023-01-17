/*
На вход подаем массив с цифрами которые имею дубли в этом же массиве.
В коде прописано условие которое на выход не должно подавать массив с дублями.

После запуска, на выходе получаем массив целый чисел.
По какой причине учловие которое не должно допускать дубли, выполняется частично?
 */
function cycles(arr=[], integ=0){

	let __tr = true;
	let __i = 0;
	let __lists=[];
	let __nList = []

	try {

		for (__i; __i < arr.length; __i++) {
			let __n = 1;
			__nList = [];

			for (__n; __n <= Number(arr[__i]); __n++){
				if (Number(arr[__i]) % Number(__n) === Number(0)) {
					__nList.push(__n);

				}

			}
			if (__nList.length === 2 ){

				__lists.push(Number(arr[__i]));
				if (integ !== 0 &&
				__lists.length === integ){
					console.log('И все таки оно делится!')
					console.log("__lists: " + __lists)
					return __lists

				}


			}
		}



	console.log('И все таки оно делится!')
	console.log("__lists: " + __lists)
	return __lists

	} catch (e){
		console.log(`ERROR of the "cycles_v2" Message: ${e.message}`)
		console.log(`ERROR of the "cycles_v2" Stack: ${e.stack}`)
	}


}

console.clear();
let integ = 0;
let arr = [ 2, 3, 5, 7, 11, 13, 14, 17, 24, 28, 30,]
cycles(arr, integ)