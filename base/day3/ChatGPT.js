// Import thư viện uuid để tạo các UUID ngẫu nhiên và thư viện random-lorem để tạo tên ngẫu nhiên.
const { v4: uuidv4 } = require('uuid');
var genName = require('random-lorem');

// Định nghĩa một đối tượng "store" chứa danh sách người dùng với các thuộc tính "key".
const store = {
  users: [
    {
      key: 'Tuan123'
    },
    {
      key: 'Linh'
    },
  ]
}

// Hàm chính của chương trình.
function main() {
  // Sao chép danh sách người dùng từ "store" vào biến "users".
  const users = store.users;

  // Sử dụng phương thức "map" để tạo một mảng mới chứa thông tin người dùng mới với UUID và tên ngẫu nhiên.
  const newUserWithID = Object.keys(users).map(index => {
    // Gọi hàm "addUUID" để thêm thuộc tính "id" cho người dùng tại vị trí "index".
    // Sau đó gọi hàm "addName" để thêm thuộc tính "name" cho người dùng tương ứng.
    return { ...addUUID(users, index), ...addName(users, index) }
  })

  // In ra màn hình thông tin trong "store" và danh sách người dùng mới.
  console.log('store', store)

  // TODO: Lý do vì sao newUserWithID và store lại có giá trị giống nhau trong khi nó là một biến khác
  // hãy giải thích giúp tôi cụ thể và nếu như có kiến thức nào liên quan thì hãy giải thích nó.
  console.log('newUserWithID: ', newUserWithID)
}

// Hàm thêm thuộc tính "id" cho người dùng tại vị trí "index".
function addUUID(users, index) {
  // Sử dụng thư viện "uuid" để tạo một UUID mới.
  users[index].id = uuidv4();
  return users[index]
}

// Hàm thêm thuộc tính "name" cho người dùng tại vị trí "index".
function addName(users, index) {
  // Sử dụng thư viện "random-lorem" để tạo tên ngẫu nhiên.
  users[index].name = genName();
  return users[index];
}

// Gọi hàm chính để thực thi chương trình.
main()
