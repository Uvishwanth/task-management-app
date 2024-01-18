CREATE DATABASE task;
CREATE TABLE to_do(created_on TIMESTAMP default CURRENT_TIMESTAMP, task VARCHAR(255) NOT NULL,id int AUTO_INCREMENT);
INSERT INTO to_do(task,deadline) values(default, 'example task','2024-01-17 13:20:38');