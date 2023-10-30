const tableInfo = {
  books: {
    tieuDe: "string",
    tacGia: "string",
    namXuatBan: "date",
    soLuong: "number",
    soLuongDaMuon: "number",
    tomTat: "string",
    thumbnailUrl: "string",
    listID: [1, 2, 3, 4, 5]
  },
  members: {
    tenDocGia: "string",
    soTheDocGia: "string",
    diaChi: "string",
    soLuongSachDaMuon: "number",
    listID:[1,2]
  },
  borrowings: {
    soTheDocGia: "string",
    idSach: "string",
    ngayMuon: "date",
    ngayTra: "date",
    listID:[3,4]
  },
  employee: {
    maNhanVien: "string",
    tenNhanVien: "string",
  }
}

const tableValue = {
  "books_tieuDe_1": "Sách 1",
  "books_tacGia_1": "Tác giả A",
  "books_namXuatBan_1": "2000",
  "books_soLuong_1": 5,
  "books_soLuongDaMuon_1": 2,
  "books_tieuDe_2": "Sách 2",
  "books_tacGia_2": "Tác giả B",
  "books_namXuatBan_2": "2010",
  "books_soLuong_2": 10,
  "books_soLuongDaMuon_2": 4,
  "books_tieuDe_3": "Sách 3",
  "books_tacGia_3": "Tác giả A",
  "books_namXuatBan_3": "2020",
  "books_soLuong_3": 3,
  "books_soLuongDaMuon_3": 1,
  "books_tieuDe_4": "Sách 4",
  "books_tacGia_4": "Tác giả C",
  "books_namXuatBan_4": "2015",
  "books_soLuong_4": 7,
  "books_soLuongDaMuon_4": 0,
  "books_tieuDe_5": "Sách 5",
  "books_tacGia_5": "Tác giả D",
  "books_namXuatBan_5": "2005",
  "books_soLuong_5": 2,
  "books_soLuongDaMuon_5": 2,
  "employee_maNhanVien_1": "nv001",
  "employee_tenNhanVien_1": "linhpt",
  "employee_maNhanVien_2": "nv002",
  "employee_tenNhanVien_2": "tuanna",
  "members_tenDocGia_1" : "Sach 1",
  "members_soTheDocGia_1" : "Tac gia A",
  "members_diaChi_1": "2000",
  "members_soLuongSachDaMuon_1" : "5",
  "members_tenDocGia_2" : "Sach 2",
  "members_soTheDocGia_2" : "Tac gia B",
  "members_diaChi_2": "2000",
  "members_soLuongSachDaMuon_2" : "5",
  "borrowings_soTheDocGia_3": "1",
  "borrowings_idSach_3": "2",
  "borrowings_ngayMuon_3": "2023",
  "borrowings_ngayTra_3": "2024",
  "borrowings_soTheDocGia_4": "1",
  "borrowings_idSach_4": "2",
  "borrowings_ngayMuon_4": "2023",
  "borrowings_ngayTra_4": "2024"
};

let result = ''
let result2 = '';
let result3 = '';

result += 'id	| Tiêu đề	| Tác giả	| Năm xuất bản	| Số lượng	| số lượng đã mượn |\n';
result += '--	| ------	| --------| ------------	| --------	| ---------------- |\n';

result2 += 'id	| Ten doc gia	|So The Doc Gia	| Dia Chi	| số lượng sach đã mượn |\n';
result2 += '--	| ------	| --------| ------------	| --------	| ---------------- |\n';

result3 += 'id	|So The Doc Gia	| ma sach	| ngay muon | ngay tra|\n';
result3 += '--	| ------	| --------| ------------	| --------	| ---------------- |\n';

tableInfo.books.listID.forEach(id => {
  result += `${id} | ${tableValue[`books_tieuDe_${id}`]} | ${tableValue[`books_tacGia_${id}`]} | ${tableValue[`books_namXuatBan_${id}`]} | ${tableValue[`books_soLuong_${id}`]} | ${tableValue[`books_soLuongDaMuon_${id}`]}\n`;
})

tableInfo.members.listID.forEach(v => {
  result2 += `${v} | ${tableValue[`members_tenDocGia_${v}`]} | ${tableValue[`members_soTheDocGia_${v}`]} | ${tableValue[`members_diaChi_${v}`]} | ${tableValue[`members_soLuongSachDaMuon_${v}`]}\n`;
})

tableInfo.borrowings.listID.forEach(v => {
  result3 += `${v} | ${tableValue[`borrowings_soTheDocGia_${v}`]} | ${tableValue[`borrowings_idSach_${v}`]} | ${tableValue[`borrowings_ngayMuon_${v}`]} | ${tableValue[`borrowings_ngayTra_${v}`]}\n`;
})

console.log(result);
console.log(result2);
console.log(result3);
