class MyPromise {
  constructor (ex) {
    ex(this.#resolve.bind(this), this.#reject.bind(this))
  }

  #resolve(data) {
    this.getResult(data)
  }

  #reject(error) {
    this.getError(error)
  }

  then(getResult) {
    this.getResult = getResult
    return this
  }

  catch(getError) {
    this.getError = getError
    return this
  }
}

const promise = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve('success Promise')
    }, 1000);
  } catch (e) {
    reject('error')
  }
})
promise.then((data) => {
  console.log(data)
}).catch((error) => {
  console.log(error)
})

// const param = (ok, notOK) => {
//   try {
//     setTimeout(() => {
//       ok('success MyPromise')
//     }, 1000);
//   } catch (e) {
//     notOK('error')
//   }
// }
const myPromise = new MyPromise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve('success MyPromise')
    }, 1000);
  } catch (e) {
    reject('error')
  }
})

// myPromise.getResult = (data) => {
//   console.log(data)
// }
// myPromise.getError = (error) => {
//   console.log(error)
// }

myPromise.then((data) => {
  console.log(data)
}).catch((error) => {
  console.log(error)
})
