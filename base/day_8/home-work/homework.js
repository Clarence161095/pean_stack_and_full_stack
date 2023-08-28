// 1. Class là gì và nó khác gì với object
// #Class : 
// - 1 template để tạo Object 
// - Chứa thuộc tính + phương thức mà Object được tạo ra sẽ có 
// - Class mô tả cách đối tượng hoạt động + chứa thông tin gì
// - Không làm việc trực tiếp với chương trình
// #Object: 
// - 1 phiên bản cụ thể được tạo ra dựa trên class
// - Object sẽ có các thuộc tính được định nghĩa trong class
// - Mỗi Object có thể có giá trị thuộc tính khác nhau tùy vào cách đối tượng
// được tạo 
// - làm việc trực tiếp với chương trình bằng cách gọi phương thức và truy cập thuộc tính

// class Car{
//     constructor(name,price = 0){
//         this.name = name; //khởi tạo thuộc tính cho Object
//         this.price = price;
//     }
// }
// const car1 =  new Car("Toyota",5000); //khởi tạo object từ class
// const car2 =  new Car("Vios");
// console.log(car1);
// console.log(car2);

const app = {
  db: {
    sinhVien: []
  },
  use(...prompt) {
    const [route = '/', callBack = (res, req) => {

    }] = prompt;
  },
  get, post, put: this.use,
  main() {
    console.log('Chương trình đã khởi động');
    app.get('getNameSinhVien', (res, req) => {

    })
    return this;
  }
}.main();

// //2. Ôn lại Destructuring
// //==> tách 1 array or object thành các giá trị riêng biệt
// const arr = [1,2,3,4,5];
// [a,b,...rest] = arr;
// console.log(rest);

// const obj = {name:"A", age:28, sex:"Nam"};
// const {age,...rest2} = obj;
// console.log(rest2);

// //thay đổi property và value trong Obj khi destructuring
// const demo2 = {
//     name: "Linh",
//     age: 28,
//     address: {city:"HD", town:"North"}
// }
// const {address:add1,...rest3} = demo2;
// const test = {add1:"Izuka",...rest3};
// console.log(test);
// console.log(demo2);

// //do khác phân vùng nhớ nên demo2 không bị thay đổi

// 3. Hand-short dependency injection tai sao lại là: constructor(private abc) {}

//4
// https://linhthusinh98xxx.web.app/


