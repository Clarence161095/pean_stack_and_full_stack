// B1:
// function sayHi(){
//     console.log(name);
//     console.log(age);
//     var name = "Lydia";
//     let age = 21;
// }
// sayHi();
// -Dap an D: undefined va ReferenceError
// -undefined: var có tồn tại 1 cơ chế cho phép đưa phần khai báo lên đầu dù vị trí
//khai báo được đặt tại đâu và gán cho bằng giá trị khởi tạo mặc định kxd
//ReferenceError: do let khi khởi tạo không được gán cho giá trị mặc định nên let sẽ
//trả về ReferenceError thay vì kxd

// B2:
// for(var i = 0; i<3;i++) 
// {
//     setTimeout(() => console.log(i), 1);
// }
// for(let i = 0;i<3;i++){
//     setTimeout(() => console.log(i), 1);
// }
// -Dap an C: 
// var có 1 tính chất là hoisting, khi var được đưa vào trong 1 function thì nó sẽ update lại
// giá trị của i lấy từ bên ngoài function .


//B3:
// const shape = {
//     radius:10,
//     diameter(){
//         return this.radius *2;
//     },
//     perimeter:() => 2 * Math.PI * this.radius
// };
// shape.diameter();
// shape.perimeter();

// -Dap an B
// Do perimeter la 1 ham vo danh 
// nen khongthe dung this duoc nen se bao loi NaN

//B4:
// +true;
// !"Lydia"

// Dap an A
// Do +true = 1
// !"Lydia" = false


//B5:
// const bird = {
//     size:"small"
// };
// const mouse = {
//    name:"Mickey",
//    small:true
// };

// // Dap an A: Do bizd.size khong phai property cua mouse
// De truy cap va lay dc gia tri cua size tron bird ta su dung bird.size
// luc nay small = bird.size, thay bird.size vao small trong mouse
// const mouse = {
//     name:"Mickey",
//     bird.size = true
// }
// => true = mouse[bird.size] 
// => true = mouse[bird["size"]];


//B6
// let c = {greeting:"Hey"};
// let d;

// d=c;
// c.greeting = "Hello";
// console.log(d.greeting);
// Dap an A
// Do thang d dang tham chieu toi thang c , ca 2 dang cung
//cho toi 1 vung nho nen khi thang c thay doi 
// thi than d cung thay doi

//B7
// let a = 3;
// let b = new Number(3);
// let c = 3;
// console.log(typeof b);
// console.log(a == b); //true thi gia tri cua a va b nhu nhau
// console.log(a === b);//false do kieu du lieu cua a va b khac nhau
// console.log(b === c);//false do kieu du lieu cua b va c khac nhau
// // Dap an C

//B8
// class Chameleon{
//     static colorChange(newColor){
//         this.newColor = newColor;
//         return this.newColor;
//     }
//     constructor({newColor = "green"}={}){
//         this.newColor = newColor;
//     }
// }
// const freddie = new Chameleon({newColor:"purple"});
// freddie.colorChange("orange");
//static không cho phép truy cập nó ngòai từ chính class or 1 method static khác
//B9
// let greeting;
// greetign = {};
// console.log(greetign);

//B10
// function bark() {
//     console.log("Woof!");
//   }
  
//   bark.animal = "dog";
//   //undifend
// const demo = bark();
// console.log(demo);

//B11
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
  
//   const member = new Person("Lydia", "Hallie");
//   Person.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
//   };
  
//   console.log(member.getFullName());
// dap an A.
// do da dat member = new Person r, nen de add them 1
// phuong thuc vao doi tuong thi phai la member.getFullName

//B12
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  const lydia = new Person("Lydia", "Hallie");
  const sarah = Person("Sarah", "Smith");
  
  console.log(lydia);
  console.log(sarah);
//   dap an D . do Person dong vai tro nhu 1 class
//   nen no khong lam viec voi chuong trinh 

//B13
//B14
//B15
function sum(a, b) {
    return a + b;
  }
  
  sum(1, "2");
  console.log(sum());
  // dap an la A. Do "2" la kieu string nen khi cong voi number thi ko 
  // ra kq. trong ham sum, kieu du lieu rat quan trong