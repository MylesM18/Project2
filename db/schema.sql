DROP DATABASE IF EXISTS Inspire_db;

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE Inspire_db;

USE Inspire_db;

-- Create the table tasks.
CREATE TABLE songs (
  id int NOT NULL AUTO_INCREMENT,
  artist varchar(255) NOT NULL,
   title varchar(255) NOT NULL,
   song_lyric MEDIUMTEXT NOT NULL,
   preview varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- CREATE TABLE lyrics (
--   id int NOT NULL AUTO_INCREMENT,
--   title varchar(255) NOT NULL,
   
-- PRIMARY KEY (id)
-- );





-- Insert a set of records.
