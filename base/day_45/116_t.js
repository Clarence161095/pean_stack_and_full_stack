const person = {
  name: "Tuan",
  age: 28,
  project: {
    name: "personal",
    stack: "Pean Stack"
  }
}

const chanAge = (x = {...person}) => x.age += 2;
const chanAgeAndName = (x = JSON.parse(JSON.stringify(person))) => {
  x.age += 1
  x.name = "Linh"
  x.project.name = "Hito"
}

chanAge(person)
chanAgeAndName()

console.log(person);