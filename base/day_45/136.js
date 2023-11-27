const person = { name: "Lydia Hallie" };

Object.seal(person);//niem phong thuoc tinh va gia tri cua person
//ko thể add thêm tt, ko thể xoá thuộc tính, ko thể thay đổi gt tt

//Nhung van co the thay doi gia tri cua thuoc tinh bang cach sau 
//person.name = "Evan Bacon" => A

