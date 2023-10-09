// content.js

// Tìm phần tử cần tương tác trên trang web
var targetElement = document.getElementById('targetElementXXX');

// Kiểm tra xem phần tử có tồn tại không
if (targetElement) {
  // Thực hiện các hành động tương tác với phần tử ở đây
  // Ví dụ: Khi tìm thấy phần tử, bạn có thể thêm sự kiện click vào nó
  targetElement.addEventListener('click', function () {
    // Thực hiện hành động khi phần tử được click
    // Ví dụ: console.log("Phần tử đã được click!");
  });
}
