const promise = new Promise((resolve, reject) => {
  // Get data from the server
  resolve('id1')
})

promise
.then(id1 => {
  const promise2 = new Promise((resolve, reject) => {
    // Get data from the server
    resolve('id2 with ' + id1)
  })
  return promise2
})
.then(id2 => {
  return new Promise((resolve, reject) => {
    // Get data from the server
    resolve('id3 with ' + id2)
  })
})
.then(id3 => {
  console.log(id3)
}).catch(error => {
  console.log(error)
})

// const id1 = resolve('id1')
// const id2 = resolve('id2 with ' + id1)
// const id3 = resolve('id3 with ' + id2)

// promise
//   .then(id1 => {
//     const promise2 = new Promise((resolve, reject) => {
//       // Get data from the server
//       resolve("id2 with " + id1)
//     })
//     promise2.then(id2 => {
//       const promise3 = new Promise((resolve, reject) => {
//         // Get data from the server
//         resolve("id3 with id2")
//       })
//       promise3.then(id3 => {
//         console.log(id3)
//       })
//     })
//   })
//   .catch(error => {
//     console.log(error)
//   })

({
  then: function (resolve, reject) {
    // Get data from the server
    resolve('id2 with ' + id1)
  }
}).then(id2 => {
  console.log(id2);
})