const newPromise = resolve => {
  setTimeout(() => {
    // fetch data from server
    const data = 'This is the data'
    resolve(data, 'This is the data2')
  }, 2000)
}

const callBack = (data, data2) => {
  if (data) {
    console.log('The data is: ', data)
    console.log('The data2 is: ', data2)
  } else {
    console.log('No data')
  }
}

newPromise(callBack)
