
const name = "TUAN";

// IIFE là cách mà chúng ta có thể tạo một function và chạy nó ngay lập tức mà không cần gọi tên function đó.
(function printToScreen(text) {
  const name = text + 1;
  {
    const name = text + 2;
    {
      const _name = text + 3;
      console.log('Hello:', name);
    }
  }
})('tuan')
