const reader = {
  doSomething () {
    setTimeout(() => {
      console.log('After waiting 1 second')
      console.log('Callreaderack A doSomething')
      this.reload()
    }, 1000)
  },
  then (doSomething) {
    this.reload = doSomething
  }
}

reader.then(() => {
  console.log('Do something of A')
})

reader.reload = () => {
  console.log('Do something of A')
}

reader.doSomething()
