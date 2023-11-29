const person = {
    name: "Lydia",
    age: 21
  }
  
  const changeAge = (x = { ...person }) => x.age += 1 //rest para
  const changeAgeAndName = (x = { ...person }) => { //rest para
    x.age += 1
    x.name = "Sarah"
  }
  
  changeAge(person) // dc truyen tham so person nen luc nay dang reff person
  changeAgeAndName() // ko dc truyen nen ko reff person
  
  console.log(changeAge(person)) // person luc nay da bi thay doi 
//   --> C

//DeepClone -> ko ah gtri
//ShallowClone -> ah gia tri