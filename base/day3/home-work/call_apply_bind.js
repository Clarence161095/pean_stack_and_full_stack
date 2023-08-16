// call không tham số 
const demo = {
    name : "Linh",
    age : 26
}
function Izuka(){
  return {
     key1: this.name,
     key2: this.age
  }
}
demo.Test = Izuka.call(demo);
console.log(demo);


//call có tham số 
// const Izuka = {
//     name: "Minaho",
//     age : 25
// }
// const Rin = function(test,demo){
//     return this.name + " " + this.age + " " + test + " " +demo ;
// }
// Izuka.Hobby = Rin.call(Izuka,"bat","chi");

// console.log(Izuka);

 
//apply
// const Izuka = {
//     name: "Anh",
//     age: "Yeu"
// }
// const Naho = function(key1,key2,key3){
//     return key1 + " " + key2;
// }
// Izuka.Hobby = Naho.apply(Izuka,["Em","nvd","pjk"])
// console.log(Izuka);


// const demo1 = {
//     name : "Linh",
//     age : 28,
//     Rin: function(){
//       return this.name + " " + this.age;
//     }
// }

// const demo2 = {
//     name: "Nhai",
//     age:26
// }

// demo2.Prop = demo1.Rin.bind(demo2)();
// console.log(demo2);