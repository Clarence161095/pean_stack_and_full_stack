## Mở port 3000 trên EC2

1. Đăng nhập vào AWS Console và truy cập EC2 Dashboard.

2. Tạo hoặc chọn một EC2 instance của bạn và nhấp vào tab "Security".

3. Tìm Security Group đang được gán cho instance và nhấp vào ID của Security Group đó.

4. Trong tab "Inbound rules", nhấp "Edit inbound rules".

5. Nhấp "Add rule" và cấu hình như sau:

   - Type: Custom TCP
   - Port range: 3000
   - Source: 0.0.0.0/0 (cho phép truy cập từ mọi nơi) hoặc IP cụ thể nếu muốn hạn chế
   - Description: JSON Server port (tùy chọn)

6. Nhấp "Save rules" để lưu thay đổi.

## Cài Nodejs và Json-server trên EC2

```bash
sudo yum update -y

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install --lts
node -v
npm -v

npm install -g json-server

yum install git -y

git clone https://github.com/Clarence161095/test-json-server.git
cd test-json-server

json-server mock.json --port 3000 --host 0.0.0.0
```

JSON Server sẽ chạy và lắng nghe trên port 3000. Bạn có thể truy cập API bằng địa chỉ Public IPv4 của EC2 instance, ví dụ:

http://<EC2-Public-IP>:3000/users
