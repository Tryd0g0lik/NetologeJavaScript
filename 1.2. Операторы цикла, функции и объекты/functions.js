
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
				if (!(arr[__i] in __lists)){
					__lists.push(Number(arr[__i]));


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
let integ = 3;
let arr = [ 2, 3, 5, 7, 11, 13, 14, 17, 24, 28, 30, 2, 3, 5, 7, 11, 13]
cycles(arr)