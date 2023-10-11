function getInfo(member, year) {
  member.name = "Lydia";
  member.data.type.name = 'Linh'
  year = "1998";
  // console.log(member.getName());
}

const type = { name: 'Tuan', getName: () => "Take" }
const person = { name: "Sarah", data: { type } };
const birthYear = "1997";

const personString = JSON.stringify(person)
getInfo(JSON.parse(JSON.stringify(person)), birthYear);

console.log(person, birthYear);