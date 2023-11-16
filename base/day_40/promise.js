// let filePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (new Date().getTime() % 2) {
//       resolve("Đã tải file thành công.")
//     } else {
//       reject("Tải file thất bại!!!")
//     }
//   }, 1000);
// })

// console.log("Trạng thái ban đầu của promise: ", filePromise);

// filePromise.then((result) => {
//   console.log(result);
// }).catch((result) => {
//   console.log(result);
// })


// ----------------------

function newMyPromise(callBackYou) {
  const myResult = {}
  myResult.resolve = function (ketQua) {
    myResult.thenCallBack(ketQua)
  }
  myResult.reject = (thongBaoLoi) => {
    myResult.thenRejectCb(thongBaoLoi)
  }
  myResult.catch = (thenRejectCb) => {
    myResult.thenRejectCb = thenRejectCb
    return myResult
  }
  myResult.then = (_thenCallBack) => {
    myResult.thenCallBack = _thenCallBack
    return myResult
  }
  callBackYou(myResult.resolve, myResult.reject)
  return myResult
}

const goiLaiToi = function (thanhCong, thatBai) {
  setTimeout(() => {
    if (new Date().getTime() % 2) {
      thanhCong(["sv1", "sv2", "sv3"])
      thanhCong(["sv4", "sv5", "sv6"])
    } else {
      thatBai("Tải file thất bại!!!")
    }
  }, 1000);
}
let myFilePromise = newMyPromise(goiLaiToi)

console.log("Trạng thái ban đầu của myPromise: ", myFilePromise);

myFilePromise.then((result) => {
  console.log("Đã tải file thành công.", result);
}).catch((error) => {
  console.log(error);
})
