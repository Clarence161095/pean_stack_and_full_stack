# Ubuntu 22.04 x64

## Cài đặt cơ bản

```bash
sudo apt-get update
sudo apt-get upgrade
```

## Cài đặt git

```bash
sudo apt-get install git
```

## Cài đặt Docker

```bash
sudo apt-get install docker.io
docker --version
# Docker véion 24.05.0, build 24.05.0-0ubuntu1 22.04.1
```

### Cài đặt Docker Compose

```bash
sudo apt-get install docker-compose
docker-compose --version
# docker-compose version 1.29.2, build unknown
```

### Test Hello World

```bash
docker run hello-world
# stop container
docker ps -a
docker container stop <container_id>
```

## Mở port 80 trên máy ubuntu

```bash
sudo ufw allow 80
```

### Kiểm tra port đang được mở

```bash
sudo ufw status
```
