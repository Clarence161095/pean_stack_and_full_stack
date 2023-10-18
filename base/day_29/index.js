// const classInfo = [
//   { name: 'Tony', sex: 'man', hobby: 'game', score: 5 },
//   { name: 'Sarah', sex: 'woman', hobby: 'game', score: 4 },
//   { name: 'John', sex: 'man', hobby: 'music', score: 3 },
//   { name: 'Emily', sex: 'woman', hobby: 'sports', score: 1 },
// ];

// const expect = {
//   sex: {
//     woman: ['Sarah', 'Emily'],
//     man: ['Tony', 'John'],
//   },
//   hobby: {
//     game: ['Tony', 'Sarah'],
//     music: ['John'],
//     sports: ['Emily'],
//     guitar: []
//   },
//   score: {
//     "Lớn hơn 3 điểm": ['Tony', 'Sarah'],
//     "Nhỏ hơn 4 điểm": ['John', 'Emily'],
//   }
// }


const classInfo = [
  { name: 'Tony', sex: 'man', hobby: 'game', score: 5 },
  { name: 'Sarah', sex: 'woman', hobby: 'game', score: 4 },
  { name: 'John', sex: 'man', hobby: 'music', score: 3 },
  { name: 'Emily', sex: 'woman', hobby: 'sports', score: 1 },
  { name: '', sex: 'woman', hobby: 'guitar', score: 6 },
];

function xuLyData(data) {
  const result = {};
  const result2 = {};
  const result3 = {};
  for (let x of data) {
      const { sex, name } = x;
      if (result[sex]) {
          result[sex].push(name);
      }
      else {
          result[sex] = [name];
      }
  }

  for (let x of data) {
      const { hobby, name } = x;
      if (result2[hobby]) {
          result2[hobby].push(name);
      }
      else {
          result2[hobby] = [name];
      }
  }
  for (let x of data) {
      const { score, name } = x;
      if (result3[score]) {
          result3[score].push(name);
      } else {
          switch (true) {
              case score > 3:
                  if (!result3["Lon hon 3"]) {
                      result3["Lon hon 3"] = [];
                  }
                  result3["Lon hon 3"].push(name);
                  break;
              case score < 4:
                  if (!result3["Nho hon 4"]) {
                      result3["Nho hon 4"] = [];
                  }
                  result3["Nho hon 4"].push(name);
                  break;
              default:
                  console.log("Ngoai pham vi");
          }
      }
  }

  return {
      sex: {
          ...result
      },
      hobby: {
          ...result2
      },
      score: {
          ...result3
      }
  }
}
const data = xuLyData(classInfo);
console.log(data);