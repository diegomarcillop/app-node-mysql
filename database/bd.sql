DROP DATABASE myapp;
CREATE  DATABASE myapp;
USE myapp;

CREATE TABLE users(
     idUser INT(11) NOT NULL,
     userName VARCHAR(16) NOT NULL,
     password VARCHAR(60) NOT NULL,
     fullName VARCHAR(100) NOT NULL
);

CREATE TABLE links(
     idLink INT(11) NOT NULL,
     titleLink VARCHAR(150) NOT NULL,
     url VARCHAR(255) NOT NULL,
     descripLink VARCHAR(100) NOT NULL,
     fkUser INT(11) NOT NULL,
     dateCreate timestamp NOT NULL DEFAULT current_timestamp
     
);

ALTER TABLE users 
     ADD PRIMARY KEY(idUser);

ALTER TABLE users
     MODIFY idUser INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
 
ALTER TABLE links 
     ADD PRIMARY KEY(idLink);

ALTER TABLE links
     MODIFY idLink INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

ALTER TABLE links
     ADD FOREIGN KEY(fkUser) REFERENCES users(idUser);
