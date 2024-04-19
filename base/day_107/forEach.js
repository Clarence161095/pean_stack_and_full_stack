Array.prototype.myForEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i);
  }
};

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

list.myForEach((item, index) => {
  console.log(item, index);
});