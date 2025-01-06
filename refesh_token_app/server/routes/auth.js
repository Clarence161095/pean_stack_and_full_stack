const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ message: 'No authorization header' });
  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No bearer token' });
  jwt.verify(token, 'ACCESS_SECRET', (err, user) => {
    if (err) return res.status(401).json({ message: 'Invalid access token' });
    req.user = user;
    next();
  });
}

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  const db = req.app.locals.db;
  db.run("INSERT INTO users(username,password) VALUES(?,?)", [username, password], (err) => {
    if (err) return res.status(400).json({ message: "User already exists" });
    res.json({ message: "Registration successful" });
  });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const db = req.app.locals.db;
  db.get("SELECT * FROM users WHERE username=? AND password=?", [username, password], (err, user) => {
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const accessToken = jwt.sign({ username }, "ACCESS_SECRET", { expiresIn: "15m" });
    const refreshToken = jwt.sign({ username }, "REFRESH_SECRET");
    const device = req.headers["user-agent"] || "unknown";
    const ip = req.ip;
    db.run("INSERT INTO tokens(token, ip, device) VALUES(?,?,?)", [refreshToken, ip, device]);

    res.json({ accessToken, refreshToken });
  });
});

router.post("/refresh", (req, res) => {
  const { token } = req.body;
  const db = req.app.locals.db;
  if (!token) return res.status(403).json({ message: "No token provided" });

  db.get("SELECT token, ip, device FROM tokens WHERE token=?", [token], (err, row) => {
    if (!row) return res.status(403).json({ message: "Invalid refresh token" });

    if (row.ip !== req.ip) return res.status(403).json({ message: "IP mismatch" });
    if (row.device !== req.headers["user-agent"]) return res.status(403).json({ message: "Device mismatch" });

    jwt.verify(token, "REFRESH_SECRET", (err, user) => {
      if (err) return res.status(403).json({ message: "Token verification failed" });
      const newAccessToken = jwt.sign({ username: user.username }, "ACCESS_SECRET", { expiresIn: "15m" });
      res.json({ accessToken: newAccessToken });
    });
  });
});

router.get('/me', authenticate, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
