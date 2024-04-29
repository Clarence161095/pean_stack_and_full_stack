const myFetch = url => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: 'This is the data from the myFetch function'
      })
    }, 500)
  })
  return promise
}

const URL = 'https://reqres.in/api/users?page=2'

function myAsync () {
  const listResult = []
  function myAwait (cb) {
    cb(promise => {
      promise.then(result => {
        listResult.push(result)
      })
    })
  }
  function finallyResult (listResult, callBack) {
    callBack(...listResult)
  }
  // ------------------------------

  myAwait(getPromise => {
    const result = getPromise(myFetch(URL))
  })
  myAwait(getPromise => {
    const result2 = getPromise(myFetch(URL))
  })
  setTimeout(() => {
    finallyResult(listResult, (result, result2) => {
      console.log('result: ', result)
      console.log('result2: ', result2)
    })
  }, 3000)

  // ------------------------------
  // Your code
  // const result = tuanAwait myFetch(URL)
  // const result2 = tuanAwait myFetch(URL)
  // console.log('result: ', result)
  // console.log('result2: ', result2)
  // -----------Builder-------------
  // (.*)tuanAwait (.*)
  // myAwait((getPromise) => {
  //   $1getPromise($2)
  // })
}

myAsync()

myFetch(URL).then(result => {
  myFetch(URL).then(result2 => {
    console.log('then() result:', result)
    console.log('then() result2:', result2)
  });
})