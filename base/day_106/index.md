# Regex

## Tìm số điện thoại

```regex
(?:\D)(\d{9,11})(?:\n)
```

```input
id: 0987654321123123
Tên: Nguyễn Văn A
Email: nguyenvana@gmail.com
Số điện thoại: 09876543211
Địa chỉ: Hà Nội


id: 123127295842738409270
Địa chỉ: HCM
Email: nguyenvanB@gmail.com
Phone: 0123456789
Tên: Anh B
```

## Read Passport


## Tìm ngày tháng năm

```regex
(.*)>>>>>>>>(.*)>>>>(.*)
```

```input
PHAMTUANLINH>>>>>>>>1999>>>>MALE
```

```List
{"name":"$1","age":$2,"sex":"$3"}
```

```output
{"name":"PHAMTUANLINH","age":1999,"sex":"MALE"}
```

https://regex101.com/r/FIQr2f/1