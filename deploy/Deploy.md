# Ubuntu 24.04 LTS x64 

## Cài đặt Docker

```bash
sudo apt-get update
sudo apt-get install docker.io
```

### Cài đặt Docker Compose

```bash
sudo apt-get install docker-compose
```

### Kiểm tra phiên bản Docker

```bash
docker --version
```

```bash
docker-compose --version
```

### Cấp quyền cho Docker

```bash
sudo usermod -aG docker $USER
```

### Khởi động Docker

```bash
sudo systemctl start docker
```

### Tự động khởi động Docker

```bash
sudo systemctl enable docker
```

### Kiểm tra Docker

```bash
docker run hello-world
```

## Run app Redmine

```bash
docker run -d --name mysql-redmine \
  -e MYSQL_ROOT_PASSWORD=example \
  -e MYSQL_DATABASE=redmine \
  -v ./mysql-data:/var/lib/mysql \
  mysql:8.0
```

```bash
docker run -d --name redmine \
  --link mysql-redmine:db \
  -p 80:3000 \
  -e REDMINE_DB_MYSQL=db \
  -e REDMINE_DB_PASSWORD=example \
  -e REDMINE_SECRET_KEY_BASE=linh_supersecretkey1234 \
  redmine
```

## Cài đặt Git

```bash
sudo apt-get install git
```

### Kiểm tra Git

```bash
git --version
```

## Kiểm tra hoạt động của máy xem chạy hết bao nhiêu RAM và CPU

```bash
free -h
```

## Mở port 80 trên máy alpine

```bash
sudo iptables --version
```

<!-- Nếu chưa có thì cài: sudo apt install iptables -->

```bash
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
```

<!-- ĐÓng port bằng flag D: sudo iptables -D INPUT -p tcp --dport 443 -j ACCEPT -->


<!-- Check port nào đang được mở -->
```bash
sudo iptables -L -n

sudo iptables -L -n | grep ":80"
```

## Cài đặt nano

```bash
sudo apt-get install nano
```
