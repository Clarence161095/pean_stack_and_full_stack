Ví dụ trong source của tôi ở đâu đó có những đoạn code chứa những dòng code như bên dưới.
@makker('日本1')
private string japaneseAbc1;
@makker('日本2')
private string japaneseAbc2;
@makker('日本3')
private string japaneseAbc3;
@makker('日本4')
private string japaneseAbc4;


Tôi có một list như vậy:
japaneseabc1
japaneseabc2
japaneseabc3
japaneseabc4

giờ hãy giúp tôi sử dụng python đọc toàn bộ source hiện tại (toàn bộ file con trong source path được truyền vào là path tương đối)

Đầu ra mong muốn là:

japaneseabc1 日本1
japaneseabc2 日本2
japaneseabc3 日本3
japaneseabc4 日本4