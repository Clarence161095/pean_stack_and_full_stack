const promise = new Promise((resolve, reject) => {
  resolve({
    data: {
      value: 42
    }
  })
})

promise
  .then(result => result.data)
  .then(data => {
    console.log(data.value)
  })
