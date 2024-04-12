class MyPromise {
  constructor (ex) {
    ex(this.resolve.bind(this), this.reject.bind(this))
  }

  resolve (data) {
    this.getResult(data)
  }

  reject (error) {
    this.getError(error)
  }

  then (getResult) {
    this.getResult = getResult
    return this
  }

  catch (getError) {
    this.getError = getError
    return this
  }
}

const postgres = callBack => {
  setTimeout(() => {
    callBack()
  }, 1000)
}

function getListCompany (callMeWhenDone) {
  postgres(queryToolKit => {
    // Connect DB and get list company
    // Do something...
    // const data = queryToolKit('SELECT * FROM company')
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    callMeWhenDone(list)
  })
}

function main () {
  console.log('Start main')
  getListCompany(list => {
    console.log('Call me: ', list)
  })

  // ------------------------------------------------

  const promise = new Promise(callMeWhenDone => {
    // Connect DB and get list company
    // Do something...
    // const data = queryToolKit('SELECT * FROM company')
    postgres(() => {
      const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      callMeWhenDone(list)
    })
  })
  promise.then(list => {
    console.log('Promise: ', list)
  })

  // ------------------------------------------------
  const myPromise = new MyPromise(callMeWhenDone => {
    // Connect DB and get list company
    // Do something...
    // const data = queryToolKit('SELECT * FROM company')
    postgres(() => {
      const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      callMeWhenDone(list)
    })
  })
  myPromise.then(list => {
    console.log('MyPromise: ', list)
  })

  console.log('End main')
}
main()
