const person = {
	firstName: "Lydia",
	lastName: "Hallie",
	pet: {
		// name: "Mara",
		breed: "Dutch Tulip Hound"
	},
	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
};

console.log(person.pet?.name); //Mara 
console.log(person.pet?.family?.name); // unde
console.log(person.getFullName?.()); // Lydia Hallie
// console.log(member.getLastName?.()); //unde
//-> B
