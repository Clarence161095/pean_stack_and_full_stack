class NewPromise {
  constructor (callback) {
    callback(this.resolve.bind(this), this.reject.bind(this))
  }

  then (successHandler) {
    this.successHandler = successHandler
    return this
  }

  catch (errorHandler) {
    this.errorHandler = errorHandler
    return this
  }

  resolve (data) {
    this.successHandler(data)
  }

  reject (error) {
    this.errorHandler(error)
  }
}

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = Math.random()
    if (data > 0.5) {
      resolve('Data is greater than 0.5')
    } else {
      reject('Data is less than 0.5')
    }
  }, 2000)
})

promise
  .then(data => {
    console.log('Success: ', data)
  })
  .catch(error => {
    console.log('Error: ', error)
  })

const callBack = (resolve, reject) => {
  setTimeout(() => {
    // fetch data from server
    const data = Math.random()
    if (data > 0.5) {
      resolve('Data is greater than 0.5')
    } else {
      reject('Data is less than 0.5')
    }
  }, 2000)
}

const promise2 = new NewPromise(callBack)

const _successHandler = data => {
  console.log('Success: ', data)
}

const _errorHandler = error => {
  console.log('Error: ', error)
}

promise2.then(_successHandler).catch(_errorHandler)

const promise3 = (_successHandler, _errorHandler) => {
  setTimeout(() => {
    // fetch data from server
    const data = Math.random()
    if (data > 0.5) {
      _successHandler('Data is greater than 0.5')
    } else {
      _errorHandler('Data is less than 0.5')
    }
  }, 2000)
}

promise3(_successHandler, _errorHandler);

promise2.then(id => {
  return id
}).then(id => {
  //...
})

// promise3(
//   id => {
//     console.log('Success: ', id)
//     promise3(
//       userById => {
//         console.log('Success: ', userById)
//         // when you callback inside a callback, it's called callback hell
//         promise3(
//           userById => {
//             console.log('Success: ', userById)
//             promise3(
//               userById => {
//                 console.log('Success: ', userById)
//               },
//               error => {
//                 console.log('Error: ', error)
//               }
//             )
//           },
//           error => {
//             console.log('Error: ', error)
//           }
//         )
//       },
//       error => {
//         console.log('Error: ', error)
//       }
//     )
//   },
//   error => {
//     console.log('Error: ', error)
//   }
// )
