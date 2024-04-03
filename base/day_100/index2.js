console.time('TongThoiGianXuLy: ')

let checkIsDone = 0

function layGiaTriTuDB (name, callBack) {
  setTimeout(() => {
    console.time('ThoiGianXuLy: ' + name)
    const random = 2148000000 * Math.random() * Math.random() * 10
    for (let i = 0; i < random; i++) {
      random * random * random * random
    }
    console.log({ id: random, name })
    callBack()
    console.timeEnd('ThoiGianXuLy: ' + name)
  }, 1000 * Math.random())
}

console.log('Bat da xu ly:' + 'Nguyen Van A');
layGiaTriTuDB('Nguyen Van A', () => {
  if (++checkIsDone === 3) {
    console.timeEnd('TongThoiGianXuLy: ')
  }
})
console.log('Da xu ly xong:' + 'Nguyen Van A');
console.log('-----------------------------------');

console.log('Bat da xu ly:' + 'Tran Van B');
layGiaTriTuDB('Tran Van B', () => {
  if (++checkIsDone === 3) {
    console.timeEnd('TongThoiGianXuLy: ')
  }
})
console.log('Da xu ly xong:' + 'Tran Van B');
console.log('-----------------------------------');

console.log('Bat da xu ly:' + 'Le Thi C');
layGiaTriTuDB('Le Thi C', () => {
  if (++checkIsDone === 3) {
    console.timeEnd('TongThoiGianXuLy: ')
  }
})
console.log('Da xu ly xong:' + 'Le Thi C');
