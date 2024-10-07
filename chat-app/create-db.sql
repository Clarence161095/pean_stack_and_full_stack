-- Tạo bảng users
CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    displayName VARCHAR(255) NOT NULL
);

-- Tạo bảng conversation
CREATE TABLE conversation (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Tạo bảng conversations_of_user
CREATE TABLE conversations_of_user (
    email VARCHAR(255),
    conversation_id VARCHAR(255),
    PRIMARY KEY (email, conversation_id),
    FOREIGN KEY (email) REFERENCES users(email),
    FOREIGN KEY (conversation_id) REFERENCES conversation(id)
);

-- Tạo bảng messages
CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    conversation_id VARCHAR(255),
    content TEXT NOT NULL,
    sender VARCHAR(255),
    FOREIGN KEY (conversation_id) REFERENCES conversation(id),
    FOREIGN KEY (sender) REFERENCES users(email)
);

-- Import dữ liệu cho bảng users
INSERT INTO users (email, displayName) VALUES
('tuan_email', 'Tuan'),
('linh_email', 'Linh'),
('hau_email', 'Hau');

-- Import dữ liệu cho bảng conversation
INSERT INTO conversation (id, name) VALUES
('1', 'Tuan - Linh'),
('2', 'Linh - Hau');

-- Import dữ liệu cho bảng conversations_of_user
INSERT INTO conversations_of_user (email, conversation_id) VALUES
('tuan_email', '1'),
('linh_email', '1'),
('linh_email', '2'),
('hau_email', '2');

-- Import dữ liệu cho bảng messages
INSERT INTO messages (conversation_id, content, sender) VALUES
('1', 'Hello', 'tuan_email'),
('1', 'Hi', 'linh_email'),
('2', 'Hi', 'linh_email'),
('2', 'Hello', 'hau_email'),
('1', 'How are you?', 'tuan_email'),
('1', 'I''m fine', 'linh_email'),
('2', 'How are you?', 'linh_email'),
('2', 'I''m fine', 'hau_email');

-- Update trường send_time cho bảng messages
ALTER TABLE messages ADD COLUMN send_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
