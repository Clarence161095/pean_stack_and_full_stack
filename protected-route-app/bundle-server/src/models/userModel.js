const { dataPath } = require("../config/database");
const { readData, writeData } = require("../utils/fileHelper");

class UserModel {
  static getAll() {
    const data = readData(dataPath);
    return data.users;
  }

  static getById(id) {
    const data = readData(dataPath);
    return data.users.find((user) => user.id === id);
  }

  static create(userData) {
    const data = readData(dataPath);
    const newUser = {
      id: Date.now().toString(),
      ...userData,
    };
    data.users.push(newUser);
    writeData(dataPath, data);
    return newUser;
  }

  static update(id, userData) {
    const data = readData(dataPath);
    const userIndex = data.users.findIndex((user) => user.id === id);
    if (userIndex === -1) return null;

    data.users[userIndex] = {
      ...data.users[userIndex],
      ...userData,
    };
    writeData(dataPath, data);
    return data.users[userIndex];
  }

  static delete(id) {
    const data = readData(dataPath);
    const userIndex = data.users.findIndex((user) => user.id === id);
    if (userIndex === -1) return false;

    data.users.splice(userIndex, 1);
    writeData(dataPath, data);
    return true;
  }
}

module.exports = UserModel;
