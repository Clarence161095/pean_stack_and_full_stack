function* generatorOne() {
    yield ['a', 'b', 'c'];
  }
  
  function* generatorTwo() {
    yield* ['a', 'b', 'c'];
  }
  
  const one = generatorOne()
  const two = generatorTwo()
  
  console.log(one.next().value) // ['a', 'b', 'c']
  console.log(two.next().value) // a