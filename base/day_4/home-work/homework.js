const InitState = {
  id: 2310,
  name: "Rin",
  book_amount: 0
}

const MUASACH_TYPE = "MUA SACH";
const BANSACH_TYPE = "BAN SACH";

const store = {
  books: BookReducer({}, {})
}

function dispatch(action) {
  // call API with this action 
  // action form response => us it
  store.books = BookReducer(store.books, action);
}

// const ketQua = BookReducer({
//   id: 1,
//   name: "Rin",
//   book_amount: 0
// }, {
//   type: BANSACH_TYPE,
//   payload: 100
// })

// const ketQua2 = BookReducer({
//   id: 1,
//   name: "Rin",
//   book_amount: 100
// }, {
//   type: BANSACH_TYPE,
//   payload: 200
// })

// pure functions
function BookReducer(linh, action) {
  switch (action?.type) {
    case MUASACH_TYPE:
      return {
        ...linh,
        book_amount: linh.book_amount + action.payload,
        MessengerError: ""
      }
    case BANSACH_TYPE:
      if (linh.book_amount >= action.payload) {
        return {
          ...linh,
          book_amount: linh.book_amount - action.payload,
          MessengerError: ""
        }
      }
      else {
        return {
          ...linh,
          MessengerError: "Lượng bán vượt quá hiện có - Fail"
        }
      }
    default:
      return linh;
  }
}

function select(callback) {
  return callback(store.books);
}

function MuaSachEventHandle(soluong) {
  return {
    type: MUASACH_TYPE,
    payload: soluong
  }
}

function BanSachEventHandle(soluong) {
  return {
    type: BANSACH_TYPE,
    payload: soluong
  }
}

function muasach(_amount) {
  console.log("Linh đã thêm vào: ", _amount);
  dispatch(MuaSachEventHandle(_amount));
  const demo1 = select((linh) => linh.MessengerError);
  const demo2 = select((linh) => linh.book_amount);
  if (!demo1) {
    console.log("Linh hiện đang có: ", demo2 + " quyển");
  }
  else {
    console.log(demo1);
  }
}

function bansach(_amount) {
  console.log("Linh đã bán đi: ", _amount);
  dispatch(BanSachEventHandle(_amount));
  const demo1 = select((linh) => linh.MessengerError);
  const demo2 = select((linh) => linh.book_amount);
  if (!demo1) {
    console.log("Linh hiện đang có: ", demo2 + " quyển");
  }
  else {
    console.log(demo1);
  }
}

(function clickToBuy() {
  muasach(100);
})();
(function clickToBuy() {
  muasach(500);
})();
(function clickToSell() {
  bansach(400);
})();
(function clickToSell() {
  bansach(50);
})();
(function clickToSell() {
  bansach(50);
})();
(function clickToBuy() {
  muasach(500);
})();
//   (function clickToSell(){
//     bansach(550);
//   })();

console.log(store);

function normalFunction(x, y) {
  const tenant = { tenantId: 1231241342 }
  const sumXYZ2 = (x, y) => (z) => x + y + z + temp.tenantId;
}

function sum(a, b) {
  return a + b
}

sum(5, 5)
sum(5, 5)