
// B1:
function sayHi(){
    var name = undefined;
    console.log(name);
    console.log(age);
    name = "Lydia";
    age = 21;
}
sayHi();
// -Dap an D: undefined va ReferenceError
// -undefined: var có tồn tại 1 cơ chế cho phép đưa phần khai báo lên đầu dù vị trí
//khai báo được đặt tại đâu và gán cho bằng giá trị khởi tạo mặc định kxd
//ReferenceError: do let khi khởi tạo không được gán cho giá trị mặc định nên let sẽ
//trả về ReferenceError thay vì kxd
