
let number = 0;

function numberPlusPlus(_number) {
  number = number + 1;
  return _number;
}

function plusPlusNumber(_number) {
  number = number + 1;
  return number;
}

console.log(numberPlusPlus(number));
console.log(plusPlusNumber(number));
console.log(number);