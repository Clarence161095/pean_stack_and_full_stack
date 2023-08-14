class Obj {
  name
  constructor() { }
}

const obj = {
  name: 'tuan',
  getName: function (name) {
    console.log('this.name', this.name + name)
  }
}

function functionFC(...args) {
  this.getName(...args)
}

const fnc = function () {
  obj.getName()
}

const anonymousFnc = () => { }

// obj.getName()
functionFC.bind(obj)('123')
functionFC.call(obj, '123', 'tuan', 'linh')
functionFC.apply(obj, ['123', '234'])

function sum(a, b) {
  return a + b;
}