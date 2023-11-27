const db = [
  "Nguyễn Anh Tuấn",
  "Phạm Tuấn Linh",
  "Trần Thị Hương",
  "Lê Thị Mai",
  "Hoàng Thị Lan",
  "Vũ Thị Thu",
  "Ngô Thị Huệ",
  "Đặng Thị Hà",
  "Phan Thị Ngọc",
  "Nguyễn Thị Thảo",
  "Bùi Thị Quỳnh",
  "Nguyễn Thị Kim",
  "Lý Thị Hạnh",
  "Trần Thị Thúy",
  "Vương Thị Thanh",
  "Hoàng Thị Thủy",
  "Mai Thị Hoa",
  "Phạm Thị Hồng",
  "Lê Thị Nga",
  "Nguyễn Thị Hằng",
  "Ngô Thị Thanh",
  "Đỗ Thị Hương",
  "Trương Thị Lan",
  "Võ Thị Hải",
  "Lê Thị Thu",
  "Phan Thị Thùy",
  "Nguyễn Thị Loan",
  "Hoàng Thị Hà",
  "Trần Thị Ngọc",
  "Lý Thị Thảo",
  "Ngô Thị Hồng",
  "Vũ Thị Mai",
  "Phạm Thị Thu",
  "Bùi Thị Lan",
  "Trịnh Thị Thanh",
  "Nguyễn Thị Nguyệt",
  "Đặng Thị Thu",
  "Lê Thị Hồng",
  "Hoàng Thị Thảo",
  "Mai Thị Thúy",
  "Vương Thị Mai",
  "Lý Thị Hà",
  "Trần Thị Kim",
  "Nguyễn Thị Hòa",
  "Phan Thị Hằng",
  "Đỗ Thị Lan",
  "Võ Thị Thủy",
  "Nguyễn Thị Huyền",
  "Lê Thị Hoài",
  "Hoàng Thị Thanh",
  "Trần Thị Thu",
  "Mai Thị Lan",
  "Phạm Thị Trang"
];

function searchName(textSearch) {
  return db.filter((name) => {
    if(name.includes(textSearch)) {
       return name
    }
  })
}

console.log(searchName("Thảo"));