/*

Задание 1 - сложный абзац для понимания - что конкретно требуется. Распилить бы его
>> В отдельном файле с расширением .js напишите программу, состоящую из функции и кода, вызывающего ее с аргументом,
>> значение которого получается из аргумента командной строки при запуске (используя process.argv[2] для получения
>> первого аргумента
Понял одно, что при вызове функции должен присутствовать аргумент в котором числа.


Далее...
>> Вызываемая функция должна принимать параметр - количество
>> первых простых чисел, которые необходимо найти.

То ли должен быть списо среди которого есть простые числа,
то ли должен быть список простых чисел,
то ли должно быть 2 аргумента. Один  - список чисел, Второй указывает какое количество необходимо найти тех самых
 простых чисел.

 Как то все двухсмыслено описано , а уточнять негде. В месенджаре полная глушь, ответов не дождаться.
 */

function cycles(arr=[], integ=0){ // v.2
	/*
	Исходя из нашего общения
	>> Она не принимает количество простых чисел в качестве аргумента и
	>> не возвращает массив простых чисел.

	Задание понима. следующее /=> На вход массив чисел

	Из данного комментария
	>> ... который ее вызывает не получает требуемое количество простых чисел

	что все же должен быть второй аргумент задающий требуемое кол-во простых чисел.
	 */
	let __tr = true;
	let __i = 0;
	let __lists=[];
	try {
		for (__i; __i < arr.length; __i++) {
			if (__lists.length === integ
			&& integ !== 0 ) {
				console.log('И все таки оно делится!')
				console.log(__lists)
				return __lists
			}

			if (Number(arr[__i]) % 2 === 0) {
				__lists.push(arr[__i]);

			}
		}
		if (__lists.length > 0){
			console.log('И все таки оно делится!')
			console.log(__lists)
		}
		return __lists
	} catch (e){
		console.log(`ERROR of the "cycles_v2" Message: ${e.message}`)
		console.log(`ERROR of the "cycles_v2" Stack: ${e.stack}`)
	}


}
let integ = 3;
let arr = [ 2, 3, 5, 7, 11, 13, 14, 17, 24, 28, 30]
cycles(arr)