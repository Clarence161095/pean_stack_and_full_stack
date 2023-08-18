const InitState = {
    id: 2310,
    name: "Rin",
    book_amount: 0
  }
  
  const MUASACH_TYPE = "MUASACH";
  const BANSACH_TYPE = "BANSACH";
  
  const store = {
    books: BookReducer(InitState)
  }
  
  function dispatch(action){
    store.books = BookReducer(store.books, action);
  }
  
  function BookReducer(linh, action){
    switch(action?.type){
        case MUASACH_TYPE : 
            return {
                ...linh,
                book_amount: linh.book_amount + action.payload,
                MessengerError: ""
            }
        case BANSACH_TYPE:
            if(linh.book_amount >= action.payload){
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
        default : 
            return linh;
    }
  }
  
  function select(callback){
    return callback(store.books);
  }
  
  function MuaSachEventHandle(soluong){
    return {
        type: MUASACH_TYPE,
        payload: soluong
    }
  }
  
  function BanSachEventHandle(soluong){
    return {
        type: BANSACH_TYPE,
        payload: soluong
    }
  }
  
  function muasach(_amount){
    console.log("Linh đã thêm vào: ", _amount);
    dispatch(MuaSachEventHandle(_amount));
    const demo1 = select((linh) => linh.MessengerError);
    const demo2 = select((linh) => linh.book_amount);
    if(!demo1){
        console.log("Linh hiện đang có: ", demo2 + " quyển");
    }
    else{
    console.log(demo1);
    }
  }
  
  function bansach(_amount){
    console.log("Linh đã bán đi: ", _amount);
    dispatch(BanSachEventHandle(_amount));
    const demo1 = select((linh) => linh.MessengerError);
    const demo2 = select((linh) => linh.book_amount);
    if(!demo1){
        console.log("Linh hiện đang có: ", demo2 + " quyển");
    }
    else{
    console.log(demo1);
    }
  }
  
  (function clickToBuy(){
    muasach(100);
  })();
  (function clickToBuy(){
    muasach(500);
  })();
  (function clickToSell(){
    bansach(400);
  })();
  (function clickToSell(){
    bansach(50);
  })();
   (function clickToSell(){
    bansach(50);
  })();
  (function clickToBuy(){
    muasach(500);
  })();
//   (function clickToSell(){
//     bansach(550);
//   })();
  
  console.log(store);