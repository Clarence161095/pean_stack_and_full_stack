1. Cập nhật file docker-compose.yml

```yaml
version: '3'
services:
  jhipster:
    image: jhipster/jhipster
    container_name: jhipster
    volumes:
      - ./app:/home/jhipster/app
    ports:
      - "9000:9000"
    tty: true
    depends_on:
      - db
    environment:
      - SPRING_DATASOURCE_URL=jdbc:postgresql://db:5432/jhipster
      - SPRING_DATASOURCE_USERNAME=jhipster
      - SPRING_DATASOURCE_PASSWORD=jhipster
      
  db:
    image: postgres:14.5
    container_name: db
    environment:
      - POSTGRES_DB=jhipster
      - POSTGRES_USER=jhipster
      - POSTGRES_PASSWORD=jhipster
    ports:
      - "5432:5432"
```

2. Chạy lại lệnh docker-compose để tạo và khởi động container PostgreSQL:

```bash
docker-compose up -d
```

3. Truy cập vào container jhipster và chạy lại ứng dụng:

```bash
docker-compose exec jhipster bash
./mvnw
```

Với cấu hình trên, container jhipster sẽ đợi cho container db khởi động trước, sau đó kết nối tới PostgreSQL thông qua URL jdbc:postgresql://db:5432/jhipster và sử dụng username/password là jhipster/jhipster.
