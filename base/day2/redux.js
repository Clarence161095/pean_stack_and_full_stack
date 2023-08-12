// reduxEverything.js

// Import các hàm và thư viện cần thiết từ Redux và redux-thunk
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Khởi tạo giá trị ban đầu cho state của ứng dụng
const initialState = {
  // Các thuộc tính ban đầu của state ở đây
};

// Định nghĩa reducer chính để quản lý state của ứng dụng
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    // Các trường hợp xử lý action ở đây (có thể có nhiều hơn)
    default:
      return state;
  }
};

// Định nghĩa các loại action mà ứng dụng sẽ sử dụng
const ACTION_TYPE_1 = 'ACTION_TYPE_1';
const ACTION_TYPE_2 = 'ACTION_TYPE_2';

// Định nghĩa hàm tạo action có tên actionCreator1, nhận vào một đối số là payload
const actionCreator1 = (payload) => ({
  type: ACTION_TYPE_1,
  payload,
});

// Định nghĩa hàm tạo action có tên actionCreator2, nhận vào một đối số là payload
const actionCreator2 = (payload) => ({
  type: ACTION_TYPE_2,
  payload,
});

// Định nghĩa hàm selector để trích xuất dữ liệu từ state
const selectData = (state) => state.data; // Ví dụ selector

// Định nghĩa hàm fetchData sử dụng redux-thunk
const fetchData = () => {
  return (dispatch) => {
    // Thực hiện lấy dữ liệu bất đồng bộ và sau đó gửi action thông qua dispatch
    dispatch(actionCreator1(data)); // 'data' ở đây là dữ liệu lấy được
  };
};

// Tạo rootReducer bằng cách kết hợp các reducer lại với nhau
const rootReducer = combineReducers({
  main: mainReducer,
});

// Tạo store của ứng dụng, sử dụng applyMiddleware để kích hoạt middleware (redux-thunk)
const store = createStore(rootReducer, applyMiddleware(thunk));

// Tạo một đối tượng ReduxFacade để làm giao diện thân thiện hơn cho việc sử dụng Redux trong ứng dụng
const ReduxFacade = {
  actions: {
    actionCreator1,
    actionCreator2,
  },
  selectors: {
    selectData,
  },
  effects: {
    fetchData,
  },
  store,
};

// Xuất ReduxFacade để có thể sử dụng trong các phần khác của ứng dụng
export default ReduxFacade;
