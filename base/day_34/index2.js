// const person = {
//   name: "Lydia",
//   age: 21,
//   city: []
// }

// // let city = person.city
// // city = "Amsterdam"

// let demo = person.city; //  chua dia chi city, ko phai bnt, gtri = dc city

// demo = [1,2,3,4,5]; // la 1 gia tri chua dia chi cua array moi -> dia chi moi 

// console.log(person)

// //bien nguyen thuy clone gia tri , object - array clone dia chi 

function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young."
  } else {
    const message = "Yay! You're old enough!"
  }

  return message
}

console.log(checkAge(21))