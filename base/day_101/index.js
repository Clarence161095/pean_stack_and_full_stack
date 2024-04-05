console.time('TongThoiGianXuLy: ')

function layGiaTriTuDB (name) {
  console.time('ThoiGianXuLy: ' + name)
  const random = 1148000000 * Math.random() * Math.random() * 10
  const data = { id: random, name }
  for (let i = 0; i < random; i++) {
    random * random * random * random
  }
  console.log(data)
  console.timeEnd('ThoiGianXuLy: ' + name)
  return data
}

console.log('Bat da xu ly:' + 'Nguyen Van A');
const data = layGiaTriTuDB('Nguyen Van A')
console.log('Da xu ly xong:' + 'Nguyen Van A');
console.log('-----------------------------------');

console.log('Bat da xu ly:' + 'Tran Van B');
const data1 = layGiaTriTuDB('Tran Van B')
console.log('Da xu ly xong:' + 'Tran Van B');
console.log('-----------------------------------');

console.log('Bat da xu ly:' + 'Le Thi C');
const data2 = layGiaTriTuDB('Le Thi C')
console.log('Da xu ly xong:' + 'Le Thi C');

console.timeEnd('TongThoiGianXuLy: ')

// ko bat dong bo:
// - 2 2 2 => 2 + (2+2) + (2+2+2) = 12

// - 1 2 3 => 1 + (1+2) + (1+2+3) = 10 (6)
// - 3 2 1 => 3 + (3+2) + (3+2+1) = 14 (6)

// - 11 11 11 => 11 + (11+11) + (11+11+11) = 66 (33) => 99

// - 1 2 30 => 1 + (1+2) + (1+2+30) = 37 (33) => 70
// - 30 2 1 => 30 + (30+2) + (30+2+1) = 95 (33) => 128

// bat dong bo:
// - 11 11 11 => 11 + (11+11) + (11+11+11) = 66 (33) => 99

// - 1 2 30 => 1 + (1+2) + (1+2+30) = 37 (33) => 70