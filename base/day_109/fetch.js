// Mock myFetch function
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

module.exports = myFetch
