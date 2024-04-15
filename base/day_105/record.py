# code cho một đoạn code python quay màn hình với độ phân giải màn hình hiện tại và siêu nhẹ không tiếng với 20fps

import numpy as np
import cv2
import pyautogui

# Lấy độ phân giải màn hình hiện tại
SCREEN_SIZE = tuple(pyautogui.size())

# Định nghĩa codec và các thông số video
fourcc = cv2.VideoWriter_fourcc(*"XVID")
fps = 20
filename = "output.avi"

# Tạo đối tượng VideoWriter
out = cv2.VideoWriter(filename, fourcc, fps, SCREEN_SIZE)

while True:
    # Chụp ảnh màn hình
    img = pyautogui.screenshot()

    # Chuyển ảnh sang numpy array
    frame = np.array(img)

    # Chuyển đổi không gian màu từ BGR sang RGB
    frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    # Ghi frame vào file video
    out.write(frame)

    # Nhấn 'q' để dừng
    if cv2.waitKey(1) == ord('q'):
        break

# Giải phóng bộ nhớ
out.release()
cv2.destroyAllWindows()
