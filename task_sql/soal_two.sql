-- Buat query untuk menghitung jumlah user masing masing gender pada suatu hobby tertentu
SELECT u.gender, COUNT(u.id) AS total
FROM users u
JOIN map_user_hobby m ON u.id = m.id_user
JOIN hobby h ON m.id_hobby = h.id
WHERE h.name = 'skipping'
GROUP BY u.gender;