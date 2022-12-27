function cycles(){
	let user_response = prompt('Pleas insert the integer more then zero: ')
	user_response = Number(user_response)
	
	if (
		user_response > 0 == true
		){
			let _lists = [];
			let integer_lists = [];
			
			for (let i = 1; i <= user_response; i++ ){
			
				if (user_response % i === 0){
					_lists.push(user_response / i)
				 }
			}
			
			if (_lists.length === 2){
				return console.log("Ta-daa: " + user_response + " It's integer")
			}
			
			return console.log("Your nomber: " + user_response + " It's not integer")
		}
		
	console.log('ERROR!')
}

$( document ).ready( function(){
	console.log(cycles())
	
} )