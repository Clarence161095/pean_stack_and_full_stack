const array = [1, 2, 3, 4]

function callbackfn(finalResult, currentData) {
  // Any logic for this...
  const newFinalData = finalResult + currentData
  return newFinalData
}

// const callbackfn = (finalResult, currentData) => finalResult + currentData

console.log(array.reduce(callbackfn, 0));
