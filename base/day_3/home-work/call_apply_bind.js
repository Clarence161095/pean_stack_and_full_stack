// call không tham số 
// const demo = {
//   name: "Linh",
//   age: 26
// }
// function izuka() {
//   return {
//     key1: this.name,
//     key2: this.age
//   }
// }
// demo.Test = izuka.call(demo);
// console.log(demo);


//call có tham số 
// const izuka = {
//   name: "Minaho",
//   age: 25
// }
// const Rin = function (test, demo) {
//   return this.name + " " + this.age + " " + test + " " + demo;
// }
// // const Rin = (test, demo) => {
// //   return this.name + " " + this.age + " " + test + " " + demo;
// // }
// izuka.Hobby = Rin.call(izuka, "bat", "chi");

// console.log(izuka);


//apply
// const izuka = {
//   name: "Anh",
//   age: "Yeu"
// }

// const Naho = function (...keys) {
//   const [key1, key2, ...keyTemp] = keys
//   console.log('this', this)
//   console.log('keyTemp', keyTemp)
//   return key1 + " " + key2;
// }

// Naho.apply(izuka, ["Em", "nvd", "pjk"]);
// izuka.Hobby = Naho.apply(izuka, ["1", "2", "3", "4", "5"])
// console.log(izuka);

const demo1 = {
  name: "Linh",
  age: 28,
  Rin: function () {
    console.log(this.name + " " + this.age);
  }
}

const demo2 = {
  name: "Nhai",
  age: 26
}

const newRin = demo1.Rin.bind(demo2);
newRin();
demo1.Rin();
