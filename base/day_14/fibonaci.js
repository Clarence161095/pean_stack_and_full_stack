/**
 * Tìm giá trị của dãy fibonacci tại vị trí n
 * @param {*} n Nhập vào n
 * @returns Thì trả về giá trị của dãy fibonacci tại vị trí n
 */
function fibonacci(n) {
  const fibonacciArray = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
  }
  return fibonacciArray[n];
}

function fibonacci2(n) {
  return n === 1 ? 1 : n === 0 ? 0 : fibonacci2(n - 1) + fibonacci2(n - 2);
}

const n = 25;
console.log(fibonacci(n));
console.log(fibonacci2(n));
