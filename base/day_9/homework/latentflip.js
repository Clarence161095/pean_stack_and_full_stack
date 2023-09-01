$.on('button', 'click', function tuanCallBackAfterClick() {
    setTimeout(function timer() {
        console.log('1 You clicked the button!');    
    }, 10000);
    setTimeout(function timer() {
        console.log('2 You clicked the button!');    
    }, 5000);
    setTimeout(function timer() {
        console.log('3 You clicked the button!');    
    }, 1000);
    for (let i = 0; i < 1000; i++) {
      console.log("Click", i);
    }
});

console.log("Hi!");

setTimeout(function timeout() {
    console.log("Click the button!");
}, 5000);

console.log("Welcome to loupe.");