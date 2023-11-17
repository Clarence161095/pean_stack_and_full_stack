const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('mockDb.json');

// Sử dụng middleware CORS để cho phép truy cập từ các nguồn khác
server.use(cors());

// Sử dụng tùy chọn --port để cài đặt cổng
const port = process.env.PORT || 3001;

server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
