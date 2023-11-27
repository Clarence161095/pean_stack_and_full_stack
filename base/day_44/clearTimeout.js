let timeOutLoadData;

const arr =[]

for (let i = 1; i <= 30; i++) {
  arr.push(i)
  console.log("load data >> ", arr);
  // setTimeout(() => {
  //   console.log("render: ", arr);
  // }, 0);
  clearTimeout(timeOutLoadData);
  timeOutLoadData = setTimeout(() => {
    console.log("render: ", arr);
  }, 0);
}

for (let i = 31; i <= 55; i++) {
  arr.push(i)
  console.log("load data >> ", arr);
  // setTimeout(() => {
  //   console.log("render: ", arr);
  // }, 0);
  clearTimeout(timeOutLoadData);
  timeOutLoadData = setTimeout(() => {
    console.log("render: ", arr);
  }, 0);
}
