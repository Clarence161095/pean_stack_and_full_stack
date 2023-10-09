// Hàm để scroll xuống phía dưới trong 20 giây
function scrollDownFor20Seconds() {
  var scrollInterval = setInterval(function () {
    window.scrollBy(0, 500); // Điều chỉnh dựa trên chiều cao bạn muốn cuộn
  }, 1000); // Cuộn mỗi 1 giây trong 20 giây

  setTimeout(function () {
    clearInterval(scrollInterval); // Dừng cuộn sau 20 giây
    findAndClickButtons(); // Gọi hàm tìm và click nút
  }, 20000); // 20 giây
}

// Hàm để tìm và click vào nút
function findAndClickButtons() {
  console.log("findAndClickButtons");
  var buttons = document.querySelectorAll('.li.ao.lk.nc.nd.lo.am.lp.lq.lr.lh');
  console.log('buttons.length: ', buttons.length);

  buttons.forEach(function (button) {
    var randomClicks = Math.floor(Math.random() * (10 - 3 + 1)) + 3; // Số lần click từ 3-10
    for (var i = 0; i < randomClicks; i++) {
      setTimeout(function () {
        button.click(); // Thực hiện click vào nút
      }, Math.random() * 3000); // Thực hiện mỗi 1-3 giây (ngẫu nhiên)
    }
  });
}
