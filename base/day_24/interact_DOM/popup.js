document.addEventListener('DOMContentLoaded', function () {
  var clickButton = document.getElementById('clickButton');

  clickButton.addEventListener('click', function () {
    alert(window.location.href)
  });
});

// Biến để lưu những button đã được click
let clicked = {};

async function clickButtonsAndScroll() {
  let buttonListDiv = document.querySelectorAll('.pw-multi-vote-icon');
  let buttonList = [];

  // Lấy danh sách các nút từ danh sách các div
  for (let div of buttonListDiv) {
    let button = div.querySelector('button');
    if (button) {
      buttonList.push(button);
    }
  }

  for (let button of buttonList) {
    // Kiểm tra xem button có trong hashmap clicked hay không
    if (!clicked[button]) {
      // Click button từ 3-10 lần
      let clickTimes = Math.floor(Math.random() * 8) + 3;
      for (let i = 0; i < clickTimes; i++) {
        button.focus();
      }
      // Lưu button vào hashmap
      clicked[button] = true;
      // Đợi từ 5-10s trước khi xử lý button tiếp theo
      await sleep(Math.random() * 5000 + 5000);
    }
  }

  // Nếu không còn button nào để click, thực hiện scroll
  if (buttonList.length === 0) {
    for (let i = 0; i < 50; i++) {
      window.scrollBy(0, 1000);
      // Đợi 2s trước khi scroll tiếp
      await sleep(2000);
    }
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Gọi hàm
clickButtonsAndScroll();
