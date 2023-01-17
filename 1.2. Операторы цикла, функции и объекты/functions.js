
function cycles(arr=[]){
	/*
	TODO: This function accept the one list with numbers and returns  one list which containing integers.
	 */
	let i = 0;
	let lists=[];
	let nList = []

	for (i; i < arr.length; i++) {
		let n = 1;
		nList = [];

		for (n; n <= Number(arr[i]); n++){
			if (Number(arr[i]) % Number(n) === Number(0)) {
				nList.push(n);

			}
		}
		if (nList.length === 2 ){
			lists.push(Number(arr[i]));

		}
	}

	console.log('И все таки оно делится!')
	console.log("list: " + lists)
	return lists
}


console.clear();
let arr = [ 2, 3, 5, 7, 11, 13, 14, 17, 24, 28, 30,34]
cycles(arr)