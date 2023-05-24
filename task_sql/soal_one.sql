-- Buat query untuk membuat tabel di atas dengan indexing

-- table users
CREATE INDEX idx_users_id ON users(id);

-- hobby
CREATE INDEX idx_hobby_id ON hobby(id);

-- map_user_hobby
CREATE INDEX idx_map_user_hobby_user_id ON map_user_hobby (id_user);
CREATE INDEX idx_map_user_hobby_hobby_id ON map_user_hobby (id_hobby);