const bienLuuTru = {}

bienLuuTru.Tên = 'Tuấn'

bienLuuTru['tuổi'] = 15

const keyFulName = 'Họ và tên'

function getKey() {
  return 'Ngày tháng năm sinh'
}

bienLuuTru[keyFulName] = 'NGUYẾN ANH TUẤN'

bienLuuTru[getKey()] = '16/10/1995'

console.log(bienLuuTru);
