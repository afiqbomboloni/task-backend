-- Hitung level rata - rata tiap user dari hobi yang dimiliki, ketika user memiliki hobi lebih dari 1

SELECT u.name, AVG(h.level) AS level_avg
FROM users u
JOIN map_user_hobby m ON u.id = m.id_user
JOIN hobby h ON m.id_hobby = h.id
GROUP BY u.name
HAVING COUNT(m.id_hobby) > 1;
