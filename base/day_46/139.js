class Counter {
    #number = 10 //# mang nghia là biến private nên ko thể access từ bên ngoài
  //chỉ access đc từ bên trong chính object của lớp đó thôi
    increment() {
      this.#number++ //OK
    }
  
    getNum() {
      return this.#number //Ok
    }
  }
  
  const counter = new Counter()
  counter.increment()
  
  console.log(counter.#number) //lỗi 
  // dap an D