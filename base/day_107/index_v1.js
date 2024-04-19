const A = {
  doSomething () {
    console.log('Do something of A')
  }
}

const B = {
  theCallBackFunctionThatIWillCallItWhenIWant:
    'Thích khai báo hay không cũng được, vì sau này sẽ gán lại thôi. Và trong js thì ko quan tâm kiểu dữ liệu của biến. Vì nó là Dynamic type language',
  doSomething () {
    setTimeout(() => {
      console.log('After waiting 1 second')
      console.log('CallBack A doSomething')
      this.theCallBackFunctionThatIWillCallItWhenIWant()
    }, 1000)
  },
  giveMeACallBackThatIWillCallItWhenIWant (doSomething) {
    this.theCallBackFunctionThatIWillCallItWhenIWant = doSomething
  }
}

B.giveMeACallBackThatIWillCallItWhenIWant(A.doSomething)
B.theCallBackFunctionThatIWillCallItWhenIWant = A.doSomething
B.doSomething()
