const promise = new Promise((resolve, reject) => {
  resolve({
    data: {
      id: 42
    }
  })
})

promise
  .then(({ data: { id } }) => {
    const then = resolve => {
      setTimeout(() => {
        resolve(`id-${id}`)
      })
    }
    return { then }
    // return new Promise(then)
  })
  .then(info => {
    const info2 = info + ' is the answer'
    const info3 = info2 + ' to the ultimate question'
    console.log('info: ', info3)
  })
