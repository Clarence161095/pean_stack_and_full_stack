class Calc {
	constructor() {
		this.count = 0 
	}

	increase() {
		this.count ++
	}
}

const calc = new Calc()
(new Calc()).increase() // return Obj

console.log(calc.count)