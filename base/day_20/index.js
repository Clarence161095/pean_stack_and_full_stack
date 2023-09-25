const nguoi = {
  name: ''
}

const prototype_object = {
  toString(string) {
    return `done ${string}`
  },
  //...
  nguoi: nguoi,
}

const hocSinh = {
  lop: '',
  ...prototype_object.nguoi
}

const prototype_array = {
  length: 0,
  prototypeObject: prototype_object
}

console.log(prototype_array.prototypeObject.toString('123'));
