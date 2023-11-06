import pyautogui
import time
from PIL import Image

duration = 0
interval = 0.1
confident = 0.8

links = [
    "https://www.nhatot.com/mua-ban-nha-dat-huyen-hoc-mon-tp-ho-chi-minh/109916472.htm",
    "https://www.nhatot.com/mua-ban-can-ho-chung-cu-quan-nam-tu-liem-ha-noi/111454998.htm"
]

def moveToImage(image_path):
    image = Image.open(image_path)
    position = pyautogui.locateOnScreen(image_path, confidence=0.9)
    if position is not None:
        x, y = pyautogui.center(position)
        pyautogui.moveTo(x, y, duration)
        return x, y
    else:
        print(f"Không tìm thấy hình ảnh {image_path} trên màn hình.")
        return None

def goToUrl(text):
    x_url, y_url = moveToImage('image/url_position.png')
    if x_url is not None:
        pyautogui.moveTo(x_url + 200, y_url, duration)
        pyautogui.doubleClick(interval=interval)
        pyautogui.hotkey('ctrl', 'a', interval=interval)
        pyautogui.hotkey('ctrl', 'a', interval=interval)
        pyautogui.press('delete', interval=interval)
        pyautogui.press('delete', interval=interval)
        pyautogui.typewrite(text, interval=0)
        pyautogui.hotkey('enter')
    start_time = time.time()
    while time.time() - start_time <= 20:
        dang_tin = pyautogui.locateOnScreen('image/dang_tin_80.png', confidence=0.8)
        load_done = pyautogui.locateOnScreen('image/load_done.png', confidence=0.8)
        if dang_tin and load_done:
            pyautogui.moveTo(20, 800)
            pyautogui.doubleClick(interval=interval)
            break

def clickImageIfImageExist(image_path, confident=0.8, max_attempts=5):
    attempts = 0
    while attempts < max_attempts:
        positions = list(pyautogui.locateAllOnScreen(image_path, confidence=confident))
        if positions:
            positions.reverse()
            for position in positions:
                x, y = pyautogui.center(position)
                pyautogui.click(x, y)
            break
        else:
            attempts += 1
            time.sleep(0.3)

for link in links:
    goToUrl(link)
    clickImageIfImageExist('image/bam_de_hien_so_80.png', 0.7)
    clickImageIfImageExist('image/xem_them_80.png')
    time.sleep(1)
    pyautogui.hotkey('ctrl', '1', interval=interval)
    pyautogui.click(moveToImage('image/down_load_html_icon.png'))
    time.sleep(10)