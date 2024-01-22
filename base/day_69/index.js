// const data$ = {
//   subscribes: [],
//   subscribe: function (fn) {
//     this.subscribes.push(fn)
//     return fn
//   },
//   unsubscribe: function (fn) {
//     this.subscribes = this.subscribes.filter(subscribe => subscribe !== fn)
//   },
//   notify: function (data) {
//     this.subscribes.forEach(subscribe => subscribe(data))
//   }
// }

// const list1 = data$.subscribe((data) => {
//   console.log('list 1', data)
// })

// const list2 = data$.subscribe((data) => {
//   console.log('list 2', data)
// })

// setTimeout(() => {
//   function getData() {
//     const data = [1, 2, 3, 4, 5]
//     data$.notify(data)
//   }
//   getData()
// }, 3000);


const nhaCungCapBao = {
  danhSachNguoiDangKy: [],
  dangKy: function (hamDeLienLacLai) {
    this.danhSachNguoiDangKy.push(hamDeLienLacLai)
    return hamDeLienLacLai
  },
  huyDangKy: function (hamDeLienLacLai) {
    this.danhSachNguoiDangKy = this.danhSachNguoiDangKy.filter(hamDangKy => hamDangKy !== hamDeLienLacLai)
  },
  phatBao: function (noiDungBao) {
    this.danhSachNguoiDangKy.forEach(hamDangKy => hamDangKy(noiDungBao))
  }
}

const tuan = nhaCungCapBao.dangKy((noiDungBao) => {
  console.log('Tuan nhan duoc bao', noiDungBao)
})

const linh = nhaCungCapBao.dangKy((noiDungBao) => {
  console.log('Linh nhan duoc bao', noiDungBao)
})

nhaCungCapBao.phatBao('Noi dung to bao so 1 cua nha cung cap bao');

nhaCungCapBao.huyDangKy(tuan)

nhaCungCapBao.phatBao('Noi dung to bao so 2 cua nha cung cap bao');
