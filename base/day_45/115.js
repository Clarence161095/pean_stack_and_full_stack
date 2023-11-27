const myMap = new Map()
const myFunc = () => 'greeting'

myMap.set(myFunc, 'Hello world!') //set key là 1 func, value hello world

//1
console.log(myMap.get('greeting')); // ko ton tai ket greeting
//2
console.log(myMap.get(myFunc)); //Ok -> lấy ra đc key mỳFun vs value =  HW
//3
console.log(myMap.get(() => 'greeting')); // ko tồn tại key nay trong map
//=> B
