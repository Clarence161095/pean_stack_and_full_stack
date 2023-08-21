//Hàm gốc 
const numbers = [1, 2, 3, 4, 5];
function processArray(arr, operation) {
  const result = [];
  for (const num of arr) {
    result.push(operation(num));
  }
  return result;
}
function square(number) {
  return number * number;
}
function squareRoot(number) {
  return Math.sqrt(number);
}
const squaredNumbers = processArray(numbers, square);
const squareRootedNumbers = processArray(numbers, squareRoot);
console.log(squaredNumbers);
console.log(squareRootedNumbers);

//Closures


//Tránh Thay Đổi Trạng Thái

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};
const updatedPerson = Object.assign({}, person, { age: 31 });
console.log(person);
console.log(updatedPerson);


//Hàm Thuần --pure function
function Tong1(a, b) {
  return a + b;
}
const demo1 = Tong1(4, 5);
console.log(demo1); //9

//Hàm không thuần
function Tong2(a) {
  a++
  return a;
}
const demo2 = Tong2(5);
console.log(demo2);

//First-Class và Higher-Order Functions
const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

function operate(operation, x, y) {
  return operation(x, y);
}

const result = operate(add, 5, 3);
const demo4 = operate(subtract, 9, 3);
console.log(result);
console.log(demo4);


//Đệ quy (Recursion)
function countDownAndFactorial(n) {
  if (n === 0) {
    console.log("Đã đạt đến 0");
    return 1;
  } else {
    console.log(`Còn ${n} lần nữa`);
    return n * countDownAndFactorial(n - 1);
  }
}

const inputNumber = 6;
const result1 = countDownAndFactorial(inputNumber);
console.log(`Giai thừa của ${inputNumber} là: ${result1}`);



