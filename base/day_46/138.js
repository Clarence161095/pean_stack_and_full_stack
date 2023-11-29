const add = x => x + x;

function myFunc(num = 2, value = add(num)) {
	console.log(num, value);
}

myFunc();//num = 2 và value = 4
myFunc(3); //num = 3 và value = 6 
// A 