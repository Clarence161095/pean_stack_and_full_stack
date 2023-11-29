const person = {
	name: "Lydia Hallie",
	hobbies: ["coding"]
};

function addHobby(hobby, hobbies = person.hobbies) {
	hobbies.push(hobby);
	return hobbies;
}

addHobby("running", []);//ko thay doi person.hobbies
addHobby("dancing"); //add
addHobby("baking", person.hobbies);//add

console.log(person.hobbies);