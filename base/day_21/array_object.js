const listHs1 = {
  0: "tuan",
  1: "linh",
  name: 'Nguyen anh tuan',
  'ho va ten': "jony",
  getName: () => { }
}

const listHs2 = ['tuan', 'linh']
listHs2.name = 'Nguyen anh tuan'
listHs2["ho va ten"] = "jony"
listHs2.getName = () => { console.log('TUAN TUAN'); }

console.log(listHs1[1]);
console.log(listHs1.name);
console.log(listHs1["ho va ten"]);

console.log(listHs2[1]);
console.log(listHs2.name);
console.log(listHs2["ho va ten"]);
console.log(Object.keys(listHs1));
console.log(Object.keys(listHs2));
