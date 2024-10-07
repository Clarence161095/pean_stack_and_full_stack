
-- 1. Lấy tất cả các conversation của user có email là 'tuan_email'
SELECT c.id, c.name
FROM conversation c
JOIN conversations_of_user cou ON c.id = cou.conversation_id
WHERE cou.email = 'tuan_email';

-- 2. Lấy tất cả các message trong conversation có id là '1'
SELECT m.id, m.content, m.sender, m.send_time
FROM messages m
WHERE m.conversation_id = '1';

-- 3. Thêm một message mới vào conversation có id là '1' từ user có email là 'tuan_email'
INSERT INTO messages (conversation_id, content, sender, send_time)
VALUES ('1', 'I''m fine', 'tuan_email', '2024-10-07 12:31:30')