class Counter {
	constructor() {
		this.count = 0;
	}

	increment() {
		this.count++; // 0 
	}
}
const counterOne = new Counter(); //counterOne dang bang 1 Object (1)
counterOne.increment();//dua count = 0 vao trong Object(luc nay count = 0) (2)
counterOne.increment(); //(3) luc nay khi goi ham increment lan 2 thi truyen vao count = 0 + 1 nhung count = 1 chua dc su dung
const counterTwo = counterOne;//(4) luc nay counterTwo = Object hien tai count = 1 + 1, nhung count = 2 duoc su dung o (5)
counterTwo.increment();//(5) luc nay Object nhan vao count = 2 va tiep tuc + 1 , nhung count = 3 duoc su dung o (6)
console.log(counterOne.count);//(6) luc nay truyen vao count = 3. 

//do (6) la lan goi count cuoi cung => count = 3, dap an 3