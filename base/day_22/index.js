// const data = {
//   'target1': {
//     '男性': 1,
//     '女性': 2,
//   },
//   'target2': {
//     '男性': 2,
//     '女性': 3,
//   },
//   'target3': {
//     '男性': 3,
//     'おとこ': 1
//   }
// }

// const targets = {
//   'target1': true,
//   'target2': true,
//   'target3': true
// }
// const keys = {
//   '男性': true,
//   '女性': true,
//   'おとこ': true
// };
// const typeTerm = {
//   '1': true,
//   '2': true,
// };
// const values = {
//   '1__target1__男性': 1,
//   '1__target1__女性': 2,
//   '1__target2__男性': 2,
//   '1__target2__女性': 3,
//   '1__target3__男性': 3,
//   '1__target3__おとこ': 1,
// }

const allList = [
  {
    target: "target1",
    sex: "男性",
    value: 1,
    typeTerm: 1
  },
  {
    target: "target1",
    sex: "女性",
    value: 2,
    typeTerm: 1
  },
  {
    target: "target2",
    sex: "男性",
    value: 2,
    typeTerm: 1
  },
  {
    target: "target2",
    sex: "女性",
    value: 3,
    typeTerm: 1
  },
  {
    target: "target3",
    sex: "男性",
    value: 3,
    typeTerm: 1
  },
  {
    target: "target3",
    sex: "おとこ",
    value: 1,
    typeTerm: 1
  },


  {
    target: "target4",
    sex: "男性1",
    value: 3,
    typeTerm: 2
  },
  {
    target: "target5",
    sex: "おとこ1",
    value: 1,
    typeTerm: 2
  },
];

function transformData(allList, header, aggregateTarget, mapFirstKey) {
  const targets = {};
  const keys = {};
  const values = {};
  const typeTerm = {};
  const result = {};

  allList.forEach(row => {
    if (!keys[row.typeTerm]) keys[row.typeTerm] = {};
    if (!targets[row.typeTerm]) targets[row.typeTerm] = {};
    if (!targets[row.typeTerm][row[aggregateTarget]]) targets[row.typeTerm][row[aggregateTarget]] = true;
    if (!keys[row.typeTerm][row[header]]) keys[row.typeTerm][row[header]] = true;
    if (!typeTerm[row.typeTerm]) typeTerm[row.typeTerm] = true;
    values[`${row.typeTerm}__${row[aggregateTarget]}__${row[header]}`] = row.value
  })

  Object.keys(typeTerm).forEach(type => {
    const data = Object.keys(targets[type]).map((target) => {
      const listValue = Object.keys(keys[type]).map(key => {
        if (values[`${type}__${target}__${key}`]) {
          return values[`${type}__${target}__${key}`]
        } else {
          return 0
        }
      })
      return [target, ...listValue]
    })
    data.unshift([mapFirstKey[type], ...Object.keys(keys[type])]);
    result[type] = data;
  })
  return result;
}

console.log(transformData(
  allList,
  'sex',
  'target',
  {
    1: "TUAN",
    2: "LINH",
  }
));
