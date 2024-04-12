function chat(hamDungDeGoiLai, myName = 'Linh') {
  console.log(`Hello, I'm ${myName}`)
  const thamSo1 = myName
  const thamSo2 = function (name, age, hamDungDeGoiLai) {
    console.log(`${myName}: How are you, ${name}?`)
    console.log(`${name}: I am ${age} years old`)
    hamDungDeGoiLai(myName, 17, (message) => {
      console.log(`${myName}: ${message}`)
    })
  }
  hamDungDeGoiLai(thamSo1, thamSo2)
}

chat(() => {}, 'Tuan')
chat(() => {}, 'Linh')

// System Design Concepts