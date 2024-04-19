Array.prototype.mySort = function (dieuKienSapXep) {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (dieuKienSapXep(this[i], this[j])) {
        let temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
    }
  }
  return this;
};

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

list.mySort((a, b) => {
  return a % 2 === 0 && b % 2 !== 0;
});
console.log(list);