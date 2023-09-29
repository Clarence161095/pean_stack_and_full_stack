class Nguoi {
  name;
  constructor(name) {
    this.name = name
  }
  getName = function () {
    return this.name
  }
}

function createNguoi(_name) {
  return {
    name: _name,
    getName: function () {
      return this.name
    }
  }
}

const tuan = new Nguoi('tuan')
console.log(tuan.getName());

const linh = new Nguoi('linh')
console.log(linh.getName());

const quang = createNguoi('quang');
console.log(quang.getName());

const quang2 = createNguoi('quang2');
console.log(quang2.getName());

const an = {
  name: 'an',
  getName: function () {
    return this.name
  }
}
console.log(an.getName());
