const keys = ["name", "age"]
const values = ["Lydia", 22]

const method = 'fromEntries';
// Object[method](keys.map((_, i) => {
// 	return [keys[i], values[i]]
// })) // { name: "Lydia", age: 22 }

console.log(Object[method](keys.map((_, i) => {
	return [keys[i], values[i]]
})));