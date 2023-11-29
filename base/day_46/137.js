const person = {
	name: "Lydia Hallie",
	address: {
		street: "100 Main St"
	}
};

Object.freeze(person); //{ name: 'Lydia Hallie', address: { street: '101 Main St' } }
person.address.street = 123
console.log(person);