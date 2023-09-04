function tuanCallBackAfterClick(index) {
  console.log('Đây là lần click: ', index)
  setTimeout(function timer10s() {
    console.log('1 You clicked the button!');
  }, 10000);
  setTimeout(function timer1s() {
    console.log('2 You clicked the button!');
  }, 1000);
  setTimeout(function timer01s() {
    console.log('3 You clicked the button!');
  }, 100);
  for (let i = 0; i < 1000000; i++) {
    console.log('i', i)
  }
}

tuanCallBackAfterClick(1)