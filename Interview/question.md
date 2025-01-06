# Question

## 1. Giới thiệu bản thân?

- Cơ bán về bản thân: Tên, Tuổi, Nơi ở hiện tại, quê quán, tốt nghiệp trường nào, tốt nghiệp chuyên ngành gì.
- Kinh nghiệm làm việc: Tôi có 4 năm exp trong ngành phát triển phần mềm. Công việc chính là phát triển ứng dựng web.
- Trong đó có khoảng 2 năm kinh nghiệm làm việc trực tiếp trong dự án với khách hàng Nhật tại Nhật bản.

## 2. Em đang làm gì ở dự án hiện tại?

- Hiện tại em làm full stack developer tại công ty Casio. Và em là nhân nhân viện haken và là nhân viên của công ty PHR.
- Dự án hiện tại là dự án quản lý Nhân sự được phát triển bới Công ty Casio và là phần mềm B2B. Dựn án hiện tại team ở nhật có 10 người offshore của FPT có 30 người.
- Công việc em là thực hiện các yêu cầu từ khách hàng, phân tích yêu cầu, coding, test, deploy và hỗ trợ khách hàng các vấn đề về kỹ thuật nếu có.
- Hệ thống này khá lớn có khá nhiều chức năng như: Quản lý nhân viên, quản lý công ty, phân quyền người dùng, báo cáo tình trạng nhân viên...
- Em tham gia dự án này được gần 2 năm rồi. Nhiệm vụ chính của em là code phần front-end bằng reactjs và back-end bằng nodejs express. Đặc biệt e là người chịu trách nhiệm chính việc triển khai automation test bằng Playwright.
- Trong thời gian này thì em làm việc với khách hàng nhật nên trình độ tiếng tiếng nhật của em đã được cải thiện rất nhiều và em đạt N2 tiếng nhật 7/2024.

### Bonus

- Dự án này là microservice được deploy lên aws. Nó có khoảng 7 service. Có những phần chủ đạo là: front-end bằng react, bạck-end bằng nodejs, chạy batch là bằng nodejs lambda function.
- Back-end em làm gì ở backend: Em code các Rest API để cung cấp dữ liệu cho front-end. Các API này được viết bằng nodejs express. Các API này sẽ gọi các service khác để lấy dữ liệu và trả về cho front-end.
- Front-end em làm gì ở front-end: Em code các component để hiển thị dữ liệu lên và tương tác với người dùng.

### 2.1 Thế có sử dụng Cloud không ví dụ aws, azure, google cloud không?

Có sử dụng, nhưng e đa phần chỉ sử dụng các dịch vụ như Cloud Watch để debug log, codecommit để quản lý source version.
Còn một số dịch vụ khác như EC2 (Máy tính Linux), S3 (Google Driver), RDS (Postgres) thì e chưa sử dụng nhiều. Đa phần em sử dụng docker để chạy ứng dụng ở local dùng để develop và test.

## 3. Hỏi những kinh nghiệm trong CV?

- A thấy e có exp 2 năm code PHP thì e code ứng dụng gì... nói a nghe thử:
- Ứng dụng đó là ứng dụng dùng để nhập xuất hàng hoá bằng PHP Laravel. Ứng dụng này có các chức năng như: Quản lý sản phẩm, quản lý kho,... đây là ứng dụng cho một công ty Nhật bản tại việt Nam.
- Nhiệm vụ chính cuả em là maintaince và phát triển thêm các chức năng mới cho ứng dụng này khi có yêu cầu.

## 4. Bonus

Có thế một số kiến thức em vẫn chưa nắm vững hoặc có nhiều kiến thức e khộng nhớ hết. Nhưng với 4 năm kinh nghiệm trong ngành này, và e tự tin với khả năng research của mình nên e tin mình có thể hoàn thành mọi công việc mà công ty giao phó.

## 5. Lương

- 550 là mức e happy và có thể tham giao ngày tháng 1/2022. Còn thấp hơn thì e sẽ tìm kiếm nhiều cơ hội khác.

## 6. Nếu e vào không ty thì ceareer path của e như thế nào? (5p)

---

1.  Mô hình Waterfall ? Phase của 1 quá trình làm Task theo Waterfall , từ a-z ?
    1. Requirement Analysis
    2. System Design
    3. Implementation
    4. Testing
    5. Deployment
    6. Maintenance
2.  Mô hình Agile ? Phase của 1 quá trình làm Task theo Agile, từ a-z ?

    1. Requirement Analysis
    2. Sprint Planning
    3. Implementation
    4. Testing
    5. Deployment
    6. Review
    7. Retrospective

3.  Dùng gì làm DB ? Postgres vs MySQL cái nào mạnh hơn ? Ưu điểm của từng cái ?

    - Postgres hỗ trợ nhiều loại dữ liệu phức tạp hơn so với MySQL. VD: JSON, JSONB, ARRAY, ....
    - Query Strategy: Postgres sử dụng cost-based optimizer, MySQL sử dụng rule-based optimizer

4.  Vòng đời của Postgres ???
5.  Vòng đời của ứng dụng React ?

    - Initialization
    - Mounting
    - Updating
    - Unmounting

6.  Xử lý bất đồng bộ và đồng bộ trong js ? Event Loop hoạt động ra sao ?

    - Bất đồng bộ: setTimeout, setInterval, Promise, async/await
    - Event Loop: Là một vòng lặp vô tận, nó sẽ lặp đi lặp lại để kiểm tra xem có task nào cần thực thi không. Nếu có thì thực thi task đó, nếu không thì chờ đến khi có task mới.

7.  Khái niệm middleware và vai trò của nó trong ứng dụng ? Luồng đi của middleware(đại khái vậy) đặc biệt chú ý tới các câu hỏi liên quan middleware

    - Middleware là một hàm có thể truy cập vào request, response object và next middleware trong chuỗi middleware của ứng dụng.
    - Middleware có thể thực hiện các công việc như: logging, authentication, authorization, error handling, ...
    - Luồng đi của middleware: Middleware sẽ được thực thi theo thứ tự mà nó được đăng ký trong ứng dụng. Khi một middleware thực thi xong nó sẽ gọi hàm `next()` để chuyển quyền điều khiển cho middleware tiếp theo.

8.  Làm việc với Backend và viết API rồi thế có biết nó kêu tới lambda ra sao không ?

    - Lambda là một dịch vụ của AWS, nó cho phép chúng ta chạy code mà không cần phải quản lý server. Lambda sẽ tự động scale theo nhu cầu của ứng dụng.
    - Lambda có thể được trigger bởi nhiều sự kiện khác nhau như: HTTP request, S3 event, DynamoDB event, ...

9.  Làm việc với automation Test rồi thì PM sẽ hỏi các phase Test (cái này e ko hiểu lắm)

    - Test Plan: Là bước đầu tiên trong quá trình test, ở đây chúng ta sẽ xác định scope của test, test case, test data, ...
    - Test Design: Là bước thiết kế test case, test data, test environment, ...
    - Test Execution: Là bước thực thi test case, test data, test environment, ...
    - Test Closure: Là bước kết thúc test, ở đây chúng ta sẽ review lại kết quả test, viết báo cáo test, ...

Ôn tập 1 số khái niệm trong React như route, state và redux...

## Calculate Salary

(550-48)/13-2-8 = 29
(500-48)/13-2-8 = 26
(450-48)/13-1-7 = 23

420 = 22

410 = 21
380 = 20
