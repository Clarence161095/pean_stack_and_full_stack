function calculate(num, a) {
  return num + a;
}

const getAmountLinh = function (amount) {
  console.log("Amount Linh:", amount);
  return function (num) {
    console.log("Num Linh:", num);
    console.log("Linh:", calculate(num, amount))
  };
}

const getAmountTuan = function (amount) {
  console.log("Amount Tuan:", amount);
  return function (num) {
    console.log("Num Tuan:", num);
    console.log("Tuan:", calculate(num, amount))
  };
}

setTimeout(() => {
  getNum(getAmount(getAmountLinh));
}, Math.floor(Math.random() * 2000));

setTimeout(() => {
  getNum(getAmount(getAmountTuan));
}, Math.floor(Math.random() * 2000));


// ---- Be-hide the scene ----
function getNum(callback) {
  return callback(10);
}

function getAmount(callback) {
  const random = Math.floor(Math.random() * 100);
  return callback(random);
}