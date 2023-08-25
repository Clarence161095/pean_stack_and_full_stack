// 1. Tìm hiểu và giải thích được Constructor trong class chính xác nó là gì

class Person{
    constructor(name,age){
        this.name1 = name;
        this.age2 = age;
    }
}
const caNhan = new Person("linh",28);
console.log(caNhan);

//---

// 2. Class là gì và nó khác gì với object

class Info{
    constructor(name, sex){
        this.sex = sex;
        this.name = name;
    }
    getInfo(){
        return this.sex + this.name;
    } 
    }
const Obj = new Info("Linh","Nam");
console.log(Obj);

//3. Ôn lại Destructuring

// Rest Parametter
const ham = [1,2,3,4,5,6,7];
function Thongtin(...args){
   return args.map((v) => v + 1);
}
[a,b,c,...rest] = ham
const demo = Thongtin(...rest);
console.log(demo);

// Spead Parametter
const a1 = [1, 2, 3, 4, 5];
const b2 = [6, 7, 8, 9, 10];

const c2 = [...a1, ...b2];

console.log(c2); 
