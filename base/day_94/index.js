// Phụ thuộc là gì?

const metaData = {
  date: null,
  getDate: function () {
    if (this.date) {
      return this.date;
    } else {
      return new Date();
    }
  },
}

function getFullInfo(name) {
  function getInfo(age, date) {
    return 'Hello: ' + name + ' - ' + age + ' - ' + date.getTime();
  }

  return getInfo;
}

const getFullInfo1 = getFullInfo("Linh");
const getFullInfo2 = getFullInfo("Tuan");

function User() {
  const date = metaData.getDate();
  console.log(getFullInfo1(26, date));
  console.log(getFullInfo2(29, date));
}

function Admin() {
  const date = metaData.getDate();
  console.log(getFullInfo1(26, date));
  console.log(getFullInfo2(29, date));
}

// function getName() {
//   console.log('Name :>> ');
// }

// getName.prototype.name = 'Linh';

// getName();

// console.log(getName.prototype.name);

// User();

// @Injectable()
// class AbcService {
//   constructor() {}

//   getDataFromDB() {
//     return 'Mock';
//   }
// }

// class User1 {
//   constructor() {
//     this.abcService = new AbcService();
//   }
// }

// class Admin1 {
//   constructor(private abcService: AbcService) {}
// }
