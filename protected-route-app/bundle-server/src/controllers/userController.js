const UserModel = require("../models/userModel");

class UserController {
  static async getAllUsers(req, res) {
    try {
      const users = UserModel.getAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Không thể đọc dữ liệu" });
    }
  }

  static async getUserById(req, res) {
    try {
      const user = UserModel.getById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "Không tìm thấy user" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Không thể đọc dữ liệu" });
    }
  }

  static async createUser(req, res) {
    try {
      const newUser = UserModel.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: "Không thể tạo user" });
    }
  }

  static async updateUser(req, res) {
    try {
      const updatedUser = UserModel.update(req.params.id, req.body);
      if (!updatedUser) {
        return res.status(404).json({ error: "Không tìm thấy user" });
      }
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: "Không thể cập nhật user" });
    }
  }

  static async deleteUser(req, res) {
    try {
      const success = UserModel.delete(req.params.id);
      if (!success) {
        return res.status(404).json({ error: "Không tìm thấy user" });
      }
      res.json({ message: "Đã xóa user thành công" });
    } catch (error) {
      res.status(500).json({ error: "Không thể xóa user" });
    }
  }
}

module.exports = UserController;
