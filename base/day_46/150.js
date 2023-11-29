const animals = {};
let dog = { emoji: '🐶' }// -> string
let cat = { emoji: '🐈' }

animals[dog] = { ...dog, name: "Mara" }
animals[cat] = { ...cat, name: "Sara" }

// console.log(animals[dog])
console.log(animals);

//B