
// const mang123 = [1, 2, 3]
// Object.keys([1, 2, 3])

// function getABC (a, b, c) {
//   return 1 + 2 + 3
// }

// const getABC = (a, b, c) => {
//   return 1 + 2 + 3
// }

// function getABC(params) {
//   return 1 + 2 + 3
// }

// getABC(...mang123)

const result = (function getABC(a, b, c) {
  console.log(a, b, c);
  return 1 + 2 + 3;
})(1, 2, 3)

console.log(result);


// console.log(getABC);
// console.log(getABC(...mang123));
