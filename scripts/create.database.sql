--create db
CREATE DATABASE order-managment

--create tables
CREATE TABLE users (
    id serial primary key,
    username varchar(50) unique not null,
    password varchar(50) not null,
    name varchar(50) not null,
    address varchar(50) null,
    phone varchar(50) null,
    is_active bool default false not null
);