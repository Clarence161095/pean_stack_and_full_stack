class MyPromise {
  name
  ham
  constructor(_name, _ham) {
    this.name = _name
    this.hame = _ham
  }
}

function newMyPromise(_name, _ham1) {
  _ham1()
  _ham1()
  return {
    name: _name
  }
}

const myPromise = new MyPromise("tuan", () => { });
const myPromiseFn = newMyPromise("linh", () => {
  console.log("hello");
});
console.log(myPromise);
console.log(myPromiseFn);