import os
import re
import csv

# Đường dẫn đến thư mục chứa các tệp source code
source_path = "./"

# Đọc danh sách tên biến từ file input.csv
variable_names = []
with open('input.csv', 'r') as csv_file:
    csv_reader = csv.reader(csv_file)
    for row in csv_reader:
        # Loại bỏ dấu gạch dưới và chuyển thành chữ thường
        variable_name = row[0].replace('_', '').lower()
        variable_names.append(variable_name)

# Tạo một biểu thức chính quy để tìm các dòng chứa thông tin cần tìm
pattern = r"@makker\('([^']+)'\)\nprivate string (\w+);"

# Duyệt qua danh sách tên biến
for variable_name in variable_names:
    # Duyệt qua các tệp con trong thư mục source
    for root, _, files in os.walk(source_path):
        for filename in files:
            if filename.endswith(".java"):  # Thay đổi định dạng tệp nếu cần
                file_path = os.path.join(root, filename)
                with open(file_path, "r", encoding="utf-8") as file:
                    content = file.read()
                    matches = re.findall(pattern, content)
                    found = False
                    for match in matches:
                        # So sánh tên biến từ tệp source sau khi xử lý với danh sách từ input.csv
                        if match[1].replace('_', '').lower() == variable_name:
                            japanese_text = match[0]
                            print(f"{variable_name} {japanese_text}")
                            found = True
                            break
                    if not found:
                        # Nếu không tìm thấy, in ra tên biến với japanese_text trống
                        print(f"{variable_name} ")
