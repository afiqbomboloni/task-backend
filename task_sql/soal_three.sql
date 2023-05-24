-- Buat query untuk menghitung jumlah hobby dari setiap user yang masih aktif

SELECT u.name AS name_user, COUNT(m.id_user) AS total
FROM users u
JOIN map_user_hobby m ON u.id = m.id_user
WHERE u.status = 'Active'
GROUP BY u.name;
