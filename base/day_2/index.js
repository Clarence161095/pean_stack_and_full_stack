const { v4: uuidv4 } = require('uuid');
var genName = require('random-lorem');

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

function main() {
  // const users = JSON.parse(JSON.stringify(store.users));
  const users = store.users;
  const newUserWithID = Object.keys(users).map(index => {
    return { ...addUUID(users, index), ...addName(users, index) }
  })
  console.log('store', store)
  console.log('newUserWithID: ', newUserWithID)
}

function addUUID(users, index) {
  users[index].id = uuidv4();
  return users[index]
}

function addName(users, index) {
  users[index].name = genName();
  return users[index];
}
main()
