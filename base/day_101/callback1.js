const linh = callBack => {
  const myName = 'Linh'
  console.log(`Hello, I'm ${myName}`)
  callBack(myName, (name, age, callBack2) => {
    console.log(`${myName}: How are you, ${name}?`)
    console.log(`${name}: I am ${age} years old`)
    callBack2(myName, 17, (message) => {
      console.log(`${myName}: ${message}`)
    })
  })
}

// Tuan will talk to Linh
linh((name, callBack) => {
  const myName = 'Tuan'
  console.log(`${myName}: Hi, ${name}`)
  console.log(`${myName}: I am ${myName}`)
  callBack(myName, 28, (name, age, callBack2) => {
    console.log(`${myName}: How old are you?`)
    console.log(`${name}: I am ${age} years old`)
    callBack2('Nice to meet you')
  })
})
