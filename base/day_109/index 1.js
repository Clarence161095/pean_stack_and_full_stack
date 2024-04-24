const myFetch = require('./fetch')

const URL = 'https://reqres.in/api/users?page=2'

;(async function () {
  async function getSomething (params) {
    const result = await myFetch(URL)
    return result
  }
  const something = await getSomething()
  console.log("async/await: ", something)
})()

myFetch(URL).then(result => {
  console.log('then(): ', result)
})

fetch(URL).then(response => {
  return response.json()
}).then(result => {
  console.log('fetch(): ', result.data[0])
})

;(async function () {
  async function getSomething (params) {
    const response = await fetch(URL)
    const result = await response.json()
    return result
  }
  const something = await getSomething()
  console.log("async/await: ", something.data[0])
})()