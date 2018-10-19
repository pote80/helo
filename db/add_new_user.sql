INSERT INTO users (username, pass)
values ($1, $2);
SELECT * FROM users
WHERE username = $1;