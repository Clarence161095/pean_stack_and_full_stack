// 1. Tìm hiểu và giải thích được Constructor trong class chính xác nó là gì

class Person {
    constructor(...param) {
        const [name = 'linh', age = 28] = param
        this.name = name;
        this.age = age;
    }
}
const caNhan = new Person("tuan");
const caNhan2 = { name: 'tuan', age: 28 }
console.log(caNhan);
console.log(caNhan2);

//---

// 2. Class là gì và nó khác gì với object

class Info {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    getInfo() {
        return this.sex + this.name;
    }
}

function myConstructor(name, sex) {
    return {
        name: name,
        sex: sex,
        getInfo() {
            return this.sex + this.name;
        }
    }
}

const ob1 = {
    sex: 'Linh',
    name: 'Nam',
    getInfo() {
        return this.sex + this.name;
    }
}

const ob2 = myConstructor("Linh1", "Nam")

const ob3 = new Info("Linh", "Nam");
console.log(ob1);
console.log(ob2);
console.log(ob3);

//3. Ôn lại Destructuring

// Rest Parametter
const ham = [1, 2, 3, 4, 5, 6, 7];
function Thongtin(...args) {
    return args.map((v) => v + 1);
}
[a, b, c, ...rest] = ham
const demo = Thongtin(...rest);
console.log(demo);

// Spead Parametter
const a1 = [1, 2, 3, 4, 5];
const b2 = [6, 7, 8, 9, 10];

const c2 = [...a1, ...b2];

console.log(c2); 
