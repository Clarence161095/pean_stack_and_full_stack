function then (input) {
  input('Hello')
  return {
    then: input2 => {
      input2('World')
    }
  }
}

then(data => {
  console.log(data)
}).then(data => {
  console.log(data)
})
