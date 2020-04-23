BEGIN TRANSACTION;

INSERT into users (name, email, entries, joined ) values('John', 'john@gmail.com', 5, '2018-01-01');
INSERT into login (hash, email) values('$2a$10$zZUS7CTtA0hYT/m6fuO21.tqfr0NhySczi1HfeJ9Ba1bMplDr1VRy', 'john@gmail.com');

COMMIT;