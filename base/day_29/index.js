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
    { name: 'Tuan', sex: 'woman', hobby: 'guitar', score: 6 },
];

function xuLyDataVer0(params) {
    const expect = {
        sex: {
            woman: [],
            man: [],
        },
        hobby: {
            game: [],
            music: [],
            sports: [],
            guitar: []
        },
        score: {
            "Lớn hơn 3 điểm": [],
            "Nhỏ hơn 4 điểm": [],
        }
    }

    for (const info of classInfo) {
        switch (info.sex) {
            case 'woman':
                expect.sex.woman.push(info.name)
                break;
            case 'man':
                expect.sex.man.push(info.name)
                break;
            default:
                break;
        }

        switch (info.hobby) {
            case 'game':
                expect.hobby.game.push(info.name)
                break;
            case 'music':
                expect.hobby.music.push(info.name)
                break;
            case 'sports':
                expect.hobby.sports.push(info.name)
                break;
            case 'guitar':
                expect.hobby.guitar.push(info.name)
                break;
        }
    }
    //...
    return expect
}

function xuLyDataVer1(data) {
    const result = {
        sex: {},
        hobby: {},
        score: {},
    }

    for (let x of data) {
        const { sex, name, score, hobby } = x;
        if (result.sex[sex]) {
            result.sex[sex].push(name);
        } else {
            result.sex[sex] = [name];
        }

        if (!result.hobby[hobby]) {
            result.hobby[hobby] = []
        }
        result.hobby[hobby].push(name)

        if (score > 3) {
            if (!result.score["Lon hon 3"]) {
                result.score["Lon hon 3"] = [];
            }
            result.score["Lon hon 3"].push(name);
        } else if (score < 4) {
            if (!result.score["Nho hon 4"]) {
                result.score["Nho hon 4"] = [];
            }
            result.score["Nho hon 4"].push(name);
        }
    }

    return result;
}

function xuLyDataVer2(data, result) {
    for (let x of data) {
        const { sex, name, score, hobby } = x;
        if (result.sex[sex]) {
            result.sex[sex].push(name);
        } else {
            result.sex[sex] = [name];
        }

        if (!result.hobby[hobby]) {
            result.hobby[hobby] = []
        }
        result.hobby[hobby].push(name)

        if (score > 3) {
            if (!result.score["Lon hon 3"]) {
                result.score["Lon hon 3"] = [];
            }
            result.score["Lon hon 3"].push(name);
        } else if (score < 4) {
            if (!result.score["Nho hon 4"]) {
                result.score["Nho hon 4"] = [];
            }
            result.score["Nho hon 4"].push(name);
        }
    }

    return result;
}

function xuLyDataVer3(data, result) {
    data.forEach(x => {
        const { sex, name, score, hobby } = x;
        if (result.sex[sex]) {
            result.sex[sex].push(name);
        } else {
            result.sex[sex] = [name];
        }

        if (!result.hobby[hobby]) {
            result.hobby[hobby] = []
        }
        result.hobby[hobby].push(name)

        if (score > 3) {
            if (!result.score["Lon hon 3"]) {
                result.score["Lon hon 3"] = [];
            }
            result.score["Lon hon 3"].push(name);
        } else if (score < 4) {
            if (!result.score["Nho hon 4"]) {
                result.score["Nho hon 4"] = [];
            }
            result.score["Nho hon 4"].push(name);
        }
    });

    return result;
}

const result = {
    sex: {},
    hobby: {},
    score: {},
}

// const data = xuLyData(classInfo, result);

// classInfo.forEach(x => {
//     const { sex, name, score, hobby } = x;
//     if (result.sex[sex]) {
//         result.sex[sex].push(name);
//     } else {
//         result.sex[sex] = [name];
//     }

//     if (!result.hobby[hobby]) {
//         result.hobby[hobby] = []
//     }
//     result.hobby[hobby].push(name)

//     if (score > 3) {
//         if (!result.score["Lon hon 3"]) {
//             result.score["Lon hon 3"] = [];
//         }
//         result.score["Lon hon 3"].push(name);
//     } else if (score < 4) {
//         if (!result.score["Nho hon 4"]) {
//             result.score["Nho hon 4"] = [];
//         }
//         result.score["Nho hon 4"].push(name);
//     }
// });

// const callBackFnc = (currentResult, currentValue) => {
//     const { sex, name, score, hobby } = currentValue;
//     if (currentResult.sex[sex]) {
//         currentResult.sex[sex].push(name);
//     } else {
//         currentResult.sex[sex] = [name];
//     }

//     if (!currentResult.hobby[hobby]) {
//         currentResult.hobby[hobby] = []
//     }
//     currentResult.hobby[hobby].push(name)

//     if (score > 3) {
//         if (!currentResult.score["Lon hon 3"]) {
//             currentResult.score["Lon hon 3"] = [];
//         }
//         currentResult.score["Lon hon 3"].push(name);
//     } else if (score < 4) {
//         if (!currentResult.score["Nho hon 4"]) {
//             currentResult.score["Nho hon 4"] = [];
//         }
//         currentResult.score["Nho hon 4"].push(name);
//     }
//     return currentResult
// }

// const data = classInfo.reduce(callBackFnc, result)

// const data = classInfo.reduce((currentResult, currentValue) => {
//     const { sex, name, score, hobby } = currentValue;
//     if (currentResult.sex[sex]) {
//         currentResult.sex[sex].push(name);
//     } else {
//         currentResult.sex[sex] = [name];
//     }
//     if (!currentResult.hobby[hobby]) {
//         currentResult.hobby[hobby] = []
//     }
//     currentResult.hobby[hobby].push(name)
//     if (score > 3) {
//         if (!currentResult.score["Lon hon 3"]) {
//             currentResult.score["Lon hon 3"] = [];
//         }
//         currentResult.score["Lon hon 3"].push(name);
//     } else if (score < 4) {
//         if (!currentResult.score["Nho hon 4"]) {
//             currentResult.score["Nho hon 4"] = [];
//         }
//         currentResult.score["Nho hon 4"].push(name);
//     }
//     return currentResult
// }, result)

Array.prototype.tuanReduce = function name(callBack, initValue) {
    let result = initValue;
    this.forEach(x => {
        result = callBack(result, x)
    })
    return result;
}

// let r;
// Array.prototype.tuanReduce = function (cb, v) {
//     return this.map((x) => r = cb(r ? r : v, x))[this.length - 1]
// }

const data = classInfo.tuanReduce((currentResult, currentValue) => {
    const { sex, name, score, hobby } = currentValue;
    if (currentResult.sex[sex]) {
        currentResult.sex[sex].push(name);
    } else {
        currentResult.sex[sex] = [name];
    }
    if (!currentResult.hobby[hobby]) {
        currentResult.hobby[hobby] = []
    }
    currentResult.hobby[hobby].push(name)
    if (score > 3) {
        if (!currentResult.score["Lon hon 3"]) {
            currentResult.score["Lon hon 3"] = [];
        }
        currentResult.score["Lon hon 3"].push(name);
    } else if (score < 4) {
        if (!currentResult.score["Nho hon 4"]) {
            currentResult.score["Nho hon 4"] = [];
        }
        currentResult.score["Nho hon 4"].push(name);
    }
    return currentResult
}, result)

console.log(data);