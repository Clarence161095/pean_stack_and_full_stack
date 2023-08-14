function sum(a, b) {
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

const newSum = addLogicShowLog(sum)

console.log('sum(1, 2)', sum(1, 2))

console.log('newSum(1, 2)', newSum(1, 2))
newSum(3, 4)
newSum(5, 6)
