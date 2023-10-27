
const add = () => {
  const cache = {};
  return num => {
    if (num in cache) {
      return `From cache! ${cache[num]}`;
    } else {
      const result = num + 10;
      cache[num] = result;
      return `Calculated! ${result}`;
    }
  };
};

function name(params) {
  return function name2(params) {

  }
}

const addFunction = add();
const addFunction2 = add();
console.log(addFunction(10));
console.log(addFunction(10));
console.log(addFunction(5 * 2));
console.log(addFunction2(10));
console.log(addFunction2(10));
console.log(addFunction2(5 * 2));