CREATE DATABASE employees;

CREATE TABLE employee (
  id bigint UNSIGNED NOT NULL,
  username varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  position text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  
ALTER TABLE employee
  ADD PRIMARY KEY (id);
  
ALTER TABLE employee
  MODIFY id bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

  INSERT INTO employee (id, username, position) VALUES
(1, 'A', 'First'),
(2, 'B', 'Second'),
(3, 'C', 'Third'),
(4, 'D', 'Fourth');