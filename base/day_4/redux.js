const initialState = {
  id: '6886',
  name: 'Tuan',
  amount: 0
}

const DEPOSIT_TYPE = 'DEPOSIT';
const WITHDRAW_TYPE = 'WITHDRAW';

const store = {
  state: accountReducer(initialState)
}

function accountReducer(state, action) {
  switch (action?.type) {
    case DEPOSIT_TYPE:
      return {
        ...state,
        amount: state.amount + action.payload,
        errorMessage: ''
      }
    case WITHDRAW_TYPE:
      if (state.amount >= action.payload) {
        return {
          ...state,
          amount: state.amount - action.payload,
          errorMessage: ''
        }
      } else {
        return {
          ...state,
          errorMessage: 'Không đủ tiền để rút. Sorry'
        }
      }
    default:
      return state
  }
}

function dispatch(action) {
  store.state = accountReducer(store.state, action)
}

function select(callback) {
  return callback(store.state);
}

function depositEventHandler(amount) {
  return {
    type: DEPOSIT_TYPE,
    payload: amount
  }
}

function withdrawEventHandler(amount) {
  return {
    type: WITHDRAW_TYPE,
    payload: amount
  }
}

// ----------------- UI -----------------
function deposit(_amount) {
  console.log('I want deposit: ', _amount)
  dispatch(depositEventHandler(_amount))
  const errorMessage = select(state => state.errorMessage)
  const amount = select(state => state.amount)
  if (!errorMessage) {
    console.log('Nạp tiền thành công. Số tiền hiện tại là: ', amount);
  } else {
    console.log(errorMessage);
  }
}

function withdraw(_amount) {
  console.log('I want withdraw: ', _amount)
  dispatch(withdrawEventHandler(_amount))
  const errorMessage = select(state => state.errorMessage)
  const amount = select(state => state.amount)
  if (!errorMessage) {
    console.log('Rút tiền thành công. Số tiền hiện tại là: ', amount);
  } else {
    console.log(errorMessage);
  }
}

(function clickButtonDepositWith100Dollar() {
  deposit(100);
})();

(function clickButtonDepositWith100Dollar() {
  deposit(100);
})();

(function clickButtonWithdrawWith150Dollar() {
  withdraw(150);
})();

(function clickButtonWithdrawWith150Dollar() {
  withdraw(150);
})();
