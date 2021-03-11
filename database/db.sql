-- creating the database
CREATE DATABASE test1;

-- utilising the database
use crudnodejsmysql;

-- creatting a table
CREATE TABLE test(
    id int(6) UNSIGNED AUTO_INCREMENT PRIMARY_KEY,
    name varchar(50) NOT_NULL,
    address varchar(100)  NOT_NULL,
    phone varchar(15) 
);

-- tO show all tables
SHOW TABLES;

-- to describe the tables
describe test;