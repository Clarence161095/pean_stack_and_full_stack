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
    soLuongSachDaMuon: "number"
  },
  borrowings: {
    soTheDocGia: "string",
    idSach: "string",
    ngayMuon: "date",
    ngayTra: "date",
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
};

let result = ''

result += 'id	| Tiêu đề	| Tác giả	| Năm xuất bản	| Số lượng	| số lượng đã mượn |\n';
result += '--	| ------	| --------| ------------	| --------	| ---------------- |\n';

tableInfo.books.listID.forEach(id => {
  result += `${id} | ${tableValue[`books_tieuDe_${id}`]} | ${tableValue[`books_tacGia_${id}`]} | ${tableValue[`books_namXuatBan_${id}`]} | ${tableValue[`books_soLuong_${id}`]} | ${tableValue[`books_soLuongDaMuon_${id}`]}\n`;
})

console.log(result);