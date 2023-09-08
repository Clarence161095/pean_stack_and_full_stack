function twoSum(array, target) {
  const bienLuuKq = {}

  for (let i = 0; i < array.length; i++) {
    const giaTriMongMuon = target - array[i];

    const checkGiaTriMongMuonCoTrongBienLuuKqHayKo = bienLuuKq[giaTriMongMuon];

    if (checkGiaTriMongMuonCoTrongBienLuuKqHayKo) {
      return [giaTriMongMuon, array[i]]
    } else {
      const keyChinhLaGiaTriHienTai = array[i]
      bienLuuKq[keyChinhLaGiaTriHienTai] = true
    }
  }
  return []
}

console.log(twoSum([4, 5, 6, 13, 16], 11));