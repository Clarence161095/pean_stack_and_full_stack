const person = {
	name: "Lydia Hallie",
	address: {
		street: "100 Main St"
	}
};

Object.freeze(person); //{ name: 'Lydia Hallie', address: { street: '101 Main St' } }
person.address.street = "101 Main St"
console.log(person);
//freeze làm đóng băng ko cho phép thay đổi thuộc tính(thêm, xoá , sửa) và giá trị tt
//Nhưng với shallow copy thì là ngoại lệ
//=> C