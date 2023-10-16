const array = [1, 2, 3, 4]

function callbackfn(finalResult, currentData) {
  // Any logic for this...
  const newFinalData = finalResult + currentData
  return newFinalData
}

// const callbackfn = (finalResult, currentData) => finalResult + currentData
// console.log("tongReduce: ", array.reduce(callbackfn, 0));

console.log("tongReduce: ", array.reduce((acc, cur) => acc + cur, 0));

let tongEach = 0;
array.forEach(element => {
  tongEach = callbackfn(tongEach, element)
});
console.log("tongEach: ", tongEach);
delete tongEach;

(() => {
  let tongMap = 0;
  array.map(e => {
    tongMap += e;
  })
  console.log("tongMap: ", tongMap);
})()