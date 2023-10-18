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



function xuLyData(data) {
    const result = {};
    const result2 = {};
    const result3 = {};
    for (let x of data) {
        const { sex, name, score, hobby } = x;
        if (result[sex]) {
            result[sex].push(name);
        } else {
            result[sex] = [name];
        }

        if (!result2[hobby]) {
            result2[hobby] = []
        }
        result2[hobby].push(name)

        if (score > 3) {
            if (!result3["Lon hon 3"]) {
                result3["Lon hon 3"] = [];
            }
            result3["Lon hon 3"].push(name);
        } else if (score < 4) {
            if (!result3["Nho hon 4"]) {
                result3["Nho hon 4"] = [];
            }
            result3["Nho hon 4"].push(name);
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
        },
    }
}

function xuLyDataBase(params) {
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
const data = xuLyData(classInfo);
console.log(data);