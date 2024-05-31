console.log("Hello, world!");

setInterval(() => {
  let date = new Date();
  console.log(
    "Time: ",
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
  );
}, 1000);
