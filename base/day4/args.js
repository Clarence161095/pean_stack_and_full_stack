function _sum(a, b) {
  // 100 logic
  return a + b;
}

const addLogicShowLog = (fnc) => {
  return function (...arg) {
    const [a, b] = arg
    const result = a + b
    console.log('time', new Date)
    console.log(a + ' + ' + b + ' = ', result)
    return fnc.apply(this, arg)
  }
}

const sum = addLogicShowLog(_sum);

// Có rất nhiều chỗ đang sử dụng logic ở trên...
const calcMoney = sum(100, 200)
const calc2Money = sum(200, 300)
console.log('calcMoney', calcMoney)
console.log('calc2Money', calc2Money)
