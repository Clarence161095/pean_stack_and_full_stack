// server.js
const express = require("express");
const app = express();

// API Key mẫu - trong thực tế nên lưu trong env
const API_KEY = "rwuy6434tgdgjhtiojiosi838tjue3";
const xApiKeyMap = new Map();

// Middleware kiểm tra API Key
const authenticateKey = (req, res, next) => {
  const apiKey = req.header("x-api-key");

  if (!apiKey) {
    return res.status(401).json({ error: "API Key không được cung cấp" });
  }

  // if (!xApiKeyMap.has(apiKey)) {
  if (apiKey !== API_KEY) {
    return res.status(403).json({ error: "API Key không hợp lệ" });
  }

  next();
};

// login suscess
app.post("/api/login", (req, res) => {
  // Mock login success
  // ...
  // Create api key
  const apiKey = Math.random().toString(36).substring(7);
  xApiKeyMap.set(apiKey, true);
  console.log(xApiKeyMap);

  res.setHeader("x-api-key", apiKey);
  res.json({ apiKey });
});

// Áp dụng middleware cho các route cần bảo vệ
app.get("/api/protected", authenticateKey, (req, res) => {
  res.json({ message: "Dữ liệu được bảo vệ" });
});

// Route công khai
app.get("/api/public", (req, res) => {
  res.json({ message: "Dữ liệu công khai" });
});

app.listen(3000, () => {
  console.log("Server đang chạy tại cổng 3000");
});
