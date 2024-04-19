class Reader {
  constructor () {}
  doSomething () {
    setTimeout(() => {
      console.log('After waiting 1 second')
      console.log('Call reader.doSomething')
      this.reload()
    }, 1000)
  }
}

const reader = new Reader()
reader.reload = () => {
  console.log('Do something of A')
}

reader.doSomething()
